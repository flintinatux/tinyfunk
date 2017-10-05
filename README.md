<p align="center" style="background:#c1282d;padding:20px;">
  <a href="#"><img src="https://user-images.githubusercontent.com/888052/31184960-cef1a1a4-a8f8-11e7-88e8-5d740281014f.png" alt="tinyfunk" style="max-width:100%;"></a>
</p>
<p align="center">
  The tiniest of functional libraries.  Currently 822 bytes gzipped.
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/tinyfunk">
    <img src="https://img.shields.io/npm/v/tinyfunk.svg" alt="npm version" style="max-width:100%;">
  </a>
  <a href="https://www.npmjs.com/package/tinyfunk">
    <img src="https://img.shields.io/npm/dm/tinyfunk.svg" alt="npm downloads" style="max-width:100%;">
  </a>
  <a href="https://travis-ci.org/flintinatux/tinyfunk">
    <img src="https://travis-ci.org/flintinatux/tinyfunk.svg?branch=master" alt="Build Status" style="max-width:100%;">
  </a>
  <br />
  <a href="https://coveralls.io/github/flintinatux/tinyfunk?branch=master">
    <img src="https://coveralls.io/repos/github/flintinatux/tinyfunk/badge.svg?branch=master" alt="Coverage Status" style="max-width:100%;">
  </a>
  <a href="https://nodesecurity.io/orgs/flintinatux/projects/d5f96f7c-898a-4244-a9d2-4f3c429d5f3d">
    <img src="https://nodesecurity.io/orgs/flintinatux/projects/d5f96f7c-898a-4244-a9d2-4f3c429d5f3d/badge" alt="NSP Status" style="max-width:100%;">
  </a>
</p>

## Motivation

Most popular functional libraries, like [Ramda](https://www.npmjs.com/package/ramda), are quite large.  To use them in a frontend project, it's common to import only the bits you need (to keep the bundle size down) like this:

```js
const assoc = require('ramda/src/assoc')
const map   = require('ramda/src/map')
const merge = require('ramda/src/merge')
// etc.
```

But multiple `require` statements take up extra space, since many `js` code compression tools (including [`uglify-js`](https://www.npmjs.com/package/uglify-js)) don't mangle strings.  The AST overhead required to bundle the various modules adds an additional size penalty, not to mention the extra compute time to parse the twisted flow of the AST, which adds to a longer perceived load time.

`tinyfunk` takes a different approach. It exports a single module to minimize AST overhead and obviate the repeated require statements.  You just destructure the functions you need in one go:

```js
const { assoc, map, merge } = require('tinyfunk')
```

Where possible, it also composes more complex functions by reusing basic ones.  A good example is `compose`, implemented as so:

```js
const compose = unapply(flip(reduceRight(thrush)))
```

With [`uglify-es`](https://www.npmjs.com/package/uglify-es), this mangles down to the following.  I doubt you'll find a smaller implementation.

```js
const I=r(b(B(E)))
```

## Caveat emptor

In an effort to keep `tinyfunk` lean and mean - and most of all, tiny - I've taken a few shortcuts.

1.  **None of the exported functions perform type-checking of arguments.**<br/>If type-checking is a runtime debug tool you tend to lean on, then you'll need to look elsewhere.

2.  **Many of the function combinators only support unary functions.**<br/>This includes `compose`, `converge`, `juxt`, `pipe`, `thrush`, etc.  Unary functions are easily composable, readily portable, and so much simpler (ie: tinier) to support.

3.  **Unlike other popular FP libraries, each exported function only has a single job.**<br/>For example, Ramda's `map` supports "mapping" over functors, objects, and even functions.  In `tinyfunk`, those various jobs are supported instead by `map`, `mapObj`, and `compose` respectfully.  So be sure to use the right tool for the job at hand.

## API

If you've lived with FP long enough, you are likely familiar with most of the functions listed below.  So I've opted to leave out the lengthy descriptions and include only the signatures.  I'll be adding more functions as I need them, but if you see any of your favorites missing, just [post an issue](https://github.com/flintinatux/tinyfunk/issues) and I'll be sure to consider it.

| Function | Signature |
| -------- | --------- |
| `add` | `Number -> Number -> Number` |
| `append` | `a -> [a] -> [a]` |
| `apply` | `(* -> a) -> [*] -> a` |
| `assoc` | `String -> v -> { k: v } -> { k: v }` |
| `assocPath` | `[String] -> v -> { k: v } -> { k: v }` |
| `call` | `(* -> a) -> * -> a` |
| `compose` | `((y -> z), ..., (a -> b)) -> a -> z` |
| `concat` | `Semigroup a => a -> a -> a` |
| `constant` | `a -> () -> a` |
| `converge` | `(b... -> c) -> [(a -> b)] -> a -> c` |
| `curry` | `(* -> a) -> (* -> a)` |
| `curryN` | `Number -> (* -> a) -> (* -> a)` |
| `dissoc` | `String -> { k: v } -> { k: v }` |
| `dissocPath` | `[String] -> { k: v } -> { k: v }` |
| `evolve` | `{ k: (v -> v) } -> { k: v } -> { k: v }` |
| `flip` | `(a -> b -> c) -> (b -> a -> c)` |
| `identity` | `a -> a` |
| `juxt` | `[(a -> b)] -> a -> [b]` |
| `length` | `[a] -> Number` |
| `map` | `Functor f => (a -> b) -> f a -> f b` |
| `mapObj` | `(v -> k -> v) -> { k: v } -> { k: v }` |
| `match` | `RegExp -> String -> [String]` |
| `merge` | `{ k: v } -> { k: v } -> { k: v }` |
| `multiply` | `Number -> Number -> Number` |
| `partial` | `(* -> a) -> [*] -> * -> a` |
| `path` | `[String] -> { k: v } -> v` |
| `pipe` | `((a -> b), ..., (y -> z)) -> a -> z` |
| `prepend` | `a -> [a] -> [a]` |
| `prop` | `String -> { k: v } -> v` |
| `props` | `[k] -> { k: v } -> [v]` |
| `reduce` | `Foldable f => (b -> a -> b) -> b -> f a -> b` |
| `reduceRight` | `Foldable f => (b -> a -> b) -> b -> f a -> b` |
| `replace` | `RegExp -> String -> String -> String` |
| `tap` | `(a -> b) -> a -> a` |
| `thrush` | `a -> (a -> b) -> b` |
| `unapply` | `([a] -> b) -> * -> b` |
| `unless` | `(a -> Boolean) -> (a -> a) -> a -> a` |
| `when` | `(a -> Boolean) -> (a -> a) -> a -> a` |
| `zipObj` | `[k] -> [v] -> { k: v }` |
