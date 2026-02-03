import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

const Navs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Navs & Tabs
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Navigation components for organizing content.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Tabs
          </Typography>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Home" />
              <Tab label="Profile" />
              <Tab label="Messages" />
            </Tabs>
          </Box>
          <Box sx={{ p: 3 }}>
            {value === 0 && <Typography>Home content</Typography>}
            {value === 1 && <Typography>Profile content</Typography>}
            {value === 2 && <Typography>Messages content</Typography>}
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default Navs
