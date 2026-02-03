import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import MuiTabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

const Tabs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Tabs
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Tabs make it easy to explore and switch between different views.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Tabs
          </Typography>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <MuiTabs value={value} onChange={handleChange}>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </MuiTabs>
          </Box>
          <Box sx={{ p: 3 }}>
            {value === 0 && <Typography>Content for Item One</Typography>}
            {value === 1 && <Typography>Content for Item Two</Typography>}
            {value === 2 && <Typography>Content for Item Three</Typography>}
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default Tabs
