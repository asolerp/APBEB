import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Noticia from '../components/Noticia'
import Quote from '../components/Quote'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: '0 auto',
    marginTop: '8%'
  },
  noticias: {
    display: 'flex',
    flex: 2,
    paddingLeft: '140px'
  },
  entradas: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
}))

const noticia1 = {
  subtitle: 'Domingo 29 de Noviembre de 2020',
  title: 'Lorem Ipsum',
  image: '/static/images/wedding.png',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

const Noticias = () => {
  const classes = useStyles()
  return (
        <div className={classes.root}>
            <Quote message="“Lorem ipsum dolor sit, amet consectetur.”" />
            <div className={classes.noticias}>
                <Noticia noticia={noticia1} />
            </div>
            <div className={classes.entradas}>
                <p>hola</p>
            </div>
        </div>
  )
}

export default Noticias
