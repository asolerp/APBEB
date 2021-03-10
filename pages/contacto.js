import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '../i18n'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Quote from '../components/Quote'
import Form from '../components/Form'
import AsociateBanner from '../components/AsociateBanner/AsociateBanner'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: '8%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '0 2rem',
      marginBottom: '5rem',
      marginTop: '40%'
    }
  },
  contentWrapper: {
    height: '100%',
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary.main,
    margin: '0 auto',
    borderRadius: '10px',
    marginBottom: '1%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
      flexDirection: 'column'
    }
  },
  contactLeft: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',
    paddingLeft: '140px',
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 1rem'
    }
  },
  message: {
    fontWeight: '700',
    width: '60%',
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '1.5rem'
    }
  },
  description: {
    width: '70%',
    marginBottom: '3%',
    fontWeight: 'normal',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '1rem'
    }
  },
  contactRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    padding: '5rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '2rem 1rem'
    }
  }
}))

const Contacto = ({ t }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.contentWrapper}>
        <div className={classes.contactLeft}>
          <Typography variant="h3" className={classes.message}>Ponte en contacto con nosotros</Typography>
          <Typography variant="h5" className={classes.description}>
            Si quieres conocernos más o quieres convertirte en socio de APBEB, ponte en contacto con nosotros.
          </Typography>
        </div>
        <div className={classes.contactRight}>
          <Form />
        </div>
      </div>
      <AsociateBanner />
    </div>
  )
}

Contacto.propTypes = {
  t: PropTypes.any
}

Contacto.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default withTranslation('common')(Contacto)
