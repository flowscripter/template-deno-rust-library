// Auto-generated with deno_bindgen
import { CachePolicy, prepare } from "https://deno.land/x/plug@0.4.1/plug.ts";
function encode(v: string | Uint8Array): Uint8Array {
  if (typeof v !== "string") return v;
  return new TextEncoder().encode(v);
}
const opts = {
  name: "flowscripter_template_deno_rust_library",
  url: (new URL("../target/debug", import.meta.url)).toString(),
  policy: CachePolicy.NONE,
};
const _lib = await prepare(opts, {
  add: { parameters: ["i32", "i32"], result: "i32", nonblocking: false },
});

export function add(a0: number, a1: number) {
  return _lib.symbols.add(a0, a1) as number;
}
