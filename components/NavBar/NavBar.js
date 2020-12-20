import React, { useContext, useCallback } from 'react'
import PropTypes from 'prop-types'

import MenuContext from '../../context/MenuContext'

import { useRouter } from 'next/router'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Menu from '../Menu'
import { HamburgerSpring } from 'react-animated-burgers'

// Utils
import { handleClick } from '../../utils/general'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    paddingLeft: '140px',
    paddingRight: '115px',
    marginTop: '1%',
    [theme.breakpoints.down('sm')]: {
      padding: '3%',
      justifyContent: 'space-between',
      zIndex: 3
    }
  },
  logo: {
    fontWeight: 'bold',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem'
    }
  },
  white: {
    color: 'white',
    transition: 'all .5s'
  }
}))

const NavBar = ({ handleAnimation, handleMenu, menu }) => {
  const classes = useStyles()
  const router = useRouter()
  const mobile = useMediaQuery(theme => theme.breakpoints.down('md'))

  const [menuState, setMenuState] = useContext(MenuContext)

  const toggleButton = useCallback(
    () => setMenuState(prevState => !prevState),
    []
  )

  return (
        <nav className={classes.root}>
          <Typography onClick={() => handleClick('/', handleAnimation, router)} variant="h2" className={`${classes.logo} ${menuState ? classes.white : ''}`}>APBEB</Typography>
          {
            !mobile
              ? <Menu handleAnimation={handleAnimation} />
              : <React.Fragment>
                  <HamburgerSpring isActive={menuState} toggleButton={toggleButton} barColor={menuState ? 'white' : 'black'}/>
                </React.Fragment>
          }
        </nav>
  )
}

NavBar.propTypes = {
  handleAnimation: PropTypes.any
}

export default NavBar
