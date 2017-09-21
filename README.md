# tinyfunk

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
