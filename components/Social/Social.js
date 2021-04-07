import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
    marginBottom: '3%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10%',
      marginBottom: '10%'
    }
  },
  socialIcon: {
    width: '40px',
    marginRight: '1rem'
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

const Social = ({ footer }) => {
  const classes = useStyles()
  return (
    <ul className={classes.root}>
      <li className={classes.liStyle}>
        <a href="https://instagram.com/apbeb">
          <img src="static/images/instagram.png" className={`${classes.socialIcon} ${footer ? classes.socialFooter : ''}`} />
        </a>
      </li>
      <li className={classes.liStyle}>
        <a href="https://www.facebook.com/asociacionbodasyeventosbaleares">
         <img src="static/images/facebook.png" className={`${classes.socialIcon} ${footer ? classes.socialFooter : ''}`} />
        </a>
      </li>
      <li className={classes.liStyle}>
      <a href="https://www.twitter.com/apbe_b">
          <img src="static/images/twitter.png" className={`${classes.socialIcon} ${footer ? classes.socialIconLinkedinFooter : ''}`}/>
        </a>
      </li>
    </ul>
  )
}

export default Social
