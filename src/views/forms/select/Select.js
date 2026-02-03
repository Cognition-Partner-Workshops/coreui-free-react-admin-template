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

const Select = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/select/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Select</strong> <small>Default</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use MUI TextField with select prop for select inputs.
            </Typography>
            <DocsExample href="forms/select">
              <TextField select label="Open this select menu" defaultValue="" fullWidth>
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
                <strong>React Select</strong> <small>Sizing</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="forms/select#sizing">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField select size="small" label="Small select" defaultValue="1" fullWidth>
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                  <MenuItem value="3">Three</MenuItem>
                </TextField>
                <TextField select label="Default select" defaultValue="1" fullWidth>
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                  <MenuItem value="3">Three</MenuItem>
                </TextField>
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
                <strong>React Select</strong> <small>Disabled</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="forms/select#disabled">
              <TextField select label="Disabled select" defaultValue="" disabled fullWidth>
                <MenuItem value="">Open this select menu</MenuItem>
                <MenuItem value="1">One</MenuItem>
                <MenuItem value="2">Two</MenuItem>
                <MenuItem value="3">Three</MenuItem>
              </TextField>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Select
