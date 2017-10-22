// _appendKey : ([k], v, k) -> [k]
const _appendKey = (keys, val, key) =>
  append(key, keys)

// _assign : ({ k: v }, { k: v }) -> { k: v }
const _assign = (a, b) => {
  for (let key in b) a[key] = b[key]
  return a
}

// _comp : (a, b) -> Number
const _comp = (a, b) =>
  a < b ? -1 : b < a ? 1 : 0

// _index : ({ k: Number }, String) -> { k: Number }
const _index = (idx, key) =>
  assoc(key, 1, idx)

// _partial : ((* -> a), [*]) -> * -> a
const _partial = (f, args) =>
  f.bind(null, ...args)

// length : [a] -> Number
const length = list =>
  list.length

// unapply : ([a] -> b) -> * -> b
const unapply = f => (...args) =>
  f(args)

// curryN : Number -> (* -> a) -> (* -> a)
const _curryN = (n, f) =>
  n < 1 ? f : unapply(args => {
    const left = n - length(args)
    return left > 0
      ? _curryN(left, _partial(f, args))
      : f.apply(null, args)
  })

const curryN = _curryN(2, _curryN)

// curry : (* -> a) -> (* -> a)
const curry = f =>
  curryN(length(f), f)

// _xfrm : { k: (v -> v) } -> v -> k -> v
const _xfrm = curry((xfrms, val, key) => {
  let f = xfrms[key] || identity
  if (typeof f === 'object') f = evolve(f)
  return f(val)
})

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
  const res = _assign({}, obj)
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

// defaultTo : a -> b -> a | b
const defaultTo = curry((a, b) =>
  b == null || b !== b ? a : b
)

// dissoc : String -> { k: v } -> { k: v }
const dissoc = curry((key, obj) => {
  const res = _assign({}, obj)
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

// evolve : { k: (v -> v) } -> { k: v } -> { k: v }
const evolve = curry((xfrms, obj) => {
  return mapObj(_xfrm(xfrms), obj)
})

// filter : (a -> Boolean) -> [a] -> [a]
const filter = curry((pred, list) =>
  list.filter(pred)
)

// flip : (a -> b -> c) -> (b -> a -> c)
const flip = curry((f, x, y) =>
  curry(f)(y, x)
)

// identity : a -> a
const identity = x => x

// join : String -> [a] -> String
const join = curry((sep, list) =>
  list.join(sep)
)

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
  reduce(_assign, {}, [ a, b ])
)

// multiply : Number -> Number -> Number
const multiply = curry((a, b) =>
  a * b
)

// not : a -> a
const not = a => !a

// objOf : k -> v -> { k: v }
const objOf = curry((key, val) =>
  ({ [key]: val })
)

// omit : [String] -> { k: v } -> { k: v }
const omit = curry((keys, obj) => {
  const idx = reduce(_index, {}, keys)
  const res = {}
  for (let key in obj) if (!idx[key]) res[key] = obj[key]
  return res
})

// partial : (* -> a) -> [*] -> * -> a
const partial = curry(_partial)

// path : [String] -> { k: v } -> v
const path = curry(([ head, ...tail ], obj) =>
  length(tail) ? path(tail, obj[head]) : obj[head]
)

// pick : [String] -> { k: v } -> { k: v }
const pick = curry((keys, obj) =>
  zipObj(keys, props(keys, obj))
)

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

// reduceObj : (a -> v -> k -> a) -> a -> { k: v } -> a
const reduceObj = curry((f, acc, obj) => {
  for (let key in obj) acc = f(acc, obj[key], key)
  return acc
})

// reduceRight : Foldable f => (b -> a -> b) -> b -> f a -> b
const reduceRight = curry((f, acc, list) =>
  list.reduceRight(f, acc)
)

// replace : RegExp -> String -> String -> String
const replace = curry((regexp, replacement, string) =>
  string.replace(regexp, replacement)
)

// sort : ((a, a) -> Number) -> [a] -> [a]
const sort = curry((comp, list) =>
  list.slice(0).sort(comp)
)

// sortBy : Ord b => (a -> b) -> [a] -> [a]
const sortBy = curry((f, list) =>
  sort(useWith(_comp, [ f, f ]), list)
)

// tap : (a -> b) -> a -> a
const tap = curry((f, x) =>
  (f(x), x)
)

// thrush : a -> (a -> b) -> b
const thrush = curry((x, f) =>
  f(x)
)

// useWith : (b... -> c) -> [(a -> b)] -> a... -> c
const useWith = curry((f, xfrms) =>
  unapply(compose(apply(f), map(_xfrm(xfrms))))
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
  for (let i = length(keys); i--;) res[keys[i]] = vals[i]
  return res
})

// compose : ((y -> z), ..., (a -> b)) -> a -> z
const compose = unapply(flip(reduceRight(thrush)))

// pipe : ((a -> b), ..., (y -> z)) -> a -> z
const pipe = unapply(flip(reduce(thrush)))

// slice : Number -> Number -> [a] -> [a]
const slice = curry((from, to, list) =>
  list.slice(from, to)
)

// head : [a] -> a
const head = prop(0)

// init : [a] -> [a]
const init = slice(0, -1)

// last : [a] -> a
const last = compose(head, slice(-1, void 0))

// tail : [a] -> [a]
const tail = slice(1, Infinity)

// keys : { k: v } -> [k]
const keys = reduceObj(_appendKey, [])

// values : { k: v } -> [v]
const values = converge(props, [ keys, identity ])

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
  defaultTo,
  dissoc,
  dissocPath,
  evolve,
  filter,
  flip,
  head,
  identity,
  init,
  join,
  juxt,
  keys,
  last,
  length,
  map,
  mapObj,
  match,
  merge,
  multiply,
  not,
  objOf,
  omit,
  partial,
  path,
  pick,
  pipe,
  prepend,
  prop,
  props,
  reduce,
  reduceObj,
  reduceRight,
  replace,
  slice,
  sort,
  sortBy,
  tail,
  tap,
  thrush,
  unapply,
  unless,
  useWith,
  values,
  when,
  zipObj
}
