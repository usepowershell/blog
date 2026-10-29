# Product

<!-- impeccable:product-schema 1 -->

Inferred from the repository and the October 2026 site audit brief. No question tool was available in this session, so these facts were not confirmed in an interview. Assumptions are marked.

## Platform

web

## Stack

Existing site: Hugo static site, project layouts plus a theme, deployed by GitHub Actions to Azure Static Web Apps. The visual refresh stays on that stack. (Confirmed by the repo and the brief.)

## Users

Practitioners who already know Steven Murawski’s work in PowerShell, configuration management, and DevOps, plus people who arrive from a search or a shared link and need a way into the essays that still hold up. (Inferred from the audit’s “start here” request and the post inventory.)

## Product Purpose

A personal archive of writing, 2009–2020, that remains readable and findable. Success is a stable URL for every post, a front page that points at the essays worth reading first, and a way to set time-bound posts aside without taking them offline.

## Positioning

The writing itself is the product: career and configuration-management essays from someone who practiced them, kept at the URLs they have had for years. (Inferred.)

## Operating Context

Read in a browser, often a single essay at a time, on a desk or a phone. Posts contain historical HTML, code fences, images, and embedded video. The site is rebuilt by Hugo in GitHub Actions and published to Azure Static Web Apps. (Confirmed by content and workflow.)

## Capabilities and Constraints

- Post permalinks stay `/ :year / :month / :filename /` as set in `config.toml`, including unusual filenames. (Confirmed.)
- Pages keep their front-matter permalinks (`/page/about`, `/page/devops-reading-list/`). (Confirmed.)
- Home page gains a “Start here” list driven by a data file, seeded with the career, DevOps, and configuration-management posts named in the audit. (Confirmed by the brief.)
- Archived posts stay published and leave the front page. Bulk tagging is a later content change. (Confirmed by the brief.)
- Remove Google+ sharing, Universal Analytics `UA-36317457-1`, and Disqus. Refer to X instead of Twitter in the site chrome. (Confirmed by the brief.)
- Do not consolidate categories, rewrite links, fix About typos, or edit the reading list in this change. (Confirmed by the brief.)
- The build must succeed with the workflow’s Hugo pin unless that pin is updated on purpose. (Confirmed.)

## Brand Commitments

Site title: “The More Things Change.” Author: Steven Murawski. License line already in config: Creative Commons Attribution-ShareAlike 4.0. Voice of the essays stays as written. (Confirmed.)

## Evidence on Hand

241 posts under `content/post/`, About and DevOps Reading List under `content/page/`, talk images under `static/talks/`. No new essays are invented for this change.

## Product Principles

- A URL that has been public stays public.
- The front page helps a new reader begin; it does not pretend the archive is a product blog.
- Historical posts render as they were written, including their HTML.
- Chrome (sharing, analytics, comments) that no longer works is removed rather than restyled.

## Accessibility & Inclusion

The brief requires readable type, responsive layout, contrast, visible focus, and semantic HTML. Dark mode is welcome. (Confirmed.)
