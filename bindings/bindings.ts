// Auto-generated with deno_bindgen
import { CachePolicy, prepare } from "https://deno.land/x/plug@0.5.2/plug.ts"

function encode(v: string | Uint8Array): Uint8Array {
  if (typeof v !== "string") return v
  return new TextEncoder().encode(v)
}

function decode(v: Uint8Array): string {
  return new TextDecoder().decode(v)
}

function readPointer(v: any): Uint8Array {
  const ptr = new Deno.UnsafePointerView(v as bigint)
  const lengthBe = new Uint8Array(4)
  const view = new DataView(lengthBe.buffer)
  ptr.copyInto(lengthBe, 0)
  const buf = new Uint8Array(view.getUint32(0))
  ptr.copyInto(buf, 4)
  return buf
}

const url = new URL(
  "https://github.com/flowscripter/template-deno-rust-library/releases/download/v1.0.9",
  import.meta.url,
)
let uri = url.toString()
if (!uri.endsWith("/")) uri += "/"

let darwin: string | { aarch64: string; x86_64: string } = uri
  + "libflowscripter_template_deno_rust_library.dylib"

if (url.protocol !== "file:") {
  // Assume that remote assets follow naming scheme
  // for each macOS artifact.
  darwin = {
    aarch64: uri + "libflowscripter_template_deno_rust_library_arm64.dylib",
    x86_64: uri + "libflowscripter_template_deno_rust_library.dylib",
  }
}

const opts = {
  name: "flowscripter_template_deno_rust_library",
  urls: {
    darwin,
    windows: uri + "flowscripter_template_deno_rust_library.dll",
    linux: uri + "libflowscripter_template_deno_rust_library.so",
  },
  policy: undefined,
}
const _lib = await prepare(opts, {
  add: { parameters: ["i32", "i32"], result: "i32", nonblocking: false },
})

export function add(a0: number, a1: number) {
  let rawResult = _lib.symbols.add(a0, a1)
  const result = rawResult
  return result
}
