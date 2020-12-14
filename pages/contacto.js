import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '../i18n'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Quote from '../components/Quote'
import Form from '../components/Form'

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
    height: '75%',
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary.main,
    margin: '0 auto',
    borderRadius: '10px',
    marginBottom: '1%'
  },
  contactLeft: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',
    paddingLeft: '140px'
  },
  message: {
    fontWeight: '700',
    width: '60%',
    marginBottom: '1rem'
  },
  description: {
    width: '60%',
    fontWeight: '200',
  },
  title: {
    textAlign: 'left',
    marginBottom: '3%',
    marginTop: '10%',
    fontWeight: 'bold'
  },
  description: {
    width: '70%',
    marginBottom: '3%',
    fontWeight: 'normal'
  },
  contactRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    padding: '5rem'
  }
}))

const Contacto = ({ t }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Quote message="“Lorem ipsum dolor sit, amet consectetur.”" />
      <div className={classes.contentWrapper}>
        <div className={classes.contactLeft}>
          <Typography variant="h4" className={classes.message}>Ponte en contacto con nosotros</Typography>
          <Typography variant="h5" className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </div>
        <div className={classes.contactRight}>
          <Form />
        </div>
      </div>
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
