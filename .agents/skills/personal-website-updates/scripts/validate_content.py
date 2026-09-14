#!/usr/bin/env python3
"""Validate personal website news and activity content."""

from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import date
from pathlib import Path
from typing import Any


REPO_ROOT = Path(__file__).resolve().parents[4]
DEFAULT_CONTENT_FILE = REPO_ROOT / "app" / "data" / "site-content.json"
REQUIRED_FIELDS = ("date", "label", "title", "detail")


def normalized(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip().casefold()


def validate_collection(name: str, records: Any, seen_titles: dict[str, str], seen_links: dict[str, str]) -> list[str]:
    errors: list[str] = []
    if not isinstance(records, list):
        return [f"{name} must be an array"]

    previous_date: str | None = None
    for index, record in enumerate(records):
        location = f"{name}[{index}]"
        if not isinstance(record, dict):
            errors.append(f"{location} must be an object")
            continue

        missing = [field for field in REQUIRED_FIELDS if field not in record]
        if missing:
            errors.append(f"{location} is missing: {', '.join(missing)}")
            continue

        try:
            date.fromisoformat(record["date"])
        except (TypeError, ValueError):
            errors.append(f"{location}.date must use YYYY-MM-DD")

        if previous_date is not None and record["date"] > previous_date:
            errors.append(f"{name} must be ordered newest-first near {location}")
        previous_date = record["date"]

        title_key = normalized(str(record["title"]))
        if not title_key:
            errors.append(f"{location}.title must not be empty")
        elif title_key in seen_titles:
            errors.append(f"Duplicate title in {seen_titles[title_key]} and {location}")
        else:
            seen_titles[title_key] = location

        href = normalized(str(record.get("href", "")))
        if href:
            if not href.startswith(("http://", "https://")):
                errors.append(f"{location}.href must be an absolute HTTP(S) URL")
            elif href in seen_links:
                errors.append(f"Duplicate link in {seen_links[href]} and {location}")
            else:
                seen_links[href] = location

    return errors


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--content-file", type=Path, default=DEFAULT_CONTENT_FILE, help=argparse.SUPPRESS)
    args = parser.parse_args()

    try:
        content = json.loads(args.content_file.read_text())
    except (FileNotFoundError, json.JSONDecodeError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1

    seen_titles: dict[str, str] = {}
    seen_links: dict[str, str] = {}
    errors = []
    errors.extend(validate_collection("homeNews", content.get("homeNews"), seen_titles, seen_links))
    errors.extend(validate_collection("activities", content.get("activities"), seen_titles, seen_links))

    if errors:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        return 1

    print(f"Valid: {len(content['homeNews'])} homepage news item(s), {len(content['activities'])} activity record(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
