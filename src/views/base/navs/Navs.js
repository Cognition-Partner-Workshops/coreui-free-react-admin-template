import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

const Navs = () => {
  const [value, setValue] = React.useState(0)
  const [pillValue, setPillValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handlePillChange = (event, newValue) => {
    setPillValue(newValue)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Navs" subheader="Base nav" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Navigation available in Material UI share general markup and styles, from the base
              Tabs component to the active and disabled states.
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange}>
                <Tab label="Active" />
                <Tab label="Link" />
                <Tab label="Link" />
                <Tab label="Disabled" disabled />
              </Tabs>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Navs" subheader="Horizontal alignment" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Change the horizontal alignment of your nav with flexbox utilities.
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Active" />
                <Tab label="Link" />
                <Tab label="Link" />
                <Tab label="Disabled" disabled />
              </Tabs>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Navs" subheader="Tabs" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Takes the basic nav and adds the variant=&quot;standard&quot; prop to generate a
              tabbed interface.
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} variant="standard">
                <Tab label="Active" />
                <Tab label="Link" />
                <Tab label="Link" />
                <Tab label="Disabled" disabled />
              </Tabs>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Navs" subheader="Pills" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Take that same code, but use variant=&quot;scrollable&quot; for a pill-like
              appearance.
            </Typography>
            <Tabs
              value={pillValue}
              onChange={handlePillChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  borderRadius: 2,
                  mx: 0.5,
                  minHeight: 40,
                },
                '& .Mui-selected': {
                  bgcolor: 'primary.main',
                  color: 'white !important',
                },
              }}
            >
              <Tab label="Active" />
              <Tab label="Link" />
              <Tab label="Link" />
              <Tab label="Disabled" disabled />
            </Tabs>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Navs
