import disableScroll from 'disable-scroll'

export const isActive = (router, path) => {
  return router.pathname === path
}

export const handleClick = (href, handler, router) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  handler(true)
  setTimeout(() => {
    router.push(href)
  }, 1500)
  setTimeout(() => {
    handler(false)
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
