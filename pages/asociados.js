import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Asociado from '../components/Asociado'
import Quote from '../components/Quote'

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

export async function getStaticProps () {
  const asociados = await fetch('https://graphql.contentful.com/content/v1/spaces/7d2nsmhsonde/', {
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
  return { props: { asociados } }
}

const Asociados = (props) => {
  console.log(props)
  const { asociados: { data: { asociadoCollection: { items } } } } = props
  const classes = useStyles()

  return (
        <div className={classes.root}>
            <Quote message="“Lorem ipsum dolor sit, amet consectetur.”" />
            <div className={classes.asociados}>
              {
                items?.map((asociado, i) => (
                  <Asociado key={`asociado-${i}`} asociado={asociado} />
                ))
              }
            </div>
        </div>
  )
}

export default Asociados
