import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import MuiTabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const Tabs = () => {
  const [value, setValue] = React.useState(0)
  const [verticalValue, setVerticalValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleVerticalChange = (event, newValue) => {
    setVerticalValue(newValue)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Tabs" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Tabs make it easy to explore and switch between different views.
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <MuiTabs value={value} onChange={handleChange}>
                <Tab label="Home" />
                <Tab label="Profile" />
                <Tab label="Contact" />
                <Tab label="Disabled" disabled />
              </MuiTabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Typography>
                Home tab content. Raw denim you probably haven&apos;t heard of them jean shorts
                Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography>
                Profile tab content. Food truck fixie locavore, accusamus mcsweeney&apos;s marfa
                nulla single-origin coffee squid.
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography>
                Contact tab content. Etsy mixtape wayfarers, ethical wes anderson tofu before they
                sold out mcsweeney&apos;s organic lomo retro fanny pack lo-fi farm-to-table
                readymade.
              </Typography>
            </TabPanel>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Tabs" subheader="Vertical" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Vertical tabs with orientation=&quot;vertical&quot;.
            </Typography>
            <Box sx={{ display: 'flex', height: 224 }}>
              <MuiTabs
                orientation="vertical"
                variant="scrollable"
                value={verticalValue}
                onChange={handleVerticalChange}
                sx={{ borderRight: 1, borderColor: 'divider' }}
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </MuiTabs>
              <TabPanel value={verticalValue} index={0}>
                Item One content
              </TabPanel>
              <TabPanel value={verticalValue} index={1}>
                Item Two content
              </TabPanel>
              <TabPanel value={verticalValue} index={2}>
                Item Three content
              </TabPanel>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Tabs
