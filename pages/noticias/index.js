import React, { useState, useEffect } from 'react'

import { useQuery } from 'react-query'

import { withTranslation } from '../../i18n'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Noticia from '../../components/Noticia/Noticia'

import { query } from '../../queries/noticias'

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
      padding: '0 2rem',
      marginTop: '40%'

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
    fontSize: '1rem',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.info.main,
      fontWeight: 'bold'
    },
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

const Noticias = () => {
  const classes = useStyles()
  const [filterDates, setFilterDates] = useState()

  const { data: noticias } = useQuery('repoData', () =>
    fetch('https://graphql.contentful.com/content/v1/spaces/7d2nsmhsonde/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authenticate the request
        Authorization: `Bearer ${process.env.CONTENFUL_API}`
      },
      // send the GraphQL query
      body: JSON.stringify({ query })
    }).then(res =>
      res.json()
    )
  )

  const srollToNews = (slug) => {
    const element = document.getElementById(slug)
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  useEffect(() => {
    const fechas = noticias?.data?.noticiaCollection?.items?.map(noticia => ({ date: noticia.subtitle, slug: noticia.slug }))
    setFilterDates(fechas)
  }, [noticias])

  return (
        <div className={classes.root}>
            <div className={classes.noticias}>
              {
                noticias?.data?.noticiaCollection?.items?.map((noticia, i) => (
                  <React.Fragment key={i}>
                      <div id={noticia?.slug}>
                        <Noticia noticia={noticia} />
                        <hr className={classes.hr}/>
                    </div>
                  </React.Fragment>
                ))
              }
            </div>
            <div className={classes.entradas}>
              <Typography variant="h5" className={classes.entradasTitle}>Entradas</Typography>
              {
                filterDates?.map((fdate, i) => (
                    <Typography onClick={() => srollToNews(fdate.slug)} key={`date-${i}`} variant="h5" className={classes.entradasMonth}>{new Intl.DateTimeFormat('es-ES', { dateStyle: 'long' }).format(new Date(fdate.date))}</Typography>
                ))
              }
            </div>
        </div>
  )
}

// Noticias.getInitialProps = async () => ({
//   namespacesRequired: ['common']
// })

export default withTranslation('common')(Noticias)
