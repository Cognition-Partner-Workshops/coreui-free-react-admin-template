import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { DocsComponents, DocsExample } from 'src/components'

const NavLink = ({ href, active, disabled, children }) => (
  <Link
    href={href}
    sx={{
      px: 2,
      py: 1,
      textDecoration: 'none',
      color: disabled ? 'text.disabled' : active ? 'primary.main' : 'text.primary',
      pointerEvents: disabled ? 'none' : 'auto',
      '&:hover': { color: 'primary.main' },
    }}
  >
    {children}
  </Link>
)

const Navs = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/nav-tabs/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Navs{' '}
                <Typography component="span" variant="body2">
                  Base navs
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The base nav component is built with flexbox and provides a strong foundation for
              building all types of navigation components.
            </Typography>
            <DocsExample href="components/nav-tabs#base-nav">
              <Box sx={{ display: 'flex' }}>
                <NavLink href="#" active>
                  Active
                </NavLink>
                <NavLink href="#">Link</NavLink>
                <NavLink href="#">Link</NavLink>
                <NavLink href="#" disabled>
                  Disabled
                </NavLink>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Navs{' '}
                <Typography component="span" variant="body2">
                  Horizontal alignment
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Change the horizontal alignment of your nav with flexbox utilities.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Centered:
            </Typography>
            <DocsExample href="components/nav-tabs#horizontal-alignment">
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <NavLink href="#" active>
                  Active
                </NavLink>
                <NavLink href="#">Link</NavLink>
                <NavLink href="#">Link</NavLink>
                <NavLink href="#" disabled>
                  Disabled
                </NavLink>
              </Box>
            </DocsExample>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, mt: 2 }}>
              Right-aligned:
            </Typography>
            <DocsExample href="components/nav-tabs#base-nav">
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <NavLink href="#" active>
                  Active
                </NavLink>
                <NavLink href="#">Link</NavLink>
                <NavLink href="#">Link</NavLink>
                <NavLink href="#" disabled>
                  Disabled
                </NavLink>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Navs{' '}
                <Typography component="span" variant="body2">
                  Vertical
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Stack your navigation by changing the flex item direction.
            </Typography>
            <DocsExample href="components/nav-tabs#vertical">
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <NavLink href="#" active>
                  Active
                </NavLink>
                <NavLink href="#">Link</NavLink>
                <NavLink href="#">Link</NavLink>
                <NavLink href="#" disabled>
                  Disabled
                </NavLink>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Navs{' '}
                <Typography component="span" variant="body2">
                  With dropdowns
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/nav-tabs#tabs-with-dropdowns">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <NavLink href="#" active>
                  Active
                </NavLink>
                <Button onClick={handleClick} sx={{ textTransform: 'none' }}>
                  Dropdown
                </Button>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <MenuItem onClick={handleClose}>Action</MenuItem>
                  <MenuItem onClick={handleClose}>Another action</MenuItem>
                  <MenuItem onClick={handleClose}>Something else here</MenuItem>
                </Menu>
                <NavLink href="#">Link</NavLink>
                <NavLink href="#" disabled>
                  Disabled
                </NavLink>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Navs
