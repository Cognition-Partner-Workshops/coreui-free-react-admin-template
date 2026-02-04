import React, { useState } from 'react'
import { Card, CardContent, CardHeader, Typography, Grid, Tabs, Tab, Box } from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const Navs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/tabs/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Navigation Tabs</Typography>} />
          <CardContent>
            <DocsExample href="components/tabs">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                  <Tab label="Active" />
                  <Tab label="Link" />
                  <Tab label="Link" />
                  <Tab label="Disabled" disabled />
                </Tabs>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Navigation{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Centered
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/tabs#centered">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} centered>
                  <Tab label="Active" />
                  <Tab label="Link" />
                  <Tab label="Link" />
                  <Tab label="Disabled" disabled />
                </Tabs>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Navigation{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Vertical
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/tabs#vertical">
              <Box sx={{ display: 'flex', height: 200 }}>
                <Tabs
                  orientation="vertical"
                  value={value}
                  onChange={handleChange}
                  sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                </Tabs>
                <Box sx={{ p: 3 }}>
                  <Typography>Tab content {value + 1}</Typography>
                </Box>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Navigation{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Scrollable
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/tabs#scrollable">
              <Box sx={{ maxWidth: 480, bgcolor: 'background.paper' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                  <Tab label="Item Four" />
                  <Tab label="Item Five" />
                  <Tab label="Item Six" />
                  <Tab label="Item Seven" />
                </Tabs>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Navs
