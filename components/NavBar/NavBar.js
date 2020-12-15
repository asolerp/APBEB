import React from 'react'
import PropTypes from 'prop-types'

import { useRouter } from 'next/router'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Menu from '../Menu'

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
      padding: '3%'
    }
  },
  logo: {
    fontWeight: 'bold',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem'
    }
  }
}))

const NavBar = ({ handleAnimation }) => {
  const classes = useStyles()
  const router = useRouter()
  const mobile = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
        <nav className={classes.root}>
          <Typography onClick={() => handleClick('/', handleAnimation, router)} variant="h2" className={classes.logo}>APBEB</Typography>
          {
            !mobile && <Menu handleAnimation={handleAnimation} />
          }
        </nav>
  )
}

NavBar.propTypes = {
  handleAnimation: PropTypes.any
}

export default NavBar
