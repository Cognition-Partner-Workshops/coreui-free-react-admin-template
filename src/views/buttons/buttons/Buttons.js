import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { DocsComponents, DocsExample } from 'src/components'

const Buttons = () => {
  const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info']

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/buttons/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>React Button</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              MUI includes a bunch of predefined button components, each serving its own semantic
              purpose.
            </Typography>
            <DocsExample href="components/buttons">
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {colors.map((color) => (
                  <Button key={color} variant="contained" color={color}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {colors.map((color) => (
                  <Button key={color} variant="contained" color={color} disabled>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </Button>
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
                <strong>React Button</strong> <small>with icons</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You can combine buttons with MUI Icons.
            </Typography>
            <DocsExample href="components/buttons">
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {colors.map((color) => (
                  <Button
                    key={color}
                    variant="contained"
                    color={color}
                    startIcon={<NotificationsIcon />}
                  >
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </Button>
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
                <strong>React Button</strong> <small>outline</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use variant=&quot;outlined&quot; for outline buttons.
            </Typography>
            <DocsExample href="components/buttons#outline-buttons">
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {colors.map((color) => (
                  <Button key={color} variant="outlined" color={color}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </Button>
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
                <strong>React Button</strong> <small>text</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use variant=&quot;text&quot; for text buttons.
            </Typography>
            <DocsExample href="components/buttons#ghost-buttons">
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {colors.map((color) => (
                  <Button key={color} variant="text" color={color}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </Button>
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
                <strong>React Button</strong> <small>Sizes</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use size=&quot;small&quot; or size=&quot;large&quot; for different sizes.
            </Typography>
            <DocsExample href="components/buttons#sizes">
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
                <Button variant="contained" size="small">
                  Small
                </Button>
                <Button variant="contained" size="medium">
                  Medium
                </Button>
                <Button variant="contained" size="large">
                  Large
                </Button>
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
                <strong>React Button</strong> <small>Block buttons</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Create full-width buttons using fullWidth prop.
            </Typography>
            <DocsExample href="components/buttons#block-buttons">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button variant="contained" fullWidth>
                  Button
                </Button>
                <Button variant="contained" fullWidth>
                  Button
                </Button>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Buttons
