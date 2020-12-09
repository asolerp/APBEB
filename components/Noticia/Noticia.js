import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'

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
    maxWidth: '500px'
  },
  image: {
    width: '600px',
    objectFit: 'contain',
    borderRadius: '5px'
  }
}))

const Noticia = ({ noticia }) => {
  const classes = useStyles()
  return (
        <div className={classes.root}>
            <div>
             <Typography variant="h5" className={classes.subtitle}>{noticia.subtitle}</Typography>
             <Typography variant="h5" className={classes.title}>{noticia.title}</Typography>
             <Typography variant="body1" className={classes.text}>{noticia.text}</Typography>
            </div>
            <div>
                <img src={noticia.image} className={classes.image}></img>
            </div>
        </div>
  )
}

export default Noticia
