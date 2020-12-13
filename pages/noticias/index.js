import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Noticia from '../../components/Noticia/Noticia'
import Quote from '../../components/Quote/Quote'

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
    flexDirection: 'column',
    flex: 4,
    paddingLeft: '140px'
  },
  entradas: {
    paddingRight: '140px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flex: 1
  },
  entradasTitle: {
    fontWeight: 'bold',
    marginBottom: '5%'
  },
  entradasMonth: {
    color: 'grey',
    marginBottom: '2%'
  },
}))

const noticia1 = {
  slug: 'lorem-ipsum',
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
                <hr style={{ width: '100%' }}/>
                <Noticia noticia={noticia1} />
                <hr style={{ width: '100%' }}/>
                <Noticia noticia={noticia1} />
                <hr style={{ width: '100%' }}/>
                <Noticia noticia={noticia1} />
            </div>
            <div className={classes.entradas}>
              <Typography variant="h5" className={classes.entradasTitle}>Entradas</Typography>
              <Typography variant="h5" className={classes.entradasMonth}>Diciembre 2020</Typography>
              <Typography variant="h5" className={classes.entradasMonth}>Noviembre 2020</Typography>
              <Typography variant="h5" className={classes.entradasMonth}>Octubre 2020</Typography>
              <Typography variant="h5" className={classes.entradasMonth}>Septiembre 2020</Typography>
            </div>
        </div>
  )
}

export default Noticias
