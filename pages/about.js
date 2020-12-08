import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '../i18n'

import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Quote from '../components/Quote'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: '8%'
  },
  contentWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex'
  },
  homeLeft: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left',
    paddingLeft: '140px'
  },
  title: {
    textAlign: 'left',
    marginBottom: '3%',
    marginTop: '10%',
    fontWeight: 'bold'
  },
  description: {
    width: '70%',
    marginBottom: '3%',
    fontWeight: 'normal'
  },
  homeRight: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundImage: 'url(\'/static/images/flores.png\')'
  }
}))

const About = ({ t }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Quote message="“Lorem ipsum dolor sit, amet consectetur.”" />
      <div className={classes.contentWrapper}>
        <div className={classes.homeLeft}>
          <Typography variant="h5" className={classes.title}>Sobre nosotros</Typography>
          <Typography variant="h6" className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography variant="h6" className={classes.description}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.
          </Typography>
          <Typography variant="h6" className={classes.description}>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?          </Typography>
        </div>
        <div className={classes.homeRight}></div>
      </div>
    </div>
  )
}

About.propTypes = {
  t: PropTypes.any
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default withTranslation('common')(About)
