import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
    marginBottom: '3%'
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
  }

}))

const Social = ({ footer }) => {
  const classes = useStyles()
  return (
    <ul className={classes.root}>
      <li>
        <img src="static/images/instagram.png" className={`${classes.socialIcon} ${footer ? classes.socialFooter : ''}`} />
      </li>
      <li>
        <img src="static/images/facebook.png" className={`${classes.socialIcon} ${footer ? classes.socialFooter : ''}`} />
      </li>
      <li>
        <img src="static/images/linkedin.png" className={`${classes.socialIcon} ${footer ? classes.socialIconLinkedinFooter : ''}`}/>
      </li>
    </ul>
  )
}

export default Social
