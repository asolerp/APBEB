import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    marginBottom: '10%',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20%',
      maxWidth: '300px'

    },
    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
      marginBottom: '10%'
    }
  },
  avatarWrapper: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
    [theme.breakpoints.down('sm')]: {
      width: '200px',
      height: '200px'
    }
  },
  avatar: {
    width: '285px',
    height: '285px',
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundImage: 'url(\'/static/images/avatar.jpg\')',
    [theme.breakpoints.down('sm')]: {
      width: '185px',
      height: '185px'
    }
  },
  name: {
    textAlign: 'center',
    marginBottom: '0%'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: '5%'
  },
  description: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  }
}))

const Profesional = ({ profesional }) => {
  const classes = useStyles()
  return (
        <div className={classes.root}>
            <div className={classes.avatarWrapper}>
                <div className={classes.avatar} style={{ backgroundImage: `url(${profesional?.image?.url})` }}></div>
            </div>
            <Typography variant="h6" className={classes.name}>{profesional?.name}</Typography>
            <Typography variant="h6" className={classes.subtitle}>{profesional?.subtitle}</Typography>
            <Typography variant="body2" className={classes.description}>
                 {profesional?.description}
            </Typography>
        </div>
  )
}

export default Profesional
