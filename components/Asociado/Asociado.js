import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '300px',
    marginBottom: '10%'
  },
  avatarWrapper: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%'
  },
  avatar: {
    width: '170px',
    height: '170px',
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundImage: 'url(\'/static/images/avatar.jpg\')'
  },
  name: {
    textAlign: 'center',
    marginBottom: '5%'
  },
  description: {

  }
}))

const Asociado = () => {
  const classes = useStyles()
  return (
        <div className={classes.root}>
            <div className={classes.avatarWrapper}>
                <div className={classes.avatar}></div>
            </div>
            <Typography variant="h6" className={classes.name}>Lorem Ipsum</Typography>
            <Typography variant="body2" className={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
        </div>
  )
}

export default Asociado
