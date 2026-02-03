import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const DropdownButton = ({ label, color = 'primary', variant = 'contained' }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  return (
    <>
      <Button variant={variant} color={color} onClick={(e) => setAnchorEl(e.currentTarget)}>
        {label}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => setAnchorEl(null)}>Action</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Another action</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Something else here</MenuItem>
      </Menu>
    </>
  )
}

const Dropdowns = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/dropdown/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Dropdown</strong> <small>Single button</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Here&apos;s how you can use MUI Menu as dropdowns with buttons.
            </Typography>
            <DocsExample href="components/dropdown#single-button">
              <DropdownButton label="Dropdown button" />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Dropdown</strong> <small>Color variants</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="components/dropdown#single-button">
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map((color) => (
                  <DropdownButton
                    key={color}
                    label={color.charAt(0).toUpperCase() + color.slice(1)}
                    color={color}
                  />
                ))}
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
                <strong>React Dropdown</strong> <small>Outlined variants</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="components/dropdown#single-button">
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map((color) => (
                  <DropdownButton
                    key={color}
                    label={color.charAt(0).toUpperCase() + color.slice(1)}
                    color={color}
                    variant="outlined"
                  />
                ))}
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Dropdowns
