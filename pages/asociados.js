import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Asociado from '../components/Asociado'
import Quote from '../components/Quote'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: '0 auto',
    marginTop: '8%'
  },
  asociados: {
    display: 'flex',
    width: '50%',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  avatar: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: theme.palette.primary.main
  }
}))

const Asociados = () => {
  const classes = useStyles()
  return (
        <div className={classes.root}>
            <Quote message="“Lorem ipsum dolor sit, amet consectetur.”" />
            <div className={classes.asociados}>
              <Asociado />
              <Asociado />
              <Asociado />
              <Asociado />
              <Asociado />
              <Asociado />
              <Asociado />
              <Asociado />
              <Asociado />
            </div>
        </div>
  )
}

export default Asociados
