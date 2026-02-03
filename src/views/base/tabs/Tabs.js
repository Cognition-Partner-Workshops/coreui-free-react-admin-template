import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import MuiTabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { DocsExample } from 'src/components'

function TabPanel(props) {
  const { children, value, index, ...other } = props
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const Tabs = () => {
  const [value, setValue] = React.useState(0)

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Tabs" />
      <CardContent>
        <DocsExample href="components/tabs">
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <MuiTabs value={value} onChange={(e, v) => setValue(v)}>
                <Tab label="Home" />
                <Tab label="Profile" />
                <Tab label="Contact" />
                <Tab label="Disabled" disabled />
              </MuiTabs>
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
          </Box>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Tabs
