# template-deno-rust-library

[![version](https://img.shields.io/github/v/release/flowscripter/template-deno-rust-library?sort=semver)](https://github.com/flowscripter/template-deno-rust-library/releases)
[![build](https://img.shields.io/github/workflow/status/flowscripter/template-deno-rust-library/release-deno-rust-library)](https://github.com/flowscripter/template-deno-rust-library/actions/workflows/release-deno-rust-library.yml)
[![coverage](https://codecov.io/gh/flowscripter/template-deno-rust-library/branch/main/graph/badge.svg?token=EMFT2938ZF)](https://codecov.io/gh/flowscripter/template-deno-rust-library)
[![rust dependencies](https://deps.rs/repo/github/flowscripter/template-deno-rust-library/status.svg)](https://deps.rs/crate/flowscripter_template_deno_rust_library)
[![deno dependencies](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Fupdates%2Fhttps%2Fraw.githubusercontent.com%2Fflowscripter%2Ftemplate-deno-rust-library%2Fmain%2Fmod.ts)](https://github.com/flowscripter/template-deno-rust-library/blob/main/deps.ts)
[![rust doc](https://img.shields.io/docsrs/flowscripter_template_deno_rust_library)](https://docs.rs/flowscripter_template_deno_rust_library)
[![license: MIT](https://img.shields.io/github/license/flowscripter/template-deno-rust-library)](https://github.com/flowscripter/template-deno-rust-library/blob/main/LICENSE)

> Project template for a Rust library with Deno FFI bindings.

## Project Template Usage

1. Use as a
   [template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)
   to create a new repository.
2. Update links and references in `README.md`.

## Deno Module Usage

```typescript
import { world } from "https://raw.githubusercontent.com/flowscripter/template-deno-rust-library/v1.0.7/mod.ts";

world();
```

## Development

Install [deno_bindgen](https://github.com/denoland/deno_bindgen):
`deno install -Afq -n deno_bindgen https://deno.land/x/deno_bindgen/cli.ts`

Build: `deno_bindgen`

Test: `cargo test && deno test -A --unstable`

Lint: `cargo fmt && deno fmt`

## Documentation

### Overview

PNG image generated from `images/uml_diagram.mermaid`:

![UML Diagram](https://raw.githubusercontent.com/flowscripter/template-deno-rust-library/main/images/uml_diagram.png "UML Diagram")

## License

MIT © Flowscripter
