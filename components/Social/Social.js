import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const Social = ({ footer, mainPage }) => {
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexGrow: 1,
      width: mainPage ? 'auto' : '10%',
      padding: !mainPage && '0',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '3%',
      marginBottom: '3%',
      [theme.breakpoints.down('sm')]: {
        marginTop: '10%',
        marginBottom: '10%',
        padding: 0,
        width: '50%'
      }
    },
    socialIcon: {
      width: '40px'
    },
    socialFooter: {
      border: '1px solid black',
      padding: '5%',
      borderRadius: '5px'
    },
    socialIconLinkedin: {
      width: '35px'
    },
    socialIconLinkedinFooter: {
      border: '1px solid black',
      padding: '8%',
      borderRadius: '5px'
    },
    liStyle: {
      listStyle: 'none'
    }

  }))

  const classes = useStyles()
  return (
    <ul
    className={classes.container}>
      <li className={classes.liStyle}>
        <a href="https://instagram.com/apbeb">
          <img src="static/images/instagram.png"
          style={{ marginRight: mainPage ? '1rem' : '0rem' }}
          className={`${classes.socialIcon} ${footer ? classes.socialFooter : ''}`} />
        </a>
      </li>
      <li className={classes.liStyle}>
        <a href="https://www.facebook.com/asociacionbodasyeventosbaleares">
         <img
          style={{ marginRight: mainPage ? '1rem' : '0rem' }}
         src="static/images/facebook.png" className={`${classes.socialIcon} ${footer ? classes.socialFooter : ''}`} />
        </a>
      </li>
      <li className={classes.liStyle}>
      <a href="https://www.twitter.com/apbe_b">
          <img
          style={{ marginRight: mainPage ? '1rem' : '0rem' }}
          src="static/images/twitter.png" className={`${classes.socialIcon} ${footer ? classes.socialIconLinkedinFooter : ''}`}/>
        </a>
      </li>
    </ul>
  )
}

export default Social
