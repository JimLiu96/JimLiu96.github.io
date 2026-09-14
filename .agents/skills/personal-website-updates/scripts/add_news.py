#!/usr/bin/env python3
"""Add homepage news and archive homepage items six months old or older."""

from __future__ import annotations

import argparse
import calendar
import json
import re
import sys
from datetime import date
from pathlib import Path
from typing import Any


REPO_ROOT = Path(__file__).resolve().parents[4]
DEFAULT_CONTENT_FILE = REPO_ROOT / "app" / "data" / "site-content.json"


def parse_iso_date(value: str) -> date:
    try:
        return date.fromisoformat(value)
    except ValueError as exc:
        raise argparse.ArgumentTypeError("expected a date in YYYY-MM-DD format") from exc


def subtract_months(value: date, months: int) -> date:
    month_index = value.year * 12 + value.month - 1 - months
    year, zero_based_month = divmod(month_index, 12)
    month = zero_based_month + 1
    day = min(value.day, calendar.monthrange(year, month)[1])
    return date(year, month, day)


def normalized(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip().casefold()


def load_content(path: Path) -> dict[str, Any]:
    try:
        content = json.loads(path.read_text())
    except FileNotFoundError:
        raise SystemExit(f"Content file not found: {path}")
    except json.JSONDecodeError as exc:
        raise SystemExit(f"Invalid JSON in {path}: {exc}") from exc

    if not isinstance(content.get("homeNews"), list) or not isinstance(content.get("activities"), list):
        raise SystemExit("Content must contain homeNews and activities arrays")
    return content


def sort_newest_first(records: list[dict[str, Any]]) -> None:
    records.sort(key=lambda record: record["date"], reverse=True)


def archive_stale_news(content: dict[str, Any], today: date) -> list[dict[str, Any]]:
    cutoff = subtract_months(today, 6)
    recent: list[dict[str, Any]] = []
    archived: list[dict[str, Any]] = []

    for record in content["homeNews"]:
        record_date = parse_iso_date(record["date"])
        if record_date <= cutoff:
            archived.append(record)
        else:
            recent.append(record)

    content["homeNews"] = recent
    content["activities"].extend(archived)
    sort_newest_first(content["homeNews"])
    sort_newest_first(content["activities"])
    return archived


def ensure_unique(content: dict[str, Any], title: str, href: str | None) -> None:
    wanted_title = normalized(title)
    wanted_href = normalized(href or "")

    for collection_name in ("homeNews", "activities"):
        for record in content[collection_name]:
            if normalized(record.get("title", "")) == wanted_title:
                raise SystemExit(f"Duplicate title already exists in {collection_name}: {record['title']}")
            if wanted_href and normalized(record.get("href", "")) == wanted_href:
                raise SystemExit(f"Duplicate link already exists in {collection_name}: {href}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--date", required=True, type=parse_iso_date, help="News date in YYYY-MM-DD format")
    parser.add_argument("--title", required=True, help="Concise news headline")
    parser.add_argument("--detail", default="", help="Optional supporting sentence")
    parser.add_argument("--href", help="Optional authoritative URL")
    parser.add_argument("--today", type=parse_iso_date, default=date.today(), help="Archival reference date")
    parser.add_argument("--content-file", type=Path, default=DEFAULT_CONTENT_FILE, help=argparse.SUPPRESS)
    parser.add_argument("--dry-run", action="store_true", help="Preview changes without writing")
    args = parser.parse_args()

    content = load_content(args.content_file)
    ensure_unique(content, args.title, args.href)

    record: dict[str, str] = {
        "date": args.date.isoformat(),
        "label": args.date.strftime("%b. %Y").replace("May.", "May").replace("June.", "June").replace("July.", "July"),
        "title": args.title.strip(),
        "detail": args.detail.strip(),
    }
    if args.href:
        record["href"] = args.href.strip()

    content["homeNews"].append(record)
    archived = archive_stale_news(content, args.today)
    rendered = json.dumps(content, indent=2, ensure_ascii=False) + "\n"

    print(f"Add: {record['label']} — {record['title']}")
    if archived:
        print("Archive to Activities:")
        for item in archived:
            print(f"  - {item['label']} — {item['title']}")
    else:
        print("Archive to Activities: none")

    if args.dry_run:
        print("Dry run: no files changed")
        return 0

    args.content_file.write_text(rendered)
    print(f"Updated: {args.content_file}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
