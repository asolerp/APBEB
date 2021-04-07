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
  legalLink: {
    width: '200px',
    textAlign: 'center',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      fontWeight: '400',
      width: 'auto',
      marginRight: '10px'
    }
  },
  legal: {
    width: '35%',
    display: 'flex',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '100%'
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

  const handleLink = (path) => {
    document.body.scrollTop = 0
    router.push({
      pathname: path
    })
  }

  return (
        <div className={classes.root}>
          <Typography onClick={() => handleClick('/about', handleAnimation, router, navRef)} variant="subtitle1" className={`${classes.footerItem} ${classes.mb}`}>Quienes somos</Typography>
          <Typography onClick={() => handleClick('/beneficios', handleAnimation, router, navRef)} variant="subtitle1" className={`${classes.footerItem} ${classes.mb}`}>Beneficios</Typography>
          <Typography onClick={() => handleClick('/profesionales', handleAnimation, router, navRef)} variant="subtitle1" className={`${classes.footerItem} ${classes.mb}`}>Junta Directiva</Typography>
          <Typography onClick={() => handleClick('/asociados', handleAnimation, router, navRef)} variant="subtitle1" className={`${classes.footerItem} ${classes.mb}`}>Asociados</Typography>
          <Typography onClick={() => handleClick('/noticias', handleAnimation, router, navRef)} variant="subtitle1" className={`${classes.footerItem} ${classes.mb}`}>Noticias</Typography>
          <Typography onClick={() => handleClick('/contacto', handleAnimation, router, navRef)} variant="subtitle1" className={`${classes.footerItem} ${classes.mb}`}>Contacto</Typography>
          <Social footer={true}/>
          <a href="http://www.mallorcaprotecciondedatos.eu">
            <img className={classes.icon} src={'/static/images/datos.png'}/>
          </a>
          <Typography variant="subtitle1" >Copyright <b>APBEB</b></Typography>
          <Typography variant="subtitle1" className={classes.mb}>Diseñado y programado por <b>Enalbis</b></Typography>
          <div className={classes.legal}>
            <Typography onClick={() => handleLink('/aviso-legal')} variant="subtitle1" className={classes.legalLink}>Aviso legal</Typography>
            <Typography onClick={() => handleLink('/politica-cookies')} variant="subtitle1" className={classes.legalLink}>Política de cookies</Typography>
            <Typography onClick={() => handleLink('/politica-privacidad')} variant="subtitle1" className={classes.legalLink}>Política de privacidad</Typography>
          </div>
        </div>
  )
}

export default Footer
