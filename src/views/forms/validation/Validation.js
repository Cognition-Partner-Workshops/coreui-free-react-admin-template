import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import { DocsExample } from 'src/components'

const Validation = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Validation" />
      <CardContent>
        <DocsExample href="forms/validation">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField label="First name" defaultValue="Mark" required fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField label="Last name" defaultValue="Otto" required fullWidth />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                label="Username"
                required
                error
                helperText="Please choose a username."
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="City"
                required
                error
                helperText="Please provide a valid city."
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField
                label="State"
                required
                error
                helperText="Please provide a valid state."
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <TextField
                label="Zip"
                required
                error
                helperText="Please provide a valid zip."
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <FormControlLabel
                control={<Checkbox required />}
                label="Agree to terms and conditions"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button variant="contained">Submit form</Button>
            </Grid>
          </Grid>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Validation
