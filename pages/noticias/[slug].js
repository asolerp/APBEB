import React, { useEffect } from 'react'

import { withTranslation } from '../../i18n'

import { useRouter } from 'next/router'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Quote from '../../components/Quote/Quote'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import parse from 'html-react-parser'

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
      flexDirection: 'column',
      marginTop: '40%'
    }
  },
  noticia: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingLeft: '140px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 2rem',
      margin: 0,
      width: '100%'
    }
  },
  backIcon: {
    marginBottom: '5%',
    cursor: 'pointer',
    '&:hover': {
      color: 'white',
      backgroundColor: theme.palette.info.main,
      borderRadius: 100
    }
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
  embedContainer: {
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden'
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%;',
    height: '100%;'
  },
  image: {
    width: '100%',
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      margin: '10% 0% 15% 0%'
    }
  }
}))

const NoticiaPage = (props) => {
  const router = useRouter()
  const classes = useStyles()

  const { noticia } = router.query

  const parsedNoticia = JSON.parse(noticia)

  console.log(documentToReactComponents(parsedNoticia.content.json))

  console.log(parsedNoticia)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
        <div className={classes.root}>
            <div className={classes.noticia}>
              <ArrowBackIcon className={classes.backIcon} onClick={() => router.back()} />
              <Typography variant="h5" className={classes.subtitle}>{new Intl.DateTimeFormat('es-ES', { dateStyle: 'long' }).format(new Date(parsedNoticia.subtitle))}</Typography>
              <Typography variant="h5" className={classes.title}>{parsedNoticia.title}</Typography>
              <Typography variant="h6" className={classes.description}>
                {
                  documentToReactComponents(parsedNoticia.content.json)
                }
              </Typography>
              {
                parsedNoticia.iframe && (
                  <div style={{ marginBottom: '8%' }} className="embed-container">
                    { parse(parsedNoticia.iframe)}
                  </div>
                )
              }
            </div>
            <div className={classes.entradas}>
              <img src={parsedNoticia.image.url} alt="wedding" className={classes.image}/>
            </div>
        </div>
  )
}

NoticiaPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default withTranslation('common')(NoticiaPage)
