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
    fontFamily: 'Boowie',
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

const Menu = ({ handleAnimation, navRef }) => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <ul className={classes.root}>
      <li>
        <Box mr={3}>
          <Typography onClick={() => handleClick('/about', handleAnimation, router, navRef)} variant="h6" className={`${classes.menuSection} ${isActive(router, '/about') ? classes.menuSectionActive : ''}`}>Quines somos</Typography>
        </Box>
      </li>
      <li>
        <Box mr={3}>
          <Typography onClick={() => handleClick('/beneficios', handleAnimation, router, navRef)} variant="h6" className={`${classes.menuSection} ${isActive(router, '/beneficios') ? classes.menuSectionActive : ''}`}>Beneficios</Typography>
        </Box>
      </li>
      <li>
        <Box mr={3}>
          <Typography onClick={() => handleClick('/profesionales', handleAnimation, router, navRef)} variant="h6" className={`${classes.menuSection} ${isActive(router, '/profesionales') ? classes.menuSectionActive : ''}`}>Profesionales</Typography>
        </Box>
      </li>
      <li>
        <Box mr={3}>
          <Typography onClick={() => handleClick('/asociados', handleAnimation, router, navRef)} variant="h6" className={`${classes.menuSection} ${isActive(router, '/asociados') ? classes.menuSectionActive : ''}`}>Asociados</Typography>
        </Box>
      </li>
      <li>
        <Box mr={3}>
          <Typography onClick={() => handleClick('/noticias', handleAnimation, router, navRef)} variant="h6" className={`${classes.menuSection} ${isActive(router, '/noticias') ? classes.menuSectionActive : ''}`}>Noticias</Typography>
        </Box>
      </li>
      <li>
        <Box>
          <Typography onClick={() => handleClick('/contacto', handleAnimation, router, navRef)} variant="h6" className={`${classes.menuSection} ${isActive(router, '/contacto') ? classes.menuSectionActive : ''}`}>Contacta</Typography>
        </Box>
      </li>
    </ul>
  )
}

Menu.propTypes = {
  handleAnimation: PropTypes.any
}

export default Menu
