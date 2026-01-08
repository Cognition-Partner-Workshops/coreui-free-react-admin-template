import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

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

const TabsView = () => {
  const [value1, setValue1] = useState(1)
  const [value2, setValue2] = useState(1)
  const [value3, setValue3] = useState(1)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/tabs/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Tabs</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The basic React tabs example uses MUI Tabs component to generate a tabbed interface.
            </Typography>
            <DocsExample href="components/tabs/#example">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value1} onChange={(e, newValue) => setValue1(newValue)}>
                  <Tab label="Home" />
                  <Tab label="Profile" />
                  <Tab label="Contact" />
                  <Tab label="Disabled" disabled />
                </Tabs>
              </Box>
              <TabPanel value={value1} index={0}>
                Home tab content
              </TabPanel>
              <TabPanel value={value1} index={1}>
                Profile tab content
              </TabPanel>
              <TabPanel value={value1} index={2}>
                Contact tab content
              </TabPanel>
              <TabPanel value={value1} index={3}>
                Disabled tab content
              </TabPanel>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Tabs <Typography component="span" variant="body2">Centered</Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the centered prop to center the tabs.
            </Typography>
            <DocsExample href="components/tabs/#centered">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value2} onChange={(e, newValue) => setValue2(newValue)} centered>
                  <Tab label="Home" />
                  <Tab label="Profile" />
                  <Tab label="Contact" />
                </Tabs>
              </Box>
              <TabPanel value={value2} index={0}>
                Home tab content
              </TabPanel>
              <TabPanel value={value2} index={1}>
                Profile tab content
              </TabPanel>
              <TabPanel value={value2} index={2}>
                Contact tab content
              </TabPanel>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Tabs <Typography component="span" variant="body2">Vertical</Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the orientation prop to display vertical tabs.
            </Typography>
            <DocsExample href="components/tabs/#vertical">
              <Box sx={{ display: 'flex', height: 200 }}>
                <Tabs
                  orientation="vertical"
                  value={value3}
                  onChange={(e, newValue) => setValue3(newValue)}
                  sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                  <Tab label="Home" />
                  <Tab label="Profile" />
                  <Tab label="Contact" />
                </Tabs>
                <TabPanel value={value3} index={0}>
                  Home tab content
                </TabPanel>
                <TabPanel value={value3} index={1}>
                  Profile tab content
                </TabPanel>
                <TabPanel value={value3} index={2}>
                  Contact tab content
                </TabPanel>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TabsView
