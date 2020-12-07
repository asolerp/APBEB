import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    paddingLeft: '140px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  socialIcon: {
    width: '40px',
    marginRight: '1rem'
  },
  socialIconLinkedin: {
    width: '35px'
  }

}))

const Social = () => {
  const classes = useStyles()
  return (
    <ul className={classes.root}>
      <li>
        <img src="static/images/instagram.png" className={classes.socialIcon}/>
      </li>
      <li>
        <img src="static/images/facebook.png" className={classes.socialIcon}/>
      </li>
      <li>
        <img src="static/images/linkedin.png" className={classes.socialIconLinkedin}/>
      </li>
    </ul>
  )
}

export default Social
