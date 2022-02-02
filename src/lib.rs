//! # Template Rust Library
//!
//! `flowscripter_template_rust_library` provides a sample function to be called from Deno FFI.

use deno_bindgen::deno_bindgen;
use flowscripter_template_rust_library::adder;

/// Adds two numbers together.
///
/// # Examples
/// ```
/// let arg1 = 2;
/// let arg2 = 2;
/// let answer = flowscripter_template_rust_library::add(arg1, arg2);
///
/// assert_eq!(4, answer);
/// ```
#[deno_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    adder(a, b)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn adder_works() {
        assert_eq!(4, add(2, 2));
    }
}
