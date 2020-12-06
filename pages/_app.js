import React from 'react';
import App, { Container } from 'next/app';

// Utils
import {appWithTranslation} from '../i18n';
import { DEFAULT_SEO } from '../config'
import { DefaultSeo } from 'next-seo'

// Design
import '../global.css'
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

// Components
import Head from '../components/Head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

class MyApp extends App {
	render() {
		const {Component, pageProps} = this.props;   
    return (
			<Container>
				<DefaultSeo config={DEFAULT_SEO} />
        <Head title="Blank | Blank Project with i18n" />
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="wrapper">
              <div className="navbar">
                <NavBar />
              </div>
              <div className="content">
                <Component {...pageProps} />
              </div>
              <div className="footer">
                <Footer />
              </div>
            </div>
          </ThemeProvider>
			</Container>
		);
	}
}

export default appWithTranslation(MyApp);