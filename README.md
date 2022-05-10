# template-deno-rust-library

[![version](https://img.shields.io/github/v/release/flowscripter/template-deno-rust-library?sort=semver)](https://github.com/flowscripter/template-deno-rust-library/releases)
[![build](https://img.shields.io/github/workflow/status/flowscripter/template-deno-rust-library/release-deno-rust-library)](https://github.com/flowscripter/template-deno-rust-library/actions/workflows/release-deno-rust-library.yml)
[![coverage](https://codecov.io/gh/flowscripter/template-deno-rust-library/branch/main/graph/badge.svg?token=EMFT2938ZF)](https://codecov.io/gh/flowscripter/template-deno-rust-library)
[![dependencies](https://deps.rs/repo/github/flowscripter/template-deno-rust-library/status.svg)](https://deps.rs/crate/flowscripter_template_deno_rust_library)
[![license: MIT](https://img.shields.io/github/license/flowscripter/template-deno-rust-library)](https://github.com/flowscripter/template-deno-rust-library/blob/main/LICENSE)

> Project template for a Rust library with Deno FFI bindings.

## Usage

1. Use as a
   [template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)
   to create a new repository.
2. Update links and references in `README.md`.

## Development

Install [deno_bindgen](https://github.com/denoland/deno_bindgen):
`deno install -Afq -n deno_bindgen https://deno.land/x/deno_bindgen/cli.ts`

Build: `deno_bindgen`

Test: `cargo test && deno test -A --unstable`

Lint: `cargo fmt && deno fmt`

## Documentation

### Overview

PNG image generated from `images/uml_diagram.mermaid`:

![UML Diagram](images/uml_diagram.png "UML Diagram")

### API

Link to auto-generated API docs for the library:

[API Documentation](https://docs.rs/crate/flowscripter_template_deno_rust_library/latest)

## License

MIT © Flowscripter
