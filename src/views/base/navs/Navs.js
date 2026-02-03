import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Link from '@mui/material/Link'
import { DocsComponents, DocsExample } from 'src/components'

const NavLinks = ({ direction = 'row', justify = 'flex-start' }) => (
  <Box sx={{ display: 'flex', flexDirection: direction, justifyContent: justify, gap: 2 }}>
    <Link href="#" underline="hover" sx={{ fontWeight: 'bold' }}>
      Active
    </Link>
    <Link href="#" underline="hover" color="text.secondary">
      Link
    </Link>
    <Link href="#" underline="hover" color="text.secondary">
      Link
    </Link>
    <Link href="#" underline="hover" sx={{ color: 'text.disabled', pointerEvents: 'none' }}>
      Disabled
    </Link>
  </Box>
)

const NavTabs = () => {
  const [value, setValue] = useState(0)
  return (
    <Tabs value={value} onChange={(e, v) => setValue(v)}>
      <Tab label="Active" />
      <Tab label="Link" />
      <Tab label="Link" />
      <Tab label="Disabled" disabled />
    </Tabs>
  )
}

const NavPills = () => {
  const [value, setValue] = useState(0)
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {['Active', 'Link', 'Link', 'Disabled'].map((label, index) => (
        <Button
          key={label + index}
          variant={value === index ? 'contained' : 'text'}
          onClick={() => setValue(index)}
          disabled={label === 'Disabled'}
          sx={{ borderRadius: 5 }}
        >
          {label}
        </Button>
      ))}
    </Box>
  )
}

const NavWithDropdown = ({ variant = 'text' }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [value, setValue] = useState(0)
  const open = Boolean(anchorEl)

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Button
        variant={value === 0 ? (variant === 'pills' ? 'contained' : 'text') : 'text'}
        onClick={() => setValue(0)}
        sx={variant === 'pills' ? { borderRadius: 5 } : {}}
      >
        Active
      </Button>
      <Button
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={variant === 'pills' ? { borderRadius: 5 } : {}}
      >
        Dropdown button
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => setAnchorEl(null)}>Action</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Another action</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Something else here</MenuItem>
      </Menu>
      <Button
        variant={value === 2 ? (variant === 'pills' ? 'contained' : 'text') : 'text'}
        onClick={() => setValue(2)}
        sx={variant === 'pills' ? { borderRadius: 5 } : {}}
      >
        Link
      </Button>
      <Button disabled sx={variant === 'pills' ? { borderRadius: 5 } : {}}>
        Disabled
      </Button>
    </Box>
  )
}

const Navs = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/nav-tabs/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Navs</strong> <small>Base navs</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The base nav component is built with flexbox and provides a strong foundation for
              building all types of navigation components.
            </Typography>
            <DocsExample href="components/nav-tabs#base-nav">
              <NavLinks />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Navs</strong> <small>Horizontal alignment</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Change the horizontal alignment of your nav with flexbox utilities.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Centered:
            </Typography>
            <DocsExample href="components/nav-tabs#horizontal-alignment">
              <NavLinks justify="center" />
            </DocsExample>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, mt: 2 }}>
              Right-aligned:
            </Typography>
            <DocsExample href="components/nav-tabs#base-nav">
              <NavLinks justify="flex-end" />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Navs</strong> <small>Vertical</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Stack your navigation by changing the flex item direction.
            </Typography>
            <DocsExample href="components/nav-tabs#vertical">
              <NavLinks direction="column" />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Navs</strong> <small>Tabs</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use MUI Tabs component to generate a tabbed interface.
            </Typography>
            <DocsExample href="components/nav-tabs#tabs">
              <NavTabs />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Navs</strong> <small>Pills</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use pill-style buttons for navigation.
            </Typography>
            <DocsExample href="components/nav-tabs#pills">
              <NavPills />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Navs</strong> <small>Tabs with dropdowns</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="components/nav-tabs#tabs-with-dropdowns">
              <NavWithDropdown />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Navs</strong> <small>Pills with dropdowns</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="components/nav-tabs#pills-with-dropdowns">
              <NavWithDropdown variant="pills" />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Navs
