import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '../i18n'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Form from '../components/Form'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '76vh',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0 2rem',
      marginBottom: '5rem',
      marginTop: '40%'
    }
  },
  title: {
    fontSize: '8rem'
  },
  description: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  }
}))

const Page404 = ({ t }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
        <Typography variant="h3" className={classes.title}>404</Typography>
        <Typography variant="h5" className={classes.description}>No hemos encontrado la página que busca...</Typography>
    </div>
  )
}

Page404.propTypes = {
  t: PropTypes.any
}

export default Page404
