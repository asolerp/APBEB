import React, { useState } from 'react'
import { Container } from 'next/app'
import PropTypes from 'prop-types'

import { useRouter } from 'next/router'

// Utils
import { appWithTranslation } from '../i18n'
import { DEFAULT_SEO } from '../config'
import { DefaultSeo } from 'next-seo'
import { isActive } from '../utils/general'

// Design
import '../css/global.css'
import '../css/TransitionPage.css'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'

// Components
import Head from '../components/Head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TransitionPage from '../components/TransitionPage'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  palette: {
    primary: {
      main: '#EAE1DA'
    },
    secondary: {
      main: '#F8F4F1'
    },
    info: {
      main: '#925D56'
    }
  }
})

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  const [animationStatus, setAnimationStatus] = useState(false)

  return (
    <Container>
      <DefaultSeo config={DEFAULT_SEO} />
      <Head title="Blank | Blank Project with i18n" />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TransitionPage active={animationStatus} />
          <div className="wrapper">
            <div className="navbar">
              <NavBar handleAnimation={setAnimationStatus} />
            </div>
            <div className="content">
              <Component {...pageProps} />
            </div>
            {
              !isActive(router, '/') && (
                <div className="footer">
                  <Footer handleAnimation={setAnimationStatus}/>
                </div>
              )
            }
          </div>
        </ThemeProvider>
    </Container>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}

export default appWithTranslation(MyApp)
