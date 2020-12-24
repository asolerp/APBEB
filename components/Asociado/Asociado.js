import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '300px',
    marginBottom: '10%',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20%'
    },
    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
      marginBottom: '10%'
    }
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
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  }
}))

const Asociado = ({ asociado }) => {
  const classes = useStyles()
  return (
        <div className={classes.root}>
            <div className={classes.avatarWrapper}>
                <div className={classes.avatar} style={{ backgroundImage: `url(${asociado.image.url})` }}></div>
            </div>
            <Typography variant="h6" className={classes.name}>{asociado.name}</Typography>
            <Typography variant="body2" className={classes.description}>
              { asociado.description }
            </Typography>
        </div>
  )
}

export default Asociado
