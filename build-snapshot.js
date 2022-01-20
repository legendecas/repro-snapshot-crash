'use strict';

// extracted from https://github.com/isaacs/sax-js/blob/v0.6.1/lib/sax.js#L255

// character classes and tokens
var number = "0124356789"
  , letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // (Letter | "_" | ":")
  , entity = number+letter+"#"

// turn all the string character sets into character class objects.

entity = charClass(entity)

function charClass (str) {
  return str.split("").reduce(function (s, c) {
    s[c] = true
    return s
  }, {})
}
