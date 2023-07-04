// Auto-generated with deno_bindgen
function encode(v: string | Uint8Array): Uint8Array {
  if (typeof v !== "string") return v
  return new TextEncoder().encode(v)
}

function decode(v: Uint8Array): string {
  return new TextDecoder().decode(v)
}

// deno-lint-ignore no-explicit-any
function readPointer(v: any): Uint8Array {
  const ptr = new Deno.UnsafePointerView(v)
  const lengthBe = new Uint8Array(4)
  const view = new DataView(lengthBe.buffer)
  ptr.copyInto(lengthBe, 0)
  const buf = new Uint8Array(view.getUint32(0))
  ptr.copyInto(buf, 4)
  return buf
}

const url = new URL("../target/debug", import.meta.url)

let uri = url.pathname
if (!uri.endsWith("/")) uri += "/"

// https://docs.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibrarya#parameters
if (Deno.build.os === "windows") {
  uri = uri.replace(/\//g, "\\")
  // Remove leading slash
  if (uri.startsWith("\\")) {
    uri = uri.slice(1)
  }
}

const { symbols } = Deno.dlopen(
  {
    darwin: uri + "libflowscripter_template_deno_rust_library.dylib",
    windows: uri + "flowscripter_template_deno_rust_library.dll",
    linux: uri + "libflowscripter_template_deno_rust_library.so",
    freebsd: uri + "libflowscripter_template_deno_rust_library.so",
    netbsd: uri + "libflowscripter_template_deno_rust_library.so",
    aix: uri + "libflowscripter_template_deno_rust_library.so",
    solaris: uri + "libflowscripter_template_deno_rust_library.so",
    illumos: uri + "libflowscripter_template_deno_rust_library.so",
  }[Deno.build.os],
  {
    add: { parameters: ["i32", "i32"], result: "i32", nonblocking: false },
  },
)

export function add(a0: number, a1: number) {
  const rawResult = symbols.add(a0, a1)
  const result = rawResult
  return result
}
