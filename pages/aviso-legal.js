import React from 'react'
import { useQuery } from 'react-query'
import { withTranslation } from '../i18n'
import { makeStyles } from '@material-ui/core/styles'
import { query } from '../queries/legal'
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

const AvisoLegal = () => {
  const classes = useStyles()

  const { data: legal } = useQuery('repoData', () =>
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
          {
            <Typography variant="h6" className={classes.description}>
              { legal && documentToReactComponents(legal?.data?.legalCollection?.items[0].content.json)}
            </Typography>
          }
        </div>
  )
}

// Noticias.getInitialProps = async () => ({
//   namespacesRequired: ['common']
// })

export default withTranslation('common')(AvisoLegal)
