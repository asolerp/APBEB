import disableScroll from 'disable-scroll'

export const isActive = (router, path) => {
  return router.pathname === path
}

export const handleClick = (href, handler, router, ref) => {
  ref.current.scrollIntoView()
  handler(true)
  disableScroll.on()
  setTimeout(() => {
    router.push(href)
  }, 1500)
  setTimeout(() => {
    handler(false)
    handlerOverflowDependingPath(router)
  }, 2000)
}

export const handleClickMenuMobile = (href, handler, router) => {
  handler(false)
  setTimeout(() => {
    router.push(href)
  }, 500)
}

export const handlerOverflowDependingPath = (router) => {
  if (router.pathname === '/') {
    disableScroll.on()
  } else {
    disableScroll.off()
  }
}
