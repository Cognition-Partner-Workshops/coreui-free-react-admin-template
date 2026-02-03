import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const Popovers = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorElTop, setAnchorElTop] = useState(null)
  const [anchorElBottom, setAnchorElBottom] = useState(null)
  const [anchorElLeft, setAnchorElLeft] = useState(null)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/popover/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Popover</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              A Popover can be used to display some content on top of another.
            </Typography>
            <DocsExample href="react-popover">
              <Button variant="contained" onClick={(e) => setAnchorEl(e.currentTarget)}>
                Click to toggle popover
              </Button>
              <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              >
                <Box sx={{ p: 2, maxWidth: 300 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
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
                <strong>MUI Popover</strong> <Typography component="span">Directions</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use anchorOrigin and transformOrigin props to control popover placement.
            </Typography>
            <DocsExample href="react-popover#anchor-playground">
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="outlined" onClick={(e) => setAnchorElTop(e.currentTarget)}>
                  Popover on top
                </Button>
                <Popover
                  open={Boolean(anchorElTop)}
                  anchorEl={anchorElTop}
                  onClose={() => setAnchorElTop(null)}
                  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                  transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography>Top popover</Typography>
                  </Box>
                </Popover>
                <Button variant="outlined" onClick={(e) => setAnchorElBottom(e.currentTarget)}>
                  Popover on bottom
                </Button>
                <Popover
                  open={Boolean(anchorElBottom)}
                  anchorEl={anchorElBottom}
                  onClose={() => setAnchorElBottom(null)}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography>Bottom popover</Typography>
                  </Box>
                </Popover>
                <Button variant="outlined" onClick={(e) => setAnchorElLeft(e.currentTarget)}>
                  Popover on left
                </Button>
                <Popover
                  open={Boolean(anchorElLeft)}
                  anchorEl={anchorElLeft}
                  onClose={() => setAnchorElLeft(null)}
                  anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
                  transformOrigin={{ vertical: 'center', horizontal: 'right' }}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography>Left popover</Typography>
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
