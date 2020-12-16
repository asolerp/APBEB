import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginBottom: '5%',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '40%',
      marginBottom: '20%'
    }
  },
  quote: {
    textAlign: 'center',
    maxWidth: '20%',
    fontWeight: '700',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      fontSize: '1.5rem',
      padding: '0 2rem'
    }
  }
}))

const Quote = ({ message }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
        <Typography variant="h4" className={classes.quote}>{message}</Typography>
    </div>
  )
}

export default Quote
