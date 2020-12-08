export const isActive = (router, path) => {
  return router.pathname === path
}

export const handleClick = (href, handler, router) => {
  handler(true)
  setTimeout(() => {
    handler(false)
    router.push(href)
  }, 1500)
}
