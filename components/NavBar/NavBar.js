import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Menu from '../Menu'
import Link from 'next/link'

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

const NavBar = () => {
  const classes = useStyles()
  return (
        <nav className={classes.root}>
          <Link href="/">
            <Typography variant="h2" className={classes.logo}>APBEB</Typography>
          </Link>
          <Menu />
        </nav>
  )
}

export default NavBar
