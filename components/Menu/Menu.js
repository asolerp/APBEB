import React from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

import { isActive } from '../../utils/general'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  menuSection: {
    position: 'relative',
    fontWeight: '600',
    cursor: 'pointer',
    transition: '0.5s',
    '&:hover': {
      color: theme.palette.info.main,
      transition: 'color .5s',
      borderBottom: `3px solid ${theme.palette.info.main}`
    }
  },
  menuSectionActive: {
    color: theme.palette.info.main,
    borderBottom: `3px solid ${theme.palette.info.main}`,
    cursor: 'pointer'
  }
}))

const Menu = () => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <ul className={classes.root}>
      <li>
        <Box mr={3}>
          <Link href="/about">
            <Typography variant="h6" className={`${classes.menuSection} ${isActive(router, '/about') ? classes.menuSectionActive : ''}`}>QUIENES SOMOS</Typography>
          </Link>
        </Box>
      </li>
      <li>
        <Box mr={3}>
          <Typography variant="h6" className={classes.menuSection}>ASOCIADOS</Typography>
        </Box>
      </li>
      <li>
        <Box mr={3}>
          <Typography variant="h6" className={classes.menuSection}>NOTICIAS</Typography>
        </Box>
      </li>
      <li>
        <Box>
          <Typography variant="h6" className={classes.menuSection}>CONTACTA</Typography>
        </Box>
      </li>
    </ul>
  )
}

export default Menu
