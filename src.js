// _appendKey :: ([k], v, k) -> [k]
const _appendKey = (keys, val, key) =>
  append(key, keys)

// _assign :: ({ k: v }, { k: v }) -> { k: v }
const _assign = (a, b) => {
  for (let key in b) a[key] = b[key]
  return a
}

// _comp :: (a, b) -> Number
const _comp = (a, b) =>
  a < b ? -1 : b < a ? 1 : 0

// _index :: ({ k: Number }, String) -> { k: Number }
const _index = (idx, key) =>
  assoc(key, 1, idx)

// _partial :: ((a... -> b), [a]) -> a... -> b
const _partial = (f, args) =>
  f.bind(null, ...args)

// _putBy :: (v -> k) -> { k: v } -> v -> { k: v }
const _putBy = f => (acc, item) =>
  assoc(f(item), item, acc)

// _smash :: ([a], a) -> [b]
const _smash = (acc, item) =>
  concat(acc, flatten(item))

// length :: [a] -> Number
const length = list =>
  list.length

// unapply :: ([a] -> b) -> a... -> b
const unapply = f => (...args) =>
  f(args)

// curryN :: Number -> ((a, b, ...) -> z) -> a -> b -> ... -> z
const _curryN = (n, f) =>
  n < 1 ? f : unapply(args => {
    const left = n - length(args)
    return left > 0
      ? _curryN(left, _partial(f, args))
      : f.apply(null, args)
  })

const curryN = _curryN(2, _curryN)

// curry :: ((a, b, ...) -> z) -> a -> b -> ... -> z
const curry = f =>
  curryN(length(f), f)

// _xfrm :: { k: (v -> v) } -> v -> k -> v
const _xfrm = curry((xfrms, val, key) => {
  let f = xfrms[key] || identity
  if (typeof f === 'object') f = evolve(f)
  return f(val)
})

// add :: Number -> Number -> Number
const add = curry((a, b) =>
  a + b
)

// append :: a -> [a] -> [a]
const append = curry((last, init) =>
  concat(init, [ last ])
)

// apply :: (a... -> b) -> [a] -> b
const apply = curry((f, args) =>
  f.apply(null, args)
)

// assoc :: k -> v -> { k: v } -> { k: v }
const assoc = curry((prop, val, obj) => {
  const res = _assign({}, obj)
  res[prop] = val
  return res
})

// assocPath :: [k] -> v -> { k: v } -> { k: v }
const assocPath = curry(([ head, ...tail ], x, obj) =>
  assoc(head, length(tail) ? assocPath(tail, x, obj[head]) : x, obj)
)

// call :: (a... -> b) -> a... -> b
const call = curryN(2, (f, ...args) =>
  apply(f, args)
)

// concat :: Semigroup a => a -> a -> a
const concat = curry((a, b) =>
  a.concat(b)
)

// constant :: a -> () -> a
const constant = x => () => x

// converge :: (b... -> c) -> [(a -> b)] -> a -> c
const converge = curry((after, fs) =>
  compose(apply(after), juxt(fs))
)

// defaultTo :: a -> a -> a
const defaultTo = curry((a, b) =>
  b == null || b !== b ? a : b
)

// dissoc :: k -> { k: v } -> { k: v }
const dissoc = curry((key, obj) => {
  const res = _assign({}, obj)
  delete res[key]
  return res
})

// dissocPath :: [k] -> { k: v } -> { k: v }
const dissocPath = curry(([ head, ...tail ], obj) =>
  !head ? obj :
  obj[head] == null ? obj :
  length(tail) ? assoc(head, dissocPath(tail, obj[head]), obj) :
  dissoc(head, obj)
)

// either :: (a -> Boolean) -> (a -> Boolean) -> (a -> Boolean)
const either = curry((f, g, x) =>
  f(x) || g(x)
)

// evolve :: { k: (v -> v) } -> { k: v } -> { k: v }
const evolve = curry((xfrms, obj) => {
  return mapObj(_xfrm(xfrms), obj)
})

// filter :: (a -> Boolean) -> [a] -> [a]
const filter = curry((pred, list) =>
  list.filter(pred)
)

// find :: (a -> Boolean) -> [a] -> a
const find = curry((pred, list) =>
  list.find(pred)
)

// flip :: (a -> b -> c) -> (b -> a -> c)
const flip = curry((f, x, y) =>
  curry(f)(y, x)
)

// identity :: a -> a
const identity = x => x

