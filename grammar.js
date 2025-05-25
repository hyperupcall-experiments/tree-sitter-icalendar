/**
 * @file Icalendar grammar for tree-sitter
 * @author Edwin Kofler <edwin@kofler.dev>
 * @license MPL-2.0
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

const beginOrEnd = /(BEGIN|END):.+/;

module.exports = grammar({
  name: "icalendar",

  rules: {
    // prettier-ignore
    source_file: ($) =>
      // seq(
        // beginOrEnd,
        repeat(seq(
            $.key,
            optional(repeat(seq($.semicolon, $.key))),
            choice($.colon, '='),
            $.value,
            '\n'
        )),
    // ),
    key: ($) => /[A-Z]+/,
    value: ($) => /(.|\.)+/,
    semicolon: ($) => ";",
    colon: ($) => ":",
    line: ($) => /.+/,
  },
});
