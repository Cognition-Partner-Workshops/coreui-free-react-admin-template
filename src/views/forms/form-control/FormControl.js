import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const FormControl = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/form-control/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>React Form Control</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use MUI TextField for form inputs.
            </Typography>
            <DocsExample href="forms/form-control">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Email address"
                  type="email"
                  placeholder="name@example.com"
                  fullWidth
                />
                <TextField label="Example textarea" multiline rows={3} fullWidth />
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
                <strong>React Form Control</strong> <small>Sizing</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Set heights using size prop.
            </Typography>
            <DocsExample href="forms/form-control#sizing">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField size="small" placeholder="Small input" fullWidth />
                <TextField placeholder="Default input" fullWidth />
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
                <strong>React Form Control</strong> <small>Disabled</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="forms/form-control#disabled">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField placeholder="Disabled input" disabled fullWidth />
                <TextField placeholder="Disabled readonly input" disabled fullWidth />
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
                <strong>React Form Control</strong> <small>Readonly</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="forms/form-control#readonly">
              <TextField value="Readonly input here..." InputProps={{ readOnly: true }} fullWidth />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default FormControl
