function timeout(fn, t) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      fn()
      return res()
    }, t);
  })
}

module.exports = timeout
