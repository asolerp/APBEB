import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'

import disableScroll from 'disable-scroll'

import MenuContext from '../../context/MenuContext'

import { Transition } from 'react-transition-group'
import { makeStyles } from '@material-ui/core/styles'

import { Typography } from '@material-ui/core'
import { withTranslation } from '../../i18n'

// Utils
import { handleClick } from '../../utils/general'

const duration = 1000

const defaultStyle = {
  position: 'absolute',
  zIndex: 1,
  transition: `all ${duration}ms ease-in-out`,
  right: '-110%',
  width: '100vw',
  height: '100vh',
  background: '#925D56',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const transitionStyles = {
  entering: { right: '-110%' },
  entered: { right: '-110%' },
  exiting: { right: '0%' },
  exited: { right: '0%' }
}

const useStyles = makeStyles(theme => ({
  logo: {
    fontWeight: 'bold',
    cursor: 'pointer',
    color: 'white',
    opacity: 1,
    width: '50px',
    transition: 'opacity 1s',
    marginBottom: '15%'
  },
  menuItem: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '2rem'
  }
}))

const MobileMenu = ({ t, handleMenu }) => {
  const classes = useStyles()
  const router = useRouter()

  const [menuState, setMenuState] = useContext(MenuContext)

  useEffect(() => {
    if (menuState) {
      disableScroll.on()
    } else {
      disableScroll.off()
    }
  }, [menuState])

  const goTo = (url) => {
    setMenuState(false)
    // handleClick(url, handleMenu, router)
  }

  return (
    <Transition
      in={!menuState}
      timeout={duration}
      >
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        <img src="/static/images/white_ring.png" className={classes.logo}></img>
        <Typography onClick={() => goTo('/about')} variant="subtitle1" className={`${classes.menuItem} ${classes.mb}`}>Sobre Nosotros</Typography>
        <Typography onClick={() => handleClick('/asociados', handleMenu, router)} variant="subtitle1" className={`${classes.menuItem} ${classes.mb}`}>Asociados</Typography>
        <Typography onClick={() => handleClick('/noticias', handleMenu, router)} variant="subtitle1" className={`${classes.menuItem} ${classes.mb}`}>Noticias</Typography>
        <Typography onClick={() => handleClick('/contacto', handleMenu, router)} variant="subtitle1" className={`${classes.menuItem} ${classes.mb}`}>Contacto</Typography>
      </div>
    )}
  </Transition>
  )
}

export default withTranslation('common')(MobileMenu)
