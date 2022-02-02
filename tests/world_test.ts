import { assert } from "./test_deps.ts";
import { world } from "../src/lib.ts";

Deno.test("World Test", () => {
  world();
  assert(true);
});
