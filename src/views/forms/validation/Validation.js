import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const Validation = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setValidated(true)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/validation/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>Validation</strong>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use MUI TextField with error and helperText props for validation.
            </Typography>
            <DocsExample href="forms/validation">
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="First name"
                      defaultValue="Mark"
                      required
                      fullWidth
                      error={validated}
                      helperText={validated ? 'Looks good!' : ''}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Last name"
                      defaultValue="Otto"
                      required
                      fullWidth
                      error={validated}
                      helperText={validated ? 'Looks good!' : ''}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      label="Username"
                      required
                      fullWidth
                      error={validated}
                      helperText={validated ? 'Please choose a username.' : ''}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="City"
                      required
                      fullWidth
                      error={validated}
                      helperText={validated ? 'Please provide a valid city.' : ''}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      label="State"
                      required
                      fullWidth
                      error={validated}
                      helperText={validated ? 'Please select a valid state.' : ''}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      label="Zip"
                      required
                      fullWidth
                      error={validated}
                      helperText={validated ? 'Please provide a valid zip.' : ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox required />}
                      label="Agree to terms and conditions"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained">
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
