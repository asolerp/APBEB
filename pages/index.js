import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '../i18n'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Social from '../components/Social/Social'
import ItemIcon from '../components/ItemIcon/ItemIcon'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      overflow: 'hidden'
    },
    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
      flexDirection: 'row',
      height: '100vh'
    }
  },
  homeLeft: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      order: 1
    }
  },
  title: {
    display: 'flex',
    fontFamily: 'Champagne',
    flex: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '70%',
    fontSize: '3rem',
    fontWeight: '400',
    paddingLeft: '140px',
    marginTop: '5rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      fontSize: '2.5rem',
      paddingLeft: '2rem',
      width: '80%'
    }
  },
  homeRight: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-end',
      order: 0
    }
  },
  homeImage: {
    width: '600px',
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    },
    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
      width: '80%'
    }
  },
  iconsWrapper: {
    height: '10vh',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10% 0%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: '100vh'
    },
    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
      flexDirection: 'row'
    }
  },
  icon: {
    width: '10rem',
    [theme.breakpoints.down('sm')]: {
      width: '8rem'
    },
    [`${theme.breakpoints.down('md')} and (orientation: landscape)`]: {
      width: '8rem'
    }
  }
}))

const Home = ({ t }) => {
  const classes = useStyles()
  const mobile = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.homeLeft}>
          <Typography variant="h1" className={classes.title}>{t('home.title')}</Typography>
          {
            !mobile && <Social footer={true}/>
          }
        </div>
        <div className={classes.homeRight}>
          <img src="static/images/shoe.png" alt="wedding" className={classes.homeImage}/>
        </div>
      </div>
      <div className={classes.iconsWrapper}>
        <ItemIcon icon={<img className={classes.icon} src="/static/images/cake.svg" />} title="Lorem Ipsum"/>
        <ItemIcon icon={<img className={classes.icon} src="/static/images/married.svg" />} title="Lorem Ipsum"/>
        <ItemIcon icon={<img className={classes.icon} src="/static/images/rings.svg" />} title="Lorem Ipsum"/>
      </div>
    </div>
  )
}

Home.propTypes = {
  t: PropTypes.any
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default withTranslation('common')(Home)
