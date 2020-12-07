import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '../i18n'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex'
  },
  homeLeft: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    width: '60%',
    fontSize: '5.5rem',
    fontWeight: '400'
  },
  homeRight: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.secondary.main
  },
  homeImage: {
    width: '700px',
    objectFit: 'contain'
  }
}))

const About = ({ t }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.homeLeft}>
        <Typography variant="h1" className={classes.title}>{t('home.title')}</Typography>
      </div>
      <div className={classes.homeRight}>
        <img src="static/images/zapato.png" className={classes.homeImage}/>
      </div>
    </div>
  )
}

About.propTypes = {
  t: PropTypes.any
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default withTranslation('common')(About)
