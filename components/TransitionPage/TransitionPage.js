import React from 'react'
import { Transition } from 'react-transition-group'
import { makeStyles } from '@material-ui/core/styles'

import { withTranslation } from '../../i18n'

const duration = 1000

const defaultStyle = {
  position: 'absolute',
  zIndex: 2,
  transition: `all ${duration}ms ease-in-out`,
  top: '-100%',
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
  exiting: { top: '-100%' },
  exited: { top: '-100%' }
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
