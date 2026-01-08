import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const FloatingLabels = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/floating-labels/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Floating Labels</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Create beautifully simple form labels that float over your input fields.
            </Typography>
            <DocsExample href="forms/floating-labels">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label="Email address" type="email" variant="outlined" fullWidth />
                <TextField label="Password" type="password" variant="outlined" fullWidth />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Textareas</Typography>} />
          <CardContent>
            <DocsExample href="forms/floating-labels#textareas">
              <TextField label="Comments" multiline rows={3} variant="outlined" fullWidth />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Readonly</Typography>} />
          <CardContent>
            <DocsExample href="forms/floating-labels#readonly-plaintext">
              <TextField
                label="Input"
                defaultValue="Readonly input"
                InputProps={{ readOnly: true }}
                variant="outlined"
                fullWidth
              />
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default FloatingLabels
