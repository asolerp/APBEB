import React from 'react'
import { useRouter } from 'next/router'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 10px 20px 10px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'auto',
    background: theme.palette.info.main,
    [theme.breakpoints.down('sm')]: {
      marginTop: '5%',
      width: '100%'
    },
    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
      marginBottom: '10%'
    }
  },
  title: {
    color: 'white'
  },
  info: {
    color: 'white',
    margin: '20px 0 20px 0',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  link: {
    background: theme.palette.primary.main,
    color: theme.palette.info.main,
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
    textDecoration: 'none'
  }
}))

const AsociateBanner = () => {
  const classes = useStyles()
  const mobile = useMediaQuery(theme => theme.breakpoints.down('md'))

  const router = useRouter()

  if (router.pathname === '/' || router.pathname === '/noticias') {
    return null
  }

  return (
          <div className={classes.root}>
              <Typography variant={mobile ? 'h4' : 'h2'} className={classes.title}> Asóciate </Typography>
              <Typography variant={mobile ? 'subtitle' : 'h6'} className={classes.info}> ¡Con una cuota anual de 75€ podrás empezar a disfrutar de nuestras ventajas! </Typography>
              <a href="https://hola036707.typeform.com/to/Dt4dCyjY" className={classes.link}>Ir al formulario!</a>
          </div>
  )
}

export default AsociateBanner
