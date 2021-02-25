import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginBottom: '1rem'
  },
  label: {
    marginBottom: '.5rem'
  },
  input: {
    border: '0',
    padding: '1.5rem',
    fontSize: '1.5rem',
    fontFamily: 'Arial',
    borderRadius: '5px',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
      fontSize: '1rem'
    }
  }
}))

const Input = ({ type = 'input', label, name, ref }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.label}>{label}</Typography>
      {
        type === 'input' ? (
          <input className={classes.input} type='text' ref={ref} name={name} />
        )
          : (
          <textarea className={classes.input} name={name} ref={ref} rows={5} />
            )
      }

    </div>
  )
}

export default Input
