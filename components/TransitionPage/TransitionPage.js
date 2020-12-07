import { Transition } from 'react-transition-group'

const duration = 300

const defaultStyle = {
  position: 'absolute',
  zIdenx: 100,
  transition: `opacity ${duration}ms ease-in-out`,
  height: '100vh',
  width: '100vw',
  background: '#925D56',
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
}

const TransitionPage = ({ active }) => (
  <Transition in={active } timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm a fade Transition!
      </div>
    )}
  </Transition>
)

export default TransitionPage
