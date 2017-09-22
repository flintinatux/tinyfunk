# tinyfunk

The tiniest of functional libraries.  Currently 738 bytes gzipped.

- [Motivation](#motivation)
- [API](#api)

## Motivation

So often in an attempt to reduce bundle size when importing larger functional libraries (such as [`ramda`](https://www.npmjs.com/package/ramda)) into a frontend project, it is common to directly import only the bits that you need, like this:

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
const compose = (...fs) =>
  flip(reduceRight(thrush))(fs)
```

With [`uglify-es`](https://www.npmjs.com/package/uglify-es), this mangles down to the following.  I doubt you'll find a smaller implementation.

```js
const u=(...e)=>b(N(q))(e)
```

**Note:** Since the number one goal here is size-reduction, certain FP niceties, including argument type-checking, have been intentionally discarded.

## API

If you've lived with FP long enough, you are likely familiar with most of the functions listed below.  So I've opted to leave out the lengthy descriptions and include only the signatures.  I'll be adding more functions as I need them, but if you see any of your favorites missing, just [post an issue](https://github.com/flintinatux/tinyfunk/issues) and I'll be sure to consider it.

| Function | Signature |
| -------- | --------- |
| `add` | `Number -> Number -> Number` |
| `apply` | `(* -> a) -> [*] -> a` |
| `assoc` | `String -> a -> { k: v } -> { k: v }` |
| `assocPath` | `[String] -> v -> { k: v } -> { k: v }` |
| `call` | `(* -> a) -> * -> a` |
| `compose` | `((y -> z), ..., (a -> b)) -> a -> z` |
| `concat` | `Semigroup a => a -> a -> a` |
| `constant` | `a -> b -> a` |
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
| `path` | `[String] -> { k: v } -> v` |
| `pipe` | `((a -> b), ..., (y -> z)) -> a -> z` |
| `prop` | `String -> { k: v } -> v` |
| `props` | `[k] -> { k: v } -> [v]` |
| `reduce` | `Foldable f => (b -> a -> b) -> b -> f a -> b` |
| `reduceRight` | `Foldable f => (b -> a -> b) -> b -> f a -> b` |
| `replace` | `RegExp -> String -> String` |
| `thrush` | `a -> (a -> b) -> b` |
| `unless` | `(a -> Boolean) -> (a -> a) -> a -> a` |
| `when` | `(a -> Boolean) -> (a -> a) -> a -> a` |
| `zipObj` | `[k] -> [v] -> { k: v }` |
