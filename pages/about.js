import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '../i18n'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Quote from '../components/Quote'
import AsociateBanner from '../components/AsociateBanner/AsociateBanner'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: '8%'
  },
  contentWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0 2rem'
    },
    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
      flexDirection: 'row'
    }
  },
  homeLeft: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    '-webkit-flex': 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left',
    paddingLeft: '140px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0',
      marginBottom: '20%',
      flex: 'auto'
    },
    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
      flex: 1,
      paddingRight: '5%'
    }
  },
  title: {
    textAlign: 'left',
    marginBottom: '3%',
    marginTop: '10%',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10%'
    }
  },
  title2: {
    textAlign: 'left',
    marginBottom: '3%',
    marginTop: '2%',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10%'
    }
  },
  description: {
    width: '70%',
    marginBottom: '0%',
    fontWeight: 'normal',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '0%'
    }
  },
  description2: {
    width: '70%',
    marginBottom: '1%',
    fontWeight: 'normal',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '3%'
    }
  },
  listItems: {
    listStyle: 'circle'
  },
  homeRight: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundImage: 'url(\'/static/images/flores.png\')',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '50vh',
      flex: 'auto',
      marginBottom: '20%'
    },
    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
      flex: 1,
      height: 'auto',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  }
}))

const About = ({ t }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Quote message="“Las bodas nos unen”" />
      <div className={classes.contentWrapper}>
        <div className={classes.homeLeft}>
          <Typography variant="h5" className={classes.title}>{t('about.title')}</Typography>
          <Typography variant="h6" className={classes.description}>
            {t('about.p1')}
          </Typography>
          <ul>
              <li className={classes.listItems}>
                <Typography variant="subtitle1" >
                  {t('about.list.i1')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1">
                  {t('about.list.i2')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1" >
                  {t('about.list.i3')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1" >
                  {t('about.list.i4')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1" >
                  {t('about.list.i5')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1" >
                  {t('about.list.i6')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1" >
                  {t('about.list.i7')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1">
                  {t('about.list.i8')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1">
                  {t('about.list.i9')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1">
                  {t('about.list.i10')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1">
                  {t('about.list.i11')}
                </Typography>
              </li>
          </ul>
          <Typography variant="h6" className={classes.description2}>
            {t('about.p2')}
          </Typography>
          <Typography variant="h6" className={classes.description2}>
            {t('about.p3')}
          </Typography>
          <Typography variant="h6" className={classes.description2} style={{ marginBottom: '5%' }}>
            {t('about.p4')}
          </Typography>
          <Typography variant="h5" className={classes.title2}>{t('about.title2')}</Typography>
          <Typography variant="h6" className={classes.description2}>
            {t('about.p5')}
          </Typography>
          <Typography variant="h6" className={classes.description2}>
            {t('about.p6')}
          </Typography>
          <Typography variant="h6" className={classes.description2} style={{ marginBottom: '10%' }}>
            {t('about.p7')}
          </Typography>
        </div>
        <div className={classes.homeRight}>
        </div>
      </div>
      {/* <AsociateBanner /> */}
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
