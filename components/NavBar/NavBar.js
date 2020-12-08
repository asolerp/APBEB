import React from 'react'
import PropTypes from 'prop-types'

import { useRouter } from 'next/router'

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
    marginTop: '1%'
  },
  logo: {
    fontWeight: 'bold',
    cursor: 'pointer'
  }
}))

const NavBar = ({ handleAnimation }) => {
  const classes = useStyles()
  const router = useRouter()

  return (
        <nav className={classes.root}>
          <Typography onClick={() => handleClick('/', handleAnimation, router)} variant="h2" className={classes.logo}>APBEB</Typography>
          <Menu handleAnimation={handleAnimation} />
        </nav>
  )
}

NavBar.propTypes = {
  handleAnimation: PropTypes.any
}

export default NavBar
