import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const FloatingLabels = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/floating-labels/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Floating labels</strong>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              MUI TextField with label prop creates floating labels by default.
            </Typography>
            <DocsExample href="forms/floating-labels">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label="Email address" type="email" fullWidth />
                <TextField label="Password" type="password" fullWidth />
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
                <strong>React Floating labels</strong> <small>Textareas</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="forms/floating-labels#textareas">
              <TextField label="Comments" multiline rows={3} fullWidth />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Floating labels</strong> <small>Selects</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="forms/floating-labels#selects">
              <TextField select label="Works with selects" defaultValue="3" fullWidth>
                <MenuItem value="">Open this select menu</MenuItem>
                <MenuItem value="1">One</MenuItem>
                <MenuItem value="2">Two</MenuItem>
                <MenuItem value="3">Three</MenuItem>
              </TextField>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Floating labels</strong> <small>Layout</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="forms/floating-labels#layout">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField label="First name" defaultValue="Mark" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Last name" defaultValue="Otto" fullWidth />
                </Grid>
              </Grid>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default FloatingLabels
