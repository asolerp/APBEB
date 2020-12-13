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
  noticia: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingLeft: '140px'
  },
  subtitle: {
    color: 'grey',
    marginBottom: '2%'
  },
  title: {
    textAlign: 'left',
    marginBottom: '10%',
    fontWeight: 'bold'
  },
  description: {
    width: '70%',
    marginBottom: '3%',
    fontWeight: 'normal'
  },
  entradas: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flex: 1.5
  },
  image: {
    width: '100%',
    objectFit: 'contain'
  }
}))


const NoticiaPage = () => {
  const classes = useStyles()
  return (
        <div className={classes.root}>
            <Quote message="“Lorem ipsum dolor sit, amet consectetur.”" />
            <div className={classes.noticia}>
              <Typography variant="h5" className={classes.subtitle}>Domingo 29 de Noviembre de 2020</Typography>
              <Typography variant="h5" className={classes.title}>Sobre nosotros</Typography>
              <Typography variant="h6" className={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
              </Typography>
            </div>
            <div className={classes.entradas}>
              <img src="/static/images/wedding.png" alt="wedding" className={classes.image}/>
            </div>
        </div>
  )
}

export default NoticiaPage