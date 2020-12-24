import React from 'react'

import { withTranslation } from '../../i18n'

import { query } from '../../queries/noticias'

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
    marginTop: '8%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0 2rem'
    }
  },
  noticias: {
    display: 'flex',
    flexDirection: 'column',
    flex: 4,
    paddingLeft: '140px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0px',
      flex: 'auto'
    }
  },
  entradas: {
    paddingRight: '140px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingRight: '0px',
      justifyContent: 'flex-end',
      marginBottom: '10%'
    }
  },
  entradasTitle: {
    fontWeight: 'bold',
    marginBottom: '5%'
  },
  entradasMonth: {
    color: 'grey',
    marginBottom: '2%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  },
  hr: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      margin: '10% 0'
    }
  }
}))

export async function getStaticProps () {
  const noticias = await fetch('https://graphql.contentful.com/content/v1/spaces/7d2nsmhsonde/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authenticate the request
      Authorization: 'Bearer x9CPBjC_GvM4zAEhjlKBvYr_zZYZgutVodm0_H5wVcQ'
    },
    // send the GraphQL query
    body: JSON.stringify({ query })
  }).then(res =>
    res.json()
  )
  return { props: { noticias } }
}

const Noticias = (props) => {
  console.log('noticias', props)
  const classes = useStyles()
  const { noticias: { data: { noticiaCollection: { items } } } } = props

  return (
        <div className={classes.root}>
            <Quote message="“Lorem ipsum dolor sit, amet consectetur.”" />
            <div className={classes.noticias}>
              {
                items.map((noticia, i) => (
                  <div key={`noticia-${i}`}>
                    <Noticia noticia={noticia} />
                    <hr className={classes.hr}/>
                  </div>
                ))
              }
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

// Noticias.getInitialProps = async () => ({
//   namespacesRequired: ['common']
// })

export default withTranslation('common')(Noticias)
