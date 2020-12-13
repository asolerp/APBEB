import React from 'react'

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
    marginTop: '2%'

  },
  subtitle: {
    color: 'grey',
    marginBottom: '2%'
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
    borderRadius: '5px'
  }
}))

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.info.main,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.info.main,
    },
  },
}))(Button);

const Noticia = ({ noticia }) => {
  const classes = useStyles()
  const router = useRouter()
  return (
        <div className={classes.root}>
            <div>
             <Typography variant="h5" className={classes.subtitle}>{noticia.subtitle}</Typography>
             <Typography variant="h5" className={classes.title}>{noticia.title}</Typography>
             <Typography variant="body1" className={classes.text}>{noticia.text}</Typography>
             <Link   
              href={{
                pathname: '/noticias/[slug]',
                query: { slug: noticia.slug },
              }}
              // as={`/noticias/${noticia.slug}`}
              >
                <ColorButton variant="contained" color="primary">
                  Ver más
                </ColorButton>
              </Link>
            </div>
            <div>
                <img src={noticia.image} className={classes.image}></img>
            </div>
        </div>
  )
}

export default Noticia
