import React from 'react'
import Link from 'next/link'


import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  homeLeft: {
    display: 'flex',
    flex: 1,
    background: theme.palette.primary.main
  },
  homeRight: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.secondary.main
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.homeLeft}></div>
      <div className={classes.homeRight}>
        <img src="static/images/zapato.png" style={{ width: '500px', objectFit: 'contain' }}/>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default Home
