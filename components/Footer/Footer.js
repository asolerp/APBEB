import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat'
  }
}));


const Footer = () => {
  const classes = useStyles();
    return (
        <div className={classes.root}>
          <h1>FOOTER</h1>
        </div>
    )
}


export default Footer