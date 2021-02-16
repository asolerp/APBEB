import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '320px',
    height: '320px',
    background: theme.palette.primary.main,
    borderRadius: '50%',
    marginBottom: '10%',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20%',
      width: '220px',
      height: '220px'
    },
    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
      marginBottom: '10%'
    }
  },
  infoAsociadoWrapper: {
    position: 'absolute',
    display: 'flex',
    width: '320px',
    height: '320px',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all .5s',
    [theme.breakpoints.down('sm')]: {
      width: '220px',
      height: '220px'
    }
  },
  infoAsociado: {
    position: 'absolute',
    display: 'flex',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: '#707070',
    opacity: '0.7',
    [theme.breakpoints.down('sm')]: {
      width: '200px',
      height: '200px'
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
    [theme.breakpoints.down('sm')]: {
      width: '200px',
      height: '200px'
    }
  },
  infoAsociadoText: {
    zIndex: 5,
    fontSize: '1rem',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: '.7rem',
      width: '70%'
    }
  },
  avatar: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundImage: 'url(\'/static/images/asociado.png\')',
    [theme.breakpoints.down('sm')]: {
      width: '200px',
      height: '200px'
    }
  }
}))

const Asociado = () => {
  const classes = useStyles()
  const [active, setActive] = useState(false)
  const mobile = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
          <div className={classes.root}
          onClick={() => mobile && setActive(!active)}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          >
              {
                active && (
              <div className={classes.infoAsociadoWrapper}>
                <Typography variant='h6' className={classes.infoAsociadoText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                <div className={classes.infoAsociado}>
                </div>
              </div>

                )
              }
              <div className={classes.avatarWrapper}>
                  <div className={classes.avatar}></div>
              </div>
          </div>
  )
}

export default Asociado
