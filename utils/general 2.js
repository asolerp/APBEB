export const isActive = (router, path) => {
  return router.pathname === path
}

export const handleClick = (href, handler, router) => {
  window.scrollTo(0, 0)
  handler(true)
  setTimeout(() => {
    handler(false)
    router.push(href)
  }, 1500)
}
