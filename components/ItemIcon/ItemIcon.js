import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { animateScroll as scroll } from 'react-scroll'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
    },
    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
    }
  }
}))

const ItemIcon = ({ icon, title }) => {
  const classes = useStyles()

  return (
        <div className={classes.root} onClick={() => {
          console.log('icon')
          scroll.scrollToTop()
        }}>
            {icon}
            {
              title && (<Typography variant="h6" className={classes.title}>{title}</Typography>)
            }
        </div>
  )
}

export default ItemIcon
