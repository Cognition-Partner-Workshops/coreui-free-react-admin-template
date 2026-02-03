import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { DocsComponents, DocsExample } from 'src/components'

const Validation = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/validation/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Form Validation</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Provide valuable, actionable feedback to your users with form validation.
            </Typography>
            <DocsExample href="react-text-field#validation">
              <Box component="form" sx={{ maxWidth: 600 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First name"
                      defaultValue="Mark"
                      color="success"
                      helperText="Looks good!"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Last name"
                      defaultValue="Otto"
                      color="success"
                      helperText="Looks good!"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="City"
                      error
                      helperText="Please provide a valid city."
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      label="State"
                      error
                      helperText="Please provide a valid state."
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <TextField
                      label="Zip"
                      error
                      helperText="Please provide a valid zip."
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Agree to terms and conditions"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" type="submit">
                      Submit form
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Validation
