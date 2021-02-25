import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Link from 'next/link'

import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '250px',
    height: '250px',
    background: theme.palette.primary.main,
    borderRadius: '50%',
    marginBottom: '10%',
    marginLeft: 20,
    marginRight: 20,
    [theme.breakpoints.down('sm')]: {
      width: '250px',
      height: '250px'
    },
    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
      marginBottom: '10%'
    }
  },
  infoAsociadoWrapper: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    width: '250px',
    height: '250px',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all .5s',
    [theme.breakpoints.down('sm')]: {
      width: '250px',
      height: '250px'
    }
  },
  infoAsociado: {
    position: 'absolute',
    display: 'flex',
    width: '230px',
    height: '230px',
    borderRadius: '50%',
    background: '#707070',
    opacity: '0.7',
    [theme.breakpoints.down('sm')]: {
      width: '230px',
      height: '230px'
    }

  },
  avatarWrapper: {
    width: '230px',
    height: '230px',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '230px',
      height: '230px'
    }
  },
  infoAsociadoText: {
    zIndex: 5,
    fontSize: '.8rem',
    color: 'white',
    textAlign: 'center',
    padding: 10,
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '.7rem',
      width: '70%'
    }
  },
  avatar: {
    width: '150px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    background: 'white',
    [theme.breakpoints.down('sm')]: {
      width: '120px'
    }
  },
  logoWrapper:
    {
      background: 'white',
      borderRadius: '50%',
      width: '230px',
      height: '230px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        width: '230px',
        height: '230px'
      }
    },
  link: {
    color: 'white'
  }
}))

const Asociado = ({ image, desc, url, size }) => {
  const classes = useStyles()
  const [active, setActive] = useState(false)
  const mobile = useMediaQuery(theme => theme.breakpoints.down('md'))

  const parsedSize = () => {
    switch (size) {
      case 'sm': {
        return '120px'
      }
    }
  }

  const handleClick = (url) => {
    document.location.href = `https://${url}`
  }

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
                    {desc}
                  </Typography>
                  {
                    url && (
                      <Typography onClick={() => handleClick(url)} variant='h6' className={classes.infoAsociadoText}>
                        Ir a la web
                      </Typography>
                    )
                  }

                <div className={classes.infoAsociado}>
                </div>
              </div>

                )
              }
              <div className={classes.avatarWrapper}>
                  <div className={classes.logoWrapper}>
                    <img style={{ width: size }} className={classes.avatar} src={image} />
                  </div>
              </div>
          </div>
  )
}

export default Asociado
