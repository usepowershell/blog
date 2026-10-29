---
name: The More Things Change
description: A field-book frame around a calm reading column for Steven Murawski's essays.
colors:
  ground: "#d5e3da"
  sheet: "#f3f7f4"
  ink: "#14241c"
  muted: "#3c5348"
  mark: "#9d1c1c"
  link: "#143d32"
  visited: "#5c3a32"
  line: "#b7c9be"
  code: "#e6efe9"
  ground-dark: "#101815"
  sheet-dark: "#18211c"
  ink-dark: "#e8f2ec"
  muted-dark: "#b5c9bd"
  mark-dark: "#ff7a6e"
  link-dark: "#d5eee4"
  visited-dark: "#f0d2cc"
  line-dark: "#2c3b34"
  code-dark: "#0e1612"
typography:
  station:
    fontFamily: "Big Shoulders Text, Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "0.01em"
  body:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  mono:
    fontFamily: "Fragment Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
rounded:
  none: "0"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  theme-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.35rem 0.75rem"
    height: "2.75rem"
  theme-toggle-hover:
    backgroundColor: "transparent"
    textColor: "{colors.mark}"
---

## Overview

**Creative North Star: "The field book."** The site is a bound level book: a green page on a deeper green cover, with a double red leveling rule as the only ornament. The reading column stays quiet so a 2014 essay and a 2020 debugging note can sit in the same measure.

**Key Characteristics:**

- The cover (ground) shows around a lighter sheet. Nothing floats on a shadow.
- Big Shoulders Text carries the wordmark, years, and reading-order numerals. Atkinson Hyperlegible carries the essays.
- One motion: the masthead rule draws in from the left. Section rules are the same mark, already there.
- Dark mode is the same book under a lamp, not a second theme.

## Colors

Light is the office-desk default. Dark follows the system preference and the toggle, and it is stored for the next visit.

The red mark is for the double rule, the current nav item, the reading-order numerals, focus, and the Archived label. Links in prose are a deep green, underlined, and shift to the mark on hover. Muted text is the date and footer color, and it stays above 4.5:1 on both the cover and the sheet.

## Typography

Atkinson Hyperlegible is the reading face because these are long essays and the brief asked for accessible type. Big Shoulders Text is the station face: condensed, used at the masthead and for dates and years, never for body copy. Fragment Mono is only for code.

Body measure is 68 characters. Headings use a clear size step and more space above than below. Dates use tabular figures and do not wrap.

## Layout

The sheet is at most 48rem and shares its edges with the masthead and the footer. On a wide screen the post date sits in a left margin beside the title. Below 800px that date stacks above the title. Below 560px list rows stack the date over the title.

Home, page one: Recent posts, then Career, then Configuration management. Each list is newest first by post date. Recent posts are ten to a page; later home pages are only that list. The archive is every post grouped by year, with a year index at the top.

## Elevation & Depth

Flat. The sheet is a lighter field on the cover, not a card. No drop shadows. The double rule is two 1px lines, 4px apart.

## Shapes

Corners are square. The theme toggle is a square-cornered outline. Code blocks are square. Lists are not cards.

## Components

- **Wordmark.** Site title, station face, links home.
- **Double rule.** Under the wordmark (draws once), under section headings, and as a thematic break in prose.
- **Primary nav.** About, Blog, DevOps Reading List, Archive. The current item is the mark color with a 2px underline.
- **Entry.** A full-row link: date, title, optional Archived label.
- **Start-here list.** A numbered reading order. Numerals use the station face and the mark color.
- **Theme toggle.** Says Dark or Light, naming the theme it will switch to.
- **Share.** Text links for X, Facebook, and LinkedIn on posts.

## Do's and Don'ts

Do:

- Keep post permalinks on `/:year/:month/:filename/`.
- Edit the home reading list in `data/start-here.yaml`.
- Mark a post `archived: true` to remove it from the front page without taking down its URL.
- Keep focus visible, and keep body text on the sheet at 68 characters.

Don't:

- Put a card around every essay or list row.
- Use the station face for paragraphs.
- Add analytics, comment embeds, or a Google+ control back into the chrome.
- Label the X profile or the share link as Twitter.
