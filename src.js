const { assign } = Object

// length : [a] -> Number
const length = list =>
  list.length

// curryN : Number -> (* -> a) -> (* -> a)
const _curryN = (n, f) =>
  n < 1 ? f : (...args) => {
    const left = n - length(args)
    return left > 0
      ? _curryN(left, f.bind(null, ...args))
      : f.apply(null, args)
  }

const curryN = _curryN(2, _curryN)

// curry : (* -> a) -> (* -> a)
const curry = f =>
  curryN(length(f), f)

// add : Number -> Number -> Number
const add = curry((a, b) =>
  a + b
)

// append : a -> [a] -> [a]
const append = curry((last, init) =>
  concat(init, [ last ])
)

// apply : (* -> a) -> [*] -> a
const apply = curry((f, args) =>
  f.apply(null, args)
)

// assoc : String -> v -> { k: v } -> { k: v }
const assoc = curry((prop, val, obj) => {
  const res = assign({}, obj)
  res[prop] = val
  return res
})

// assocPath : [String] -> v -> { k: v } -> { k: v }
const assocPath = curry(([ head, ...tail ], x, obj) =>
  assoc(head, length(tail) ? assocPath(tail, x, obj[head]) : x, obj)
)

// call : (* -> a) -> * -> a
const call = curryN(2, (f, ...args) =>
  apply(f, args)
)

// compose : ((y -> z), ..., (a -> b)) -> a -> z
const compose = (...fs) =>
  flip(reduceRight(thrush))(fs)

// concat : Semigroup a => a -> a -> a
const concat = curry((a, b) =>
  a.concat(b)
)

// constant : a -> () -> a
const constant = x => () => x

// converge : (b... -> c) -> [(a -> b)] -> a -> c
const converge = curry((after, fs) =>
  compose(apply(after), juxt(fs))
)

// dissoc : String -> { k: v } -> { k: v }
const dissoc = curry((key, obj) => {
  const res = assign({}, obj)
  delete res[key]
  return res
})

// dissocPath : [String] -> { k: v } -> { k: v }
const dissocPath = curry(([ head, ...tail ], obj) =>
  !head ? obj :
  obj[head] == null ? obj :
  length(tail) ? assoc(head, dissocPath(tail, obj[head]), obj) :
  dissoc(head, obj)
)

const _xfrm = curry((xfrms, val, key) => {
  let f = xfrms[key] || identity
  if (typeof f === 'object') f = evolve(f)
  return f(val)
})

// evolve : { k: (v -> v) } -> { k: v } -> { k: v }
const evolve = curry((xfrms, obj) => {
  return mapObj(_xfrm(xfrms), obj)
})

// flip : (a -> b -> c) -> (b -> a -> c)
const flip = curry((f, x, y) =>
  curry(f)(y, x)
)

// identity : a -> a
const identity = x => x

// juxt : [(a -> b)] -> a -> [b]
const juxt = curry((fs, x) =>
  map(thrush(x), fs)
)

// map : Functor f => (a -> b) -> f a -> f b
const map = curry((f, functor) =>
  functor.map(f)
)

// mapObj : (v -> k -> v) -> { k: v } -> { k: v }
const mapObj = curry((f, obj) => {
  const res = {}
  for (let key in obj) res[key] = f(obj[key], key)
  return res
})

// match : RegExp -> String -> [String | Undefined]
const match = curry((regexp, string) =>
  string.match(regexp) || []
)

// merge : { k: v } -> { k: v } -> { k: v }
const merge = curry((a, b) =>
  assign({}, a, b)
)

// multiply : Number -> Number -> Number
const multiply = curry((a, b) =>
  a * b
)

// path : [String] -> { k: v } -> v
const path = curry(([ head, ...tail ], obj) =>
  length(tail) ? path(tail, obj[head]) : obj[head]
)

// pipe : ((a -> b), ..., (y -> z)) -> a -> z
const pipe = (...fs) =>
  flip(reduce(thrush))(fs)

// prepend : a -> [a] -> [a]
const prepend = curry((head, tail) =>
  concat([ head ], tail)
)

// prop : String -> { k: v } -> v
const prop = curry((key, obj) =>
  obj[key]
)

// props : [k] -> { k: v } -> [v]
const props = curry((keys, obj) =>
  map(flip(prop)(obj), keys)
)

// reduce : Foldable f => (b -> a -> b) -> b -> f a -> b
const reduce = curry((f, acc, list) =>
  list.reduce(f, acc)
)

// reduceRight : Foldable f => (b -> a -> b) -> b -> f a -> b
const reduceRight = curry((f, acc, list) =>
  list.reduceRight(f, acc)
)

// replace : RegExp -> String -> String -> String
const replace = curry((regexp, replacement, string) =>
  string.replace(regexp, replacement)
)

// thrush : a -> (a -> b) -> b
const thrush = curry((x, f) =>
  f(x)
)

// unless : (a -> Boolean) -> (a -> a) -> a -> a
const unless = curry((pred, f, x) =>
  pred(x) ? x : f(x)
)

// when : (a -> Boolean) -> (a -> a) -> a -> a
const when = curry((pred, f, x) =>
  pred(x) ? f(x) : x
)

// zipObj : [k] -> [v] -> { k: v }
const zipObj = curry((keys, vals) => {
  const res = {}
  for (let i = 0; i < length(keys); i++) res[keys[i]] = vals[i]
  return res
})

module.exports = {
  add,
  append,
  apply,
  assoc,
  assocPath,
  call,
  compose,
  concat,
  constant,
  converge,
  curry,
  curryN,
  dissoc,
  dissocPath,
  evolve,
  flip,
  identity,
  juxt,
  length,
  map,
  mapObj,
  match,
  merge,
  multiply,
  path,
  pipe,
  prepend,
  prop,
  props,
  reduce,
  reduceRight,
  replace,
  thrush,
  unless,
  when,
  zipObj
}
