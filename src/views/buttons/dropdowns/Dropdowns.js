import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Button,
  Menu,
  MenuItem,
  Box,
  Stack,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { DocsComponents, DocsExample } from 'src/components'

const Dropdowns = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/menu/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Dropdowns</Typography>} />
          <CardContent>
            <DocsExample href="components/menu">
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Box>
                  <Button
                    variant="contained"
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Dropdown
                  </Button>
                  <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Action</MenuItem>
                    <MenuItem onClick={handleClose}>Another action</MenuItem>
                    <MenuItem onClick={handleClose}>Something else here</MenuItem>
                  </Menu>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Secondary
                  </Button>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Success
                  </Button>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Error
                  </Button>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="warning"
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Warning
                  </Button>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="info"
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Info
                  </Button>
                </Box>
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Dropdowns{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Outlined
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/menu#outlined">
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button
                  variant="outlined"
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Primary
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Secondary
                </Button>
                <Button
                  variant="outlined"
                  color="success"
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Success
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Error
                </Button>
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Dropdowns{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Sizes
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/menu#sizes">
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Small
                </Button>
                <Button
                  variant="contained"
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Medium
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Large
                </Button>
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Dropdowns
