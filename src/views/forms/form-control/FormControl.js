import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const FormControlView = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/form-control/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI TextField</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Text fields let users enter and edit text.
            </Typography>
            <DocsExample href="react-text-field">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
                <TextField label="Email address" placeholder="name@example.com" />
                <TextField label="Example textarea" multiline rows={3} />
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
                <strong>MUI TextField</strong> <Typography component="span">Sizing</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the size prop to change the size of the text field.
            </Typography>
            <DocsExample href="react-text-field#sizes">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
                <TextField label="Small" size="small" />
                <TextField label="Normal" />
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
                <strong>MUI TextField</strong> <Typography component="span">Disabled</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the disabled prop to disable the text field.
            </Typography>
            <DocsExample href="react-text-field#disabled">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
                <TextField label="Disabled" disabled defaultValue="Disabled input" />
                <TextField label="Disabled" disabled defaultValue="Disabled readonly input" />
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
                <strong>MUI TextField</strong> <Typography component="span">Read Only</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use InputProps to make the text field read-only.
            </Typography>
            <DocsExample href="react-text-field#read-only">
              <Box sx={{ maxWidth: 400 }}>
                <TextField
                  label="Read Only"
                  defaultValue="Readonly input here..."
                  InputProps={{ readOnly: true }}
                  fullWidth
                />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default FormControlView
