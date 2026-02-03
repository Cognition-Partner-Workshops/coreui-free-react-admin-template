import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const Dropdowns = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorEl2, setAnchorEl2] = useState(null)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/dropdown/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Menu (Dropdown)</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Menus display a list of choices on temporary surfaces.
            </Typography>
            <DocsExample href="react-menu">
              <Button variant="contained" onClick={(e) => setAnchorEl(e.currentTarget)}>
                Dropdown button
              </Button>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                <MenuItem onClick={() => setAnchorEl(null)}>Action</MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>Another action</MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>Something else here</MenuItem>
              </Menu>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Menu</strong> <Typography component="span">Colors</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use different button colors with menus.
            </Typography>
            <DocsExample href="react-menu#customization">
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => setAnchorEl2(e.currentTarget)}
                >
                  Primary
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={(e) => setAnchorEl2(e.currentTarget)}
                >
                  Secondary
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={(e) => setAnchorEl2(e.currentTarget)}
                >
                  Success
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={(e) => setAnchorEl2(e.currentTarget)}
                >
                  Danger
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={(e) => setAnchorEl2(e.currentTarget)}
                >
                  Warning
                </Button>
                <Button
                  variant="contained"
                  color="info"
                  onClick={(e) => setAnchorEl2(e.currentTarget)}
                >
                  Info
                </Button>
                <Menu
                  anchorEl={anchorEl2}
                  open={Boolean(anchorEl2)}
                  onClose={() => setAnchorEl2(null)}
                >
                  <MenuItem onClick={() => setAnchorEl2(null)}>Action</MenuItem>
                  <MenuItem onClick={() => setAnchorEl2(null)}>Another action</MenuItem>
                  <MenuItem onClick={() => setAnchorEl2(null)}>Something else here</MenuItem>
                </Menu>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Dropdowns
