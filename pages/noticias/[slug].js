import React, { useEffect } from 'react'

import { withTranslation } from '../../i18n'

import { useRouter } from 'next/router'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Quote from '../../components/Quote/Quote'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: '0 auto',
    marginTop: '8%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  noticia: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingLeft: '140px',
    [theme.breakpoints.down('sm')]: {
      flex: 'auto',
      padding: '0px 2rem'
    }
  },
  backIcon: {
    marginBottom: '5%'
  },
  subtitle: {
    color: 'grey',
    marginBottom: '2%',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  },
  title: {
    textAlign: 'left',
    marginBottom: '10%',
    fontWeight: 'bold'
  },
  description: {
    width: '70%',
    marginBottom: '3%',
    fontWeight: 'normal',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  entradas: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flex: 1.5,
    [theme.breakpoints.down('sm')]: {
      flex: 'auto'
    }
  },
  image: {
    width: '100%',
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      margin: '10% 0% 15% 0%'
    }
  }
}))

const NoticiaPage = () => {
  const router = useRouter()
  const classes = useStyles()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
        <div className={classes.root}>
            <Quote message="“Lorem ipsum dolor sit, amet consectetur.”" />
            <div className={classes.noticia}>
              <ArrowBackIcon className={classes.backIcon} onClick={() => router.back()} />
              <Typography variant="h5" className={classes.subtitle}>Domingo 29 de Noviembre de 2020</Typography>
              <Typography variant="h5" className={classes.title}>Sobre nosotros</Typography>
              <Typography variant="h6" className={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
              </Typography>
            </div>
            <div className={classes.entradas}>
              <img src="/static/images/wedding.png" alt="wedding" className={classes.image}/>
            </div>
        </div>
  )
}

NoticiaPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default withTranslation('common')(NoticiaPage)
