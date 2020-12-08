import { Transition } from 'react-transition-group'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const duration = 100

const defaultStyle = {
  position: 'absolute',
  zIndex: 2,
  transition: `all ${duration}ms ease-in-out`,
  width: '100vw',
  background: '#925D56'
}

const transitionStyles = {
  entering: { height: '100vh' },
  entered: { height: '0vh' },
  exiting: { height: '0vh' },
  exited: { height: '0vh' }
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex'
  },
  title: {
    display: 'flex',
    flex: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '60%',
    fontSize: '4.5rem',
    fontWeight: '400',
    paddingLeft: '140px',
    marginTop: '5rem'
  }
}))

const TransitionPage = ({ active }) => {
  const classes = useStyles()

  return (
  <Transition in={active } timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        <Typography variant="h1" className={classes.title}>{t('home.title')}</Typography>

      </div>
    )}
  </Transition>
  )
}

export default TransitionPage
