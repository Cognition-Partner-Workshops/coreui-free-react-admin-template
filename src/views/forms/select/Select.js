import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
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
          <CardHeader title={<strong>MUI Select</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Select components are used for collecting user provided information from a list of
              options.
            </Typography>
            <DocsExample href="react-select">
              <Box sx={{ maxWidth: 400 }}>
                <TextField select label="Select" defaultValue="1" fullWidth>
                  <MenuItem value="1">Open this select menu</MenuItem>
                  <MenuItem value="2">One</MenuItem>
                  <MenuItem value="3">Two</MenuItem>
                  <MenuItem value="4">Three</MenuItem>
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
                <strong>MUI Select</strong> <Typography component="span">Sizing</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the size prop to change the size of the select.
            </Typography>
            <DocsExample href="react-select#sizes">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
                <TextField select label="Small" size="small" defaultValue="1">
                  <MenuItem value="1">Small select</MenuItem>
                  <MenuItem value="2">One</MenuItem>
                  <MenuItem value="3">Two</MenuItem>
                </TextField>
                <TextField select label="Normal" defaultValue="1">
                  <MenuItem value="1">Normal select</MenuItem>
                  <MenuItem value="2">One</MenuItem>
                  <MenuItem value="3">Two</MenuItem>
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
                <strong>MUI Select</strong> <Typography component="span">Disabled</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the disabled prop to disable the select.
            </Typography>
            <DocsExample href="react-select#disabled">
              <Box sx={{ maxWidth: 400 }}>
                <TextField select label="Disabled" disabled defaultValue="1" fullWidth>
                  <MenuItem value="1">Disabled select</MenuItem>
                  <MenuItem value="2">One</MenuItem>
                  <MenuItem value="3">Two</MenuItem>
                </TextField>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Select
