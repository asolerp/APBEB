import React from 'react'
import PropTypes from 'prop-types'

import { useRouter } from 'next/router'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

// Utils
import { isActive, handleClick } from '../../utils/general'

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

const Menu = ({ handleAnimation }) => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <ul className={classes.root}>
      <li>
        <Box mr={3}>
          <Typography onClick={() => handleClick('/about', handleAnimation, router)} variant="h6" className={`${classes.menuSection} ${isActive(router, '/about') ? classes.menuSectionActive : ''}`}>QUIENES SOMOS</Typography>
        </Box>
      </li>
      <li>
        <Box mr={3}>
          <Typography onClick={() => handleClick('/asociados', handleAnimation, router)} variant="h6" className={`${classes.menuSection} ${isActive(router, '/asociados') ? classes.menuSectionActive : ''}`}>ASOCIADOS</Typography>
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

Menu.propTypes = {
  handleAnimation: PropTypes.any
}

export default Menu
