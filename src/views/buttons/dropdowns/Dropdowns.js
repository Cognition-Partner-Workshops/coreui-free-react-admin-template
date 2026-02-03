import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Dropdowns = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [anchorEl2, setAnchorEl2] = React.useState(null)
  const [anchorEl3, setAnchorEl3] = React.useState(null)
  const [anchorEl4, setAnchorEl4] = React.useState(null)
  const [anchorEl5, setAnchorEl5] = React.useState(null)
  const [anchorEl6, setAnchorEl6] = React.useState(null)

  const handleClick = (setter) => (event) => {
    setter(event.currentTarget)
  }

  const handleClose = (setter) => () => {
    setter(null)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Dropdowns" subheader="Single button" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Any single Button can be turned into a dropdown toggle with some markup changes.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={handleClick(setAnchorEl)}
                >
                  Primary
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose(setAnchorEl)}
                >
                  <MenuItem onClick={handleClose(setAnchorEl)}>Action</MenuItem>
                  <MenuItem onClick={handleClose(setAnchorEl)}>Another action</MenuItem>
                  <MenuItem onClick={handleClose(setAnchorEl)}>Something else here</MenuItem>
                </Menu>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="secondary"
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={handleClick(setAnchorEl2)}
                >
                  Secondary
                </Button>
                <Menu
                  anchorEl={anchorEl2}
                  open={Boolean(anchorEl2)}
                  onClose={handleClose(setAnchorEl2)}
                >
                  <MenuItem onClick={handleClose(setAnchorEl2)}>Action</MenuItem>
                  <MenuItem onClick={handleClose(setAnchorEl2)}>Another action</MenuItem>
                  <MenuItem onClick={handleClose(setAnchorEl2)}>Something else here</MenuItem>
                </Menu>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="success"
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={handleClick(setAnchorEl3)}
                >
                  Success
                </Button>
                <Menu
                  anchorEl={anchorEl3}
                  open={Boolean(anchorEl3)}
                  onClose={handleClose(setAnchorEl3)}
                >
                  <MenuItem onClick={handleClose(setAnchorEl3)}>Action</MenuItem>
                  <MenuItem onClick={handleClose(setAnchorEl3)}>Another action</MenuItem>
                  <MenuItem onClick={handleClose(setAnchorEl3)}>Something else here</MenuItem>
                </Menu>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="error"
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={handleClick(setAnchorEl4)}
                >
                  Danger
                </Button>
                <Menu
                  anchorEl={anchorEl4}
                  open={Boolean(anchorEl4)}
                  onClose={handleClose(setAnchorEl4)}
                >
                  <MenuItem onClick={handleClose(setAnchorEl4)}>Action</MenuItem>
                  <MenuItem onClick={handleClose(setAnchorEl4)}>Another action</MenuItem>
                  <MenuItem onClick={handleClose(setAnchorEl4)}>Something else here</MenuItem>
                </Menu>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="warning"
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={handleClick(setAnchorEl5)}
                >
                  Warning
                </Button>
                <Menu
                  anchorEl={anchorEl5}
                  open={Boolean(anchorEl5)}
                  onClose={handleClose(setAnchorEl5)}
                >
                  <MenuItem onClick={handleClose(setAnchorEl5)}>Action</MenuItem>
                  <MenuItem onClick={handleClose(setAnchorEl5)}>Another action</MenuItem>
                  <MenuItem onClick={handleClose(setAnchorEl5)}>Something else here</MenuItem>
                </Menu>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="info"
                  endIcon={<KeyboardArrowDownIcon />}
                  onClick={handleClick(setAnchorEl6)}
                >
                  Info
                </Button>
                <Menu
                  anchorEl={anchorEl6}
                  open={Boolean(anchorEl6)}
                  onClose={handleClose(setAnchorEl6)}
                >
                  <MenuItem onClick={handleClose(setAnchorEl6)}>Action</MenuItem>
                  <MenuItem onClick={handleClose(setAnchorEl6)}>Another action</MenuItem>
                  <MenuItem onClick={handleClose(setAnchorEl6)}>Something else here</MenuItem>
                </Menu>
              </div>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Dropdowns" subheader="Outlined" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Outlined dropdown buttons.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              <Button variant="outlined" color="primary" endIcon={<KeyboardArrowDownIcon />}>
                Primary
              </Button>
              <Button variant="outlined" color="secondary" endIcon={<KeyboardArrowDownIcon />}>
                Secondary
              </Button>
              <Button variant="outlined" color="success" endIcon={<KeyboardArrowDownIcon />}>
                Success
              </Button>
              <Button variant="outlined" color="error" endIcon={<KeyboardArrowDownIcon />}>
                Danger
              </Button>
              <Button variant="outlined" color="warning" endIcon={<KeyboardArrowDownIcon />}>
                Warning
              </Button>
              <Button variant="outlined" color="info" endIcon={<KeyboardArrowDownIcon />}>
                Info
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Dropdowns
