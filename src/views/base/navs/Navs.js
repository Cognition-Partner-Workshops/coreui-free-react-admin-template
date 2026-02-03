import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { DocsComponents, DocsExample } from 'src/components'

const Navs = () => {
  const [tabValue, setTabValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/nav-tabs/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Tabs</strong> <Typography component="span">Basic</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              MUI Tabs provide navigation between different views or sections.
            </Typography>
            <DocsExample href="react-tabs">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tabValue} onChange={handleTabChange}>
                  <Tab label="Active" />
                  <Tab label="Link" />
                  <Tab label="Link" />
                  <Tab label="Disabled" disabled />
                </Tabs>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Tabs</strong> <Typography component="span">Centered</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the centered prop to center the tabs.
            </Typography>
            <DocsExample href="react-tabs#centered">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={0} centered>
                  <Tab label="Active" />
                  <Tab label="Link" />
                  <Tab label="Link" />
                  <Tab label="Disabled" disabled />
                </Tabs>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Tabs</strong> <Typography component="span">Vertical</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the orientation prop to create vertical tabs.
            </Typography>
            <DocsExample href="react-tabs#vertical-tabs">
              <Box sx={{ display: 'flex', height: 200 }}>
                <Tabs
                  orientation="vertical"
                  value={0}
                  sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                  <Tab label="Active" />
                  <Tab label="Link" />
                  <Tab label="Link" />
                  <Tab label="Disabled" disabled />
                </Tabs>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Navigation</strong> <Typography component="span">With Menu</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Combine tabs with dropdown menus for more complex navigation.
            </Typography>
            <DocsExample href="react-menu">
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="text">Active</Button>
                <Button variant="text" onClick={handleMenuClick}>
                  Dropdown
                </Button>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                  <MenuItem onClick={handleMenuClose}>Action</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Another action</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Something else</MenuItem>
                </Menu>
                <Button variant="text">Link</Button>
                <Button variant="text" disabled>
                  Disabled
                </Button>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Navs
