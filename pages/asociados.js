import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { useQuery } from 'react-query'

import Asociado from '../components/Asociado/Asociado'
import Quote from '../components/Quote/Quote'

import { query } from '../queries/asociados'

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
    width: '60%',
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

const Asociados = () => {
  const classes = useStyles()

  const { isLoading, error, data } = useQuery('repoData', () =>
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

  console.log(data)

  return (
        <div className={classes.root}>
            <Quote message="“Juntos seremos más fuertes”" />
            <div className={classes.asociados}>
              <Asociado />
              <Asociado />
              <Asociado />
            </div>
        </div>
  )
}

export default Asociados
