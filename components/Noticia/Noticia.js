import React from 'react'

import { withTranslation } from '../../i18n'

import { animateScroll as scroll } from 'react-scroll'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '2%',
    marginTop: '2%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }

  },
  subtitle: {
    color: 'grey',
    fontSize: '1rem',
    marginBottom: '2%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '5%'
  },
  text: {
    fontWeight: '400',
    maxWidth: '500px',
    marginBottom: '5%'
  },
  image: {
    width: '600px',
    objectFit: 'contain',
    borderRadius: '5px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}))

const ColorButton = withStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10%'
    },
    color: theme.palette.info.main,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.info.main
    }
  }
}))(Button)

const Noticia = ({ noticia }) => {
  const classes = useStyles()
  const router = useRouter()

  const handleLink = () => {
    document.body.scrollTop = 0
    router.push({
      pathname: '/noticias/[slug]',
      query: { slug: noticia.slug, noticia: JSON.stringify(noticia) }
    })
  }
  return (
        <div className={classes.root}>
            <div>
              <Typography variant="h5" className={classes.subtitle}>{
                new Intl.DateTimeFormat('es-ES', { dateStyle: 'long' }).format(new Date(noticia.subtitle))
              }</Typography>
              <Typography variant="h5" className={classes.title}>{noticia.title}</Typography>
              <Typography variant="body1" className={classes.text}>{noticia.textPreview}</Typography>
              <ColorButton variant="contained" color="primary" onClick={() => handleLink()}>
                Ver más
              </ColorButton>
            </div>
            <div>
                <img src={noticia.image?.url} className={classes.image}></img>
            </div>
        </div>
  )
}

export default withTranslation('common')(Noticia)
