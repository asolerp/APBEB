import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '../i18n'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Social from '../components/Social/Social'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex'
  },
  homeLeft: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: theme.palette.primary.main
  },
  title: {
    display: 'flex',
    flex: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '60%',
    fontSize: '4.5rem',
    fontWeight: '400',
    paddingLeft: '140px',
    marginTop: '5rem'
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

const Home = ({ t }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.homeLeft}>
        <Typography variant="h1" className={classes.title}>{t('home.title')}</Typography>
        <Social />
      </div>
      <div className={classes.homeRight}>
        <img src="static/images/zapato.png" alt="wedding" className={classes.homeImage}/>
      </div>
    </div>
  )
}

Home.propTypes = {
  t: PropTypes.any
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default withTranslation('common')(Home)
