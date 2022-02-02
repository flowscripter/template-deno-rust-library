import { add } from "../bindings/bindings.ts";
import { log } from "../deps.ts";

/**
 * Adds 2 and 2 and logs the result as "World (4)"
 */
export function world(): void {
  log.info(`World ${add(2, 2)}`);
}
