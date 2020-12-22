import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '../i18n'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Social from '../components/Social/Social'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      overflow: 'hidden'
    }
  },
  homeLeft: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      order: 1
    }
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
    marginTop: '5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
      fontWeight: 'bold',
      paddingLeft: '2rem',
      width: '50%'
    }
  },
  homeRight: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-end',
      order: 0
    }
  },
  homeImage: {
    width: '700px',
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    }
  }
}))

const Home = ({ t }) => {
  const classes = useStyles()
  const mobile = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <div className={classes.root}>
      <div className={classes.homeLeft}>
        <Typography variant="h1" className={classes.title}>{t('home.title')}</Typography>
        {
          !mobile && <Social footer={true}/>
        }
      </div>
      <div className={classes.homeRight}>
        <img src="static/images/shoe.png" alt="wedding" className={classes.homeImage}/>
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
