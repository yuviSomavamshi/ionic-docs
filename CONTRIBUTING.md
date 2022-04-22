# Contributing Guide

Thanks for your interest in contributing to Simulator's documentation! :tada: Check the guidelines below for suggestions and requirements before submitting your contribution.

- [Contributing Guide](#contributing-guide)
  - [Development Workflow](#development-workflow)
  - [Using VS Code on Windows](#using-vs-code-on-windows)
  - [Project Structure](#project-structure)
    - [Directories](#directories)
  - [Authoring Content](#authoring-content)
    - [Authoring Locally](#authoring-locally)
  - [Translation](#translation)
  - [Reporting Issues](#reporting-issues)
  - [Pull Request Guidelines](#pull-request-guidelines)
  <!-- - [Project Management](#project-management) -->
  - [Deploying](#deploying)
  - [License](#license)

---

## Development Workflow

In order to run the documentation locally, install the dependencies and run the development server:

```sh
$ npm install
$ npm start
```

> **Note**: recent versions of npm (5+) and Node.js (10+) are required to run certain scripts.

---

## Using VS Code on Windows

The Simulator docs were originally built in a Mac-based environment, so Mac-focused linting rules apply when committing changes. To contribute on Windows, do the following:

- Configure VS Code to read/save files using line breaks (LF) instead of carriage returns (CRLF). Set it globally by navigating to: Settings -> Text Editor -> Files -> Eol. Set to `\n`.
- Check that the Git setting `core.autocrlf` is set to `false`: run `git config -l | grep autocrlf`. Switch it to false using: `git config --global core.autocrlf false`.
- If you've already cloned the `simulator-docs` repo, the files may already be cached as LF. To undo this, you need to clean the cache files of the repository. Run the following (make sure you stage or commit your changes first): `git rm --cached -r .` then `git reset --hard`.

## Project Structure

Simulator's documentation is built using [Docusaurus](https://docusaurus.io/). The content is either written or generated as Markdown.

### Directories

- `scripts/` - build scripts used to generate markdown or json files
- `src/` - source code and content of the docs
  - `components/` - components used across the site
    - `global/` - components used globally
    - `page/` - components used on a single page or in a limited scope
  - `styles/` - global styles and variables
    - `components/` - styles split out into the components they target
- `static/`
  - `demos/` - self-contained demos, optionally presented by pages via `demoUrl` YAML frontmatter
- `versioned_docs/` - versions of the docs created by the docusaurus versioning command
- `versioned_sitebars/` - versions of the docs sidebars created by the docusaurus versioning command

## Authoring Content

The content of the Simulator docs is written as [Markdown](https://commonmark.org/) in `docs/`. Each Markdown file corresponds to a route unless explicitly changed in the frontmatter.

```
/docs/                  =>  src/pages/index.md
/docs/intro/cli         =>  src/pages/intro/cli.md
/docs/theming/advanced  =>  src/pages/theming/advanced.md
/docs/theming           =>  src/pages/theming.md
```

You can make copy edits to the site by [editing the Markdown files directly on GitHub](https://help.github.com/articles/editing-files-in-another-user-s-repository/). In your pull request, please explain what was missing from or inaccurate about the content.

## License

This repo is licensed and managed separately from Simulator itself.

By contributing to this repo, you agree to have your contributions licensed under the Apache 2.0 license. See [LICENSE](../LICENSE) for the full license text.
