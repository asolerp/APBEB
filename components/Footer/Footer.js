import React from 'react'

import { useRouter } from 'next/router'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Social from '../Social/Social'

// Utils
import { handleClick } from '../../utils/general'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.primary.main,
    padding: '5% 5%'
  },
  icon: {
    width: '180px',
    objectFit: 'cover',
    marginTop: '10px',
    marginBottom: '100px'
  },
  mb: {
    marginBottom: '1%',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '5%'
    }
  },
  footerItem: {
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    }
  }
}))

const Footer = ({ navRef, handleAnimation }) => {
  const classes = useStyles()
  const router = useRouter()

  return (
        <div className={classes.root}>
          <Typography onClick={() => handleClick('/about', handleAnimation, router, navRef)} variant="subtitle1" className={`${classes.footerItem} ${classes.mb}`}>Quienes somos</Typography>
          <Typography onClick={() => handleClick('/beneficios', handleAnimation, router, navRef)} variant="subtitle1" className={`${classes.footerItem} ${classes.mb}`}>Beneficios</Typography>
          <Typography onClick={() => handleClick('/profesionales', handleAnimation, router, navRef)} variant="subtitle1" className={`${classes.footerItem} ${classes.mb}`}>Junta Directiva</Typography>
          <Typography onClick={() => handleClick('/asociados', handleAnimation, router, navRef)} variant="subtitle1" className={`${classes.footerItem} ${classes.mb}`}>Asociados</Typography>
          <Typography onClick={() => handleClick('/noticias', handleAnimation, router, navRef)} variant="subtitle1" className={`${classes.footerItem} ${classes.mb}`}>Noticias</Typography>
          <Typography onClick={() => handleClick('/contacto', handleAnimation, router, navRef)} variant="subtitle1" className={`${classes.footerItem} ${classes.mb}`}>Contacto</Typography>
          <Social footer={true}/>
          <Typography variant="subtitle1" className={classes.mb}>Nuestros colaboradores</Typography>
          <a href="http://www.mallorcaprotecciondedatos.eu">
            <img className={classes.icon} src={'/static/images/datos.png'}/>
          </a>
          <Typography variant="subtitle1" className={classes.mb}>Copyright APBEB</Typography>
          <Typography variant="subtitle1" className={classes.mb}>Diseñado y programado por Enalbis</Typography>
        </div>
  )
}

export default Footer
