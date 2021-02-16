import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '../i18n'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Quote from '../components/Quote'

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
    padding: '0 20%',
    flexDirection: 'column',
    marginBottom: '5%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0 2rem'
    },
    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
      flexDirection: 'row'
    }
  },
  title: {
    textAlign: 'left',
    marginBottom: '3%',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10%'
    }
  },
  description: {
    width: '70%',
    marginBottom: '3%',
    fontWeight: 'normal',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  listItems: {
    listStyle: 'circle',
    marginBottom: '5%'
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

const Beneficios = ({ t }) => {
  Object.keys(t('about.list')).map(element => console.log(element))
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Quote message="“Lorem ipsum dolor sit, amet consectetur.”" />
      <div className={classes.contentWrapper}>
          <Typography variant="h5" className={classes.title}>{t('beneficios.title')}</Typography>
          <ul style={{ marginTop: -10 }}>
              <li className={classes.listItems}>
                <Typography variant="subtitle1" >
                  {t('beneficios.list.i1')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1">
                  {t('beneficios.list.i2')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1" >
                  {t('beneficios.list.i3')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1" >
                  {t('beneficios.list.i4')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1" >
                  {t('beneficios.list.i5')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1" >
                  {t('beneficios.list.i7')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1">
                  {t('beneficios.list.i8')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1" >
                  {t('beneficios.list.i8')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1">
                  {t('beneficios.list.i9')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1">
                  {t('beneficios.list.i10')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1">
                  {t('beneficios.list.i11')}
                </Typography>
              </li>
              <li className={classes.listItems}>
                <Typography variant="subtitle1">
                  {t('beneficios.list.i12')}
                </Typography>
              </li>
          </ul>
      </div>
    </div>
  )
}

Beneficios.propTypes = {
  t: PropTypes.any
}

Beneficios.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default withTranslation('common')(Beneficios)
