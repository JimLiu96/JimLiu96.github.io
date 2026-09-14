---
name: personal-website-updates
description: Maintain this personal academic website, including homepage news, the activity archive, services, publications, profile assets, metadata, and styling. Use whenever changing content or presentation in this repository, especially when adding news that must roll into Activities at six months old.
---

# Personal Website Updates

Work from the repository root and preserve the restrained academic visual system in `app/globals.css`.

## News workflow

Homepage news and the activity timeline share `app/data/site-content.json` as their canonical content source.

When adding news:

1. Inspect and validate existing news and activities with:
   `python3 .agents/skills/personal-website-updates/scripts/validate_content.py`
2. Add the item with `scripts/add_news.py`; do not hand-edit the news arrays. The script checks for duplicates across current news and archived activities, orders records newest-first, and moves homepage news six calendar months old or older into Activities.
3. Review the resulting diff for wording, links, and factual accuracy.
4. Run the validator again, then run `pnpm lint` and `pnpm build`.

Example:

```bash
python3 .agents/skills/personal-website-updates/scripts/add_news.py \
  --date 2026-09-02 \
  --title "Released a new research benchmark" \
  --detail "Code and evaluation data are publicly available." \
  --href "https://example.com/project"
```

Use `--dry-run` to preview the addition and any six-month archival without writing. Use `--today YYYY-MM-DD` only for deterministic testing or when the user explicitly wants a different archival reference date.

## Site conventions

- Do not invent professional records. Use user-provided facts or verify current claims from authoritative sources.
- Keep internal navigation as ordinary `<a>` elements with the scoped lint exception already in the page files; `next/link` currently causes vinext hydration errors in this project.
- Use `next/image` for local profile and content images, with meaningful alt text and responsive sizes.
- Add dated service and activity records newest-first. Keep category labels consistent with the existing archive.
- Preserve mobile behavior at the 680px breakpoint unless the requested design calls for a deliberate change.

For layout-affecting edits, run the local site and visually check both desktop and mobile widths. Finish only after the browser console is clean.