// ifElse :: (a -> Boolean) -> (a -> b) -> (a -> b) -> (a -> b)
const ifElse = curry((pred, pos, neg, x) =>
  pred(x) ? pos(x) : neg(x)
)

// is :: Constructor -> a -> Boolean
const is = curry((type, val) =>
  val != null && val.constructor === type || val instanceof type
)

// join :: String -> [a] -> String
const join = curry((sep, list) =>
  list.join(sep)
)

// juxt :: [(a -> b)] -> a -> [b]
const juxt = curry((fs, x) =>
  map(thrush(x), fs)
)

// map :: Functor f => (a -> b) -> f a -> f b
const map = curry((f, functor) =>
  functor.map(f)
)

// mapObj :: (v -> k -> v) -> { k: v } -> { k: v }
const mapObj = curry((f, obj) => {
  const res = {}
  for (let key in obj) res[key] = f(obj[key], key)
  return res
})

// match :: RegExp -> String -> [String]
const match = curry((regexp, string) =>
  string.match(regexp) || []
)

// merge :: { k: v } -> { k: v } -> { k: v }
const merge = curry((a, b) =>
  reduce(_assign, {}, [ a, b ])
)

// multiply :: Number -> Number -> Number
const multiply = curry((a, b) =>
  a * b
)

// nAry :: Number -> (a... -> b) -> (a... -> b)
const nAry = curry((n, f) =>
  unapply(compose(apply(f), take(n)))
)

// not :: a -> a
const not = a => !a

// objOf :: k -> v -> { k: v }
const objOf = curry((key, val) =>
  ({ [key]: val })
)

// omit :: [k] -> { k: v } -> { k: v }
const omit = curry((keys, obj) => {
  const idx = reduce(_index, {}, keys)
  const res = {}
  for (let key in obj) if (!idx[key]) res[key] = obj[key]
  return res
})

// partial :: (a... -> b) -> [a] -> a... -> b
const partial = curry(_partial)

// partialRight :: (a... -> b) -> [a] -> a... -> b
const partialRight = curryN(3, (f, right, ...left) =>
  apply(f, concat(left, right))
)

// path :: [k] -> { k: v } -> v
const path = curryN(2, ([ head, ...tail ], obj={}) =>
  length(tail) ? path(tail, obj[head]) : obj[head]
)

// pathEq :: [k] -> v -> { k: v } -> Boolean
const pathEq = curry((paths, val, obj) =>
  path(paths, obj) === val
)

// pick :: [k] -> { k: v } -> { k: v }
const pick = curry((keys, obj) =>
  zipObj(keys, props(keys, obj))
)

// prepend :: a -> [a] -> [a]
const prepend = curry((head, tail) =>
  concat([ head ], tail)
)

// prop :: k -> { k: v } -> v
const prop = curry((key, obj) =>
  obj[key]
)

// propEq :: k -> v -> { k: v } -> Boolean
const propEq = curry((key, val, obj) =>
  obj[key] === val
)

// props :: [k] -> { k: v } -> [v]
const props = curry((keys, obj) =>
  map(flip(prop)(obj), keys)
)

// reduce :: Foldable f => (b -> a -> b) -> b -> f a -> b
const reduce = curry((f, acc, list) =>
  list.reduce(f, acc)
)

// reduceObj :: (a -> v -> k -> a) -> a -> { k: v } -> a
const reduceObj = curry((f, acc, obj) => {
  for (let key in obj) acc = f(acc, obj[key], key)
  return acc
})

// reduceP :: (b -> a -> Promise b) -> b -> [a] -> Promise b
const reduceP = curry((f, acc, list) =>
  pipeP(...map(unary(flip(f)), list))(acc)
)

// reduceRight :: Foldable f => (b -> a -> b) -> b -> f a -> b
const reduceRight = curry((f, acc, list) =>
  list.reduceRight(f, acc)
)

// reduceRightP :: (b -> a -> Promise b) -> b -> [a] -> Promise b
const reduceRightP = curry((f, acc, list) =>
  composeP(...map(unary(flip(f)), list))(acc)
)

// replace :: RegExp -> String -> String -> String
const replace = curry((regexp, replacement, string) =>
  string.replace(regexp, replacement)
)

// sort :: ((a, a) -> Number) -> [a] -> [a]
const sort = curry((comp, list) =>
  list.slice(0).sort(comp)
)

