import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { useQuery } from 'react-query'

import Profesional from '../components/Profesional'
import Quote from '../components/Quote/Quote'

import { query } from '../queries/profesionales'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: '0 auto',
    marginTop: '8%'
  },
  asociados: {
    display: 'flex',
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'space-around'
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
        Authorization: `Bearer ${process.env.CONTENFUL_API}`
      },
      // send the GraphQL query
      body: JSON.stringify({ query })
    }).then(res =>
      res.json()
    )
  )

  return (
        <div className={classes.root}>
            <Quote message="“Ninguno de nosotros es tan bueno como todos nosotros juntos” Ray Kroc" />
            <div className={classes.asociados}>
            {
                profesionales?.data?.profesionalCollection?.items?.filter(p => p.level === '1').map((profesional, i) => (
                  <Profesional key={i} profesional={profesional} />
                ))
              }
            </div>
            <div className={classes.asociados}>
              {
                profesionales?.data?.profesionalCollection?.items?.filter(p => p.level === '2').map((profesional, i) => (
                  <Profesional key={i} profesional={profesional} />
                ))
              }
            </div>
            <div className={classes.asociados}>
              {
                profesionales?.data?.profesionalCollection?.items?.filter(p => p.level === '3').map((profesional, i) => (
                  <Profesional key={i} profesional={profesional} />
                ))
              }
            </div>
            <div className={classes.asociados}>
              {
                profesionales?.data?.profesionalCollection?.items?.filter(p => p.level === '4').map((profesional, i) => (
                  <Profesional key={i} profesional={profesional} />
                ))
              }
            </div>
        </div>
  )
}

export default Profesionales
