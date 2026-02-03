import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const Popovers = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [popoverId, setPopoverId] = React.useState(null)

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget)
    setPopoverId(id)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setPopoverId(null)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/popover/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Popover</strong> <small>Basic example</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="components/popover">
              <Button
                variant="contained"
                color="error"
                size="large"
                onClick={(e) => handleClick(e, 'basic')}
              >
                Click to toggle popover
              </Button>
              <Popover
                open={popoverId === 'basic'}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}
              >
                <Box sx={{ p: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Popover title
                  </Typography>
                  <Typography variant="body2">
                    And here&apos;s some amazing content. It&apos;s very engaging. Right?
                  </Typography>
                </Box>
              </Popover>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Popover</strong> <small>Four directions</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Four options are available: top, right, bottom, and left aligned.
            </Typography>
            <DocsExample href="components/popover#four-directions">
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Button variant="outlined" onClick={(e) => handleClick(e, 'top')}>
                  Popover on top
                </Button>
                <Popover
                  open={popoverId === 'top'}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                  transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Typography>
                  </Box>
                </Popover>
                <Button variant="outlined" onClick={(e) => handleClick(e, 'right')}>
                  Popover on right
                </Button>
                <Popover
                  open={popoverId === 'right'}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'center', horizontal: 'left' }}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Typography>
                  </Box>
                </Popover>
                <Button variant="outlined" onClick={(e) => handleClick(e, 'bottom')}>
                  Popover on bottom
                </Button>
                <Popover
                  open={popoverId === 'bottom'}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Typography>
                  </Box>
                </Popover>
                <Button variant="outlined" onClick={(e) => handleClick(e, 'left')}>
                  Popover on left
                </Button>
                <Popover
                  open={popoverId === 'left'}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
                  transformOrigin={{ vertical: 'center', horizontal: 'right' }}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography variant="body2">
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                    </Typography>
                  </Box>
                </Popover>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Popovers
