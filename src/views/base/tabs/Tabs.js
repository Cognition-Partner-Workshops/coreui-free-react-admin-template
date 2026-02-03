import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

function TabPanel(props) {
  const { children, value, index, ...other } = props
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const TabsView = () => {
  const [value, setValue] = useState(0)
  const [value2, setValue2] = useState(0)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/tabs/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Tabs</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Tabs make it easy to explore and switch between different views.
            </Typography>
            <DocsExample href="react-tabs">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={(e, v) => setValue(v)}>
                  <Tab label="Home" />
                  <Tab label="Profile" />
                  <Tab label="Contact" />
                  <Tab label="Disabled" disabled />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                Home content
              </TabPanel>
              <TabPanel value={value} index={1}>
                Profile content
              </TabPanel>
              <TabPanel value={value} index={2}>
                Contact content
              </TabPanel>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Tabs</strong> <Typography component="span">Variants</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the variant prop to change the tabs appearance.
            </Typography>
            <DocsExample href="react-tabs#basic-tabs">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value2} onChange={(e, v) => setValue2(v)} variant="fullWidth">
                  <Tab label="Home" />
                  <Tab label="Profile" />
                  <Tab label="Contact" />
                </Tabs>
              </Box>
              <TabPanel value={value2} index={0}>
                Home content (full width)
              </TabPanel>
              <TabPanel value={value2} index={1}>
                Profile content (full width)
              </TabPanel>
              <TabPanel value={value2} index={2}>
                Contact content (full width)
              </TabPanel>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TabsView
