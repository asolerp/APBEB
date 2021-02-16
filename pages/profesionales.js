import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { useQuery } from 'react-query'

import Profesional from '../components/Profesional'
import Quote from '../components/Quote/Quote'

import { query } from '../queries/asociados'
import { Typography } from '@material-ui/core'

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
  asociados: {
    display: 'flex',
    width: '50%',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  avatar: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: theme.palette.primary.main
  }
}))

const Profesionales = () => {
  const classes = useStyles()

  const { isLoading, error, data: profesionales } = useQuery('repoData', () =>
    fetch('https://graphql.contentful.com/content/v1/spaces/7d2nsmhsonde/', {
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
  )

  // if (isLoading) {
  //   return (
  //     <Typography variant="h6">Cargando...</Typography>
  //   )
  // }

  // if (error) {
  //   return (
  //     <Typography variant="h6">Ha ocurrido un error</Typography>
  //   )
  // }

  return (
        <div className={classes.root}>
            <Quote message="“Lorem ipsum dolor sit, amet consectetur.”" />
            <div className={classes.asociados}>
              {
                profesionales?.data?.asociadoCollection?.items?.map((profesional, i) => (
                  <Profesional key={i} profesional={profesional} />
                ))
              }
            </div>
        </div>
  )
}

export default Profesionales