// sortBy :: Ord b => (a -> b) -> [a] -> [a]
const sortBy = curry((f, list) =>
  sort(useWith(_comp, [ f, f ]), list)
)

// split :: RegExp -> String -> [String]
const split = curry((regexp, string) =>
  string.split(regexp)
)

// tap :: (a -> b) -> a -> a
const tap = curry((f, x) =>
  (f(x), x)
)

// test :: RegExp -> String -> Boolean
const test = curry((regexp, string) =>
  regexp.test(string)
)

// then :: (a -> Promise b) -> a -> Promise b
const then = curry((f, x) =>
  Promise.resolve(x).then(f)
)

// thrush :: a -> (a -> b) -> b
const thrush = curry((x, f) =>
  f(x)
)

// unary :: (a... -> b) -> (a -> b)
const unary = nAry(1)

// unit :: a -> ()
const unit = () => {}

// unless :: (a -> Boolean) -> (a -> a) -> a -> a
const unless = curry((pred, f, x) =>
  pred(x) ? x : f(x)
)

// useWith :: (b... -> c) -> [(a -> b)] -> a... -> c
const useWith = curry((f, xfrms) =>
  unapply(compose(apply(f), map(_xfrm(xfrms))))
)

// when :: (a -> Boolean) -> (a -> a) -> a -> a
const when = curry((pred, f, x) =>
  pred(x) ? f(x) : x
)

// zipObj :: [k] -> [v] -> { k: v }
const zipObj = curry((keys, vals) => {
  const res = {}
  for (let i = length(keys); i--;) res[keys[i]] = vals[i]
  return res
})

// compose :: ((y -> z), ..., (a -> b)) -> a -> z
const compose = unapply(flip(reduceRight(thrush)))

// composeP :: ((y -> Promise z), ..., (a -> Promise b)) -> a -> Promise z
const composeP = unapply(flip(reduceRight(flip(then))))

// pipe :: ((a -> b), ..., (y -> z)) -> a -> z
const pipe = unapply(flip(reduce(thrush)))

// pipeP :: ((a -> Promise b), ..., (y -> Promise z)) -> a -> Promise z
const pipeP = unapply(flip(reduce(flip(then))))

// cond :: [[(a -> Boolean), (a -> b)]] -> a -> b
const cond = compose(reduceRight(thrush, unit), map(apply(ifElse)))

// flatten :: [a] -> [b]
const flatten =
  when(Array.isArray, reduce(_smash, []))

// pluck :: k -> [{ k: v }] -> [v]
const pluck = curry((key, list) =>
  map(prop(key), list)
)

// slice :: Number -> Number -> [a] -> [a]
const slice = curry((from, to, list) =>
  list.slice(from, to)
)

// head :: [a] -> a
const head = prop(0)

// init :: [a] -> [a]
const init = slice(0, -1)

// last :: [a] -> a
const last = compose(head, slice(-1, void 0))

// tail :: [a] -> [a]
const tail = slice(1, Infinity)

// take :: Number -> [a] -> [a]
const take = slice(0)

// keys :: { k: v } -> [k]
const keys = reduceObj(_appendKey, [])

// values :: { k: v } -> [v]
const values = reduceObj(flip(append), [])

// indexBy :: (v -> k) -> [v] -> { k: v }
const indexBy = curry((f, list) =>
  reduce(_putBy(f), {}, list)
)

// uniqBy :: (a -> String) -> [a] -> [a]
const uniqBy = curry((f, list) =>
  compose(values, indexBy(f))(list)
)

_assign(exports, {
  add,
  append,
  apply,
  assoc,
  assocPath,
  call,
  compose,
  composeP,
  concat,
  cond,
  constant,
  converge,
  curry,
  curryN,
  defaultTo,
  dissoc,
  dissocPath,
  either,
  evolve,
  filter,
  find,
  flatten,
  flip,
  head,
  identity,
  ifElse,
  indexBy,
  init,
  is,
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
  nAry,
  not,
  objOf,
  omit,
  partial,
  partialRight,
  path,
  pathEq,
  pick,
  pipe,
  pipeP,
  pluck,
  prepend,
  prop,
  propEq,
  props,
  reduce,
  reduceObj,
  reduceP,
  reduceRight,
  reduceRightP,
  replace,
  slice,
  sort,
  sortBy,
  split,
  tail,
  take,
  tap,
  test,
  then,
  thrush,
  unapply,
  unary,
  uniqBy,
  unit,
  unless,
  useWith,
  values,
  when,
  zipObj
})
