import React from 'react'
import { useQuery } from 'react-query'
import { withTranslation } from '../i18n'
import { makeStyles } from '@material-ui/core/styles'
import { query } from '../queries/privacidad'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '0 auto',
    marginTop: '8%',
    marginBottom: '8%',
    padding: '0 20%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0 2rem',
      marginTop: '40%'

    }
  }
}))

const Privacidad = () => {
  const classes = useStyles()

  const { data: legal } = useQuery('repoData', () =>
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

  console.log(legal)

  return (
        <div className={classes.root}>
          {
            legal && documentToReactComponents(legal?.data?.legalCollection?.items[0].content.json)
          }
        </div>
  )
}

export default withTranslation('common')(Privacidad)
