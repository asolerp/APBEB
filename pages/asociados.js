import React, { useContext } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import MenuContext from '../context/MenuContext'

import { useQuery } from 'react-query'

import Asociado from '../components/Asociado/Asociado'
import Quote from '../components/Quote/Quote'

import { query } from '../queries/asociados'

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'

const AntTabs = withStyles((theme) => ({
  root: {
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  indicator: {
    backgroundColor: '#925D56'
  }
}))(Tabs)

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
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
    ].join(','),
    '&:hover': {
      color: '#925D56',
      opacity: 1
    },
    '&$selected': {
      color: '#925D56',
      fontWeight: theme.typography.fontWeightMedium
    },
    '&:focus': {
      color: '#925D56'
    }
  },
  selected: {}
}))((props) => <Tab disableRipple {...props} />)

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    margin: '0 auto',
    marginTop: '8%'
  },
  asociados: {
    display: 'flex',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: '0 auto',
    marginTop: '3%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  icon: {
    width: '98px',
    height: '98px'
  },
  avatar: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: theme.palette.primary.main
  }
}))

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  )
}

const Asociados = () => {
  const classes = useStyles()
  const [menuState, setMenuState] = useContext(MenuContext)

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const { isLoading, error, data: asociados } = useQuery('repoData', () =>
    fetch('https://graphql.contentful.com/content/v1/spaces/7d2nsmhsonde/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer x9CPBjC_GvM4zAEhjlKBvYr_zZYZgutVodm0_H5wVcQ'
      },
      // send the GraphQL query
      body: JSON.stringify({ query })
    }).then(res =>
      res.json()
    )
  )

  console.log(asociados)

  const WeddingIcon = ({ icono }) => {
    return (
      <img className={classes.icon} src={`/static/icons/${icono}.png`}/>
    )
  }

  return (
        <div className={classes.root}>
            <Quote message="“Juntos seremos más fuertes”" />
              {
                !menuState && (
                  <div>
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <AntTabs
                      centered
                      value={value}
                      onChange={handleChange}
                      variant="scrollable"
                      scrollButtons="on"
                      indicatorColor="primary"
                      textColor="primary"
                      aria-label="scrollable force tabs example"
                    >
                      <AntTab label="Moda & Estilismo" icon={<WeddingIcon icono="moda"/>} {...a11yProps(0)} />
                      <AntTab label="Catering & Repostería" icon={<WeddingIcon icono="catering"/>} {...a11yProps(1)} />
                      <AntTab label="Decoración & Florista" icon={<WeddingIcon icono="decoracion"/>} {...a11yProps(2)} />
                      <AntTab label="Mobiliario & Menaje" icon={<WeddingIcon icono="mobiliario"/>} {...a11yProps(3)} />
                      <AntTab label="Localizaciones" icon={<WeddingIcon icono="localizaciones"/>} {...a11yProps(4)} />
                      <AntTab label="Audiovisuales y espectáculos" icon={<WeddingIcon icono="sonido"/>} {...a11yProps(5)} />
                      <AntTab label="Wedding Planners" icon={<WeddingIcon icono="planner"/>} {...a11yProps(7)} />
                      <AntTab label="Imagen" icon={<WeddingIcon icono="imagen"/>} {...a11yProps(8)} />
                      <AntTab label="Transporte" icon={<WeddingIcon icono="bus"/>} {...a11yProps(9)} />
                    </AntTabs>
                  </div>
                  <TabPanel value={value} index={0}>
                  <div className={classes.asociados}>
                  {
                    asociados?.data?.asociadoCollection?.items?.filter(asociado => asociado.category === 'moda').map((asociado, i) => (
                      <Asociado key={i} image={asociado?.image?.url} desc={asociado?.description} url={asociado.url}/>
                    ))
                  }
                  </div>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                  <div className={classes.asociados}>
                  {
                    asociados?.data?.asociadoCollection?.items?.filter(asociado => asociado.category === 'catering').map((asociado, i) => (
                      <Asociado key={i} image={asociado?.image?.url} desc={asociado?.description} url={asociado.url}/>
                    ))
                  }
                  </div>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                  <div className={classes.asociados}>
                  {
                    asociados?.data?.asociadoCollection?.items?.filter(asociado => asociado.category === 'decoracion').map((asociado, i) => (
                      <Asociado key={i} image={asociado?.image?.url} desc={asociado?.description} url={asociado.url}/>
                    ))
                  }
                  </div>
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                  <div className={classes.asociados}>
                  {
                    asociados?.data?.asociadoCollection?.items?.filter(asociado => asociado.category === 'mobiliario').map((asociado, i) => (
                      <Asociado key={i} image={asociado?.image?.url} desc={asociado?.description} url={asociado.url}/>
                    ))
                  }
                  </div>
                  </TabPanel>
                  <TabPanel value={value} index={4}>
                  <div className={classes.asociados}>
                  {
                    asociados?.data?.asociadoCollection?.items?.filter(asociado => asociado.category === 'localizaciones').map((asociado, i) => (
                      <Asociado key={i} image={asociado?.image?.url} desc={asociado?.description} url={asociado.url}/>
                    ))
                  }
                  </div>
                  </TabPanel>
                  <TabPanel value={value} index={5}>
                  <div className={classes.asociados}>
                  {
                    asociados?.data?.asociadoCollection?.items?.filter(asociado => asociado.category === 'sonido').map((asociado, i) => (
                      <Asociado key={i} image={asociado?.image?.url} desc={asociado?.description} url={asociado.url}/>
                    ))
                  }
                  </div>
                  </TabPanel>
                  <TabPanel value={value} index={6}>
                  <div className={classes.asociados}>
                  {
                    asociados?.data?.asociadoCollection?.items?.filter(asociado => asociado.category === 'planner').map((asociado, i) => (
                      <Asociado key={i} image={asociado?.image?.url} desc={asociado?.description} url={asociado.url}/>
                    ))
                  }
                  </div>
                  </TabPanel>
                  <TabPanel value={value} index={7}>
                  <div className={classes.asociados}>
                  {
                    asociados?.data?.asociadoCollection?.items?.filter(asociado => asociado.category === 'imagen').map((asociado, i) => (
                      <Asociado key={i} image={asociado?.image?.url} desc={asociado?.description} url={asociado.url}/>
                    ))
                  }
                  </div>
                  </TabPanel>
                  <TabPanel value={value} index={8}>
                  <div className={classes.asociados}>
                  {
                    asociados?.data?.asociadoCollection?.items?.filter(asociado => asociado.category === 'transporte').map((asociado, i) => (
                      <Asociado key={i} image={asociado?.image?.url} desc={asociado?.description} url={asociado.url}/>
                    ))
                  }
                  </div>
                  </TabPanel>
                  </div>
                )
              }
            </div>
  )
}

export default Asociados
