import { Transition } from 'react-transition-group'
import { makeStyles } from '@material-ui/core/styles'

import { Typography } from '@material-ui/core'

import { withTranslation } from '../../i18n'

const duration = 1000

const defaultStyle = {
  position: 'absolute',
  zIndex: 2,
  transition: `height ${duration}ms ease-in-out`,
  width: '100vw',
  height: '100vh',
  background: '#925D56',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const transitionStyles = {
  entering: { height: '100vh', opacity: 1 },
  entered: { height: '0', opacity: 1 },
  exiting: { height: '0', opacity: 0 },
  exited: { height: '0', opacity: 0 }
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
    color: 'white'
  }
}))

const TransitionPage = ({ t, active }) => {
  const classes = useStyles()
  return (
    <Transition in={active } timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        <Typography variant="h2" className={classes.logo}>APBEB</Typography>
      </div>
    )}
  </Transition>
  )
}

export default withTranslation('common')(TransitionPage)
