import React from 'react'
import { Transition } from 'react-transition-group'
import { makeStyles } from '@material-ui/core/styles'

import { withTranslation } from '../../i18n'

const duration = 1000

const defaultStyle = {
  position: 'absolute',
  zIndex: 2,
  transition: `top ${duration}ms ease-in-out`,
  top: '-120%',
  width: '100vw',
  height: '100vh',
  background: '#925D56',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const transitionStyles = {
  entering: { top: '0' },
  entered: { top: '0' },
  exiting: { top: '-120%' },
  exited: { top: '-120%' }
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex'
  },
  logo: {
    fontWeight: 'bold',
    cursor: 'pointer',
    color: 'white',
    opacity: 1,
    width: '50px',
    transition: 'opacity 1s'
  },
  logoDisabled: {
    opacity: 0,
    fontWeight: 'bold',
    cursor: 'pointer',
    color: 'white',
    width: '50px',
    transition: 'all .4s'
  }
}))

const TransitionPage = ({ t, active }) => {
  const classes = useStyles()

  return (
    <Transition
      in={active }
      timeout={duration}
      onEnter={() => {
        document.body.style.overflow = 'hidden'
        // window.scrollTo(-100, 0)
      }}
      onExit={() => document.body.style.overflow = 'auto'}
      >
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        <img src="/static/images/white_ring.png" className={classes.logo}></img>
      </div>
    )}
  </Transition>
  )
}

export default withTranslation('common')(TransitionPage)
