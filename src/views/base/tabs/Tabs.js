import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Tabs as MuiTabs,
  Tab,
  Box,
} from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

function TabPanel(props) {
  const { children, value, index, ...other } = props
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const Tabs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/tabs/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Tabs</Typography>} />
          <CardContent>
            <DocsExample href="components/tabs">
              <Box sx={{ width: '100%' }}>
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
                    Home tab content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Typography>
                    Profile tab content. Sed do eiusmod tempor incididunt ut labore.
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Typography>
                    Contact tab content. Ut enim ad minim veniam, quis nostrud exercitation.
                  </Typography>
                </TabPanel>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Tabs{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Colored
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/tabs#colored">
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <MuiTabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                  >
                    <Tab label="Home" />
                    <Tab label="Profile" />
                    <Tab label="Contact" />
                  </MuiTabs>
                </Box>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Tabs{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Full width
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/tabs#full-width">
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <MuiTabs value={value} onChange={handleChange} variant="fullWidth">
                    <Tab label="Home" />
                    <Tab label="Profile" />
                    <Tab label="Contact" />
                  </MuiTabs>
                </Box>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Tabs
