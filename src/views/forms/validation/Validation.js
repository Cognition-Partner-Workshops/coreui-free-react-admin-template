import React from 'react'
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

const Validation = () => {
  const [validated, setValidated] = React.useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setValidated(true)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Validation" subheader="Custom styles" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              For custom form validation messages, you&apos;ll need to add the error and helperText
              props to your form controls.
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    required
                    fullWidth
                    label="First name"
                    defaultValue="Mark"
                    error={validated && false}
                    helperText={validated ? 'Looks good!' : ''}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    required
                    fullWidth
                    label="Last name"
                    defaultValue="Otto"
                    error={validated && false}
                    helperText={validated ? 'Looks good!' : ''}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <TextField
                    required
                    fullWidth
                    label="Username"
                    error={validated}
                    helperText={validated ? 'Please choose a username.' : ''}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    required
                    fullWidth
                    label="City"
                    error={validated}
                    helperText={validated ? 'Please provide a valid city.' : ''}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <TextField
                    required
                    fullWidth
                    label="State"
                    error={validated}
                    helperText={validated ? 'Please provide a valid state.' : ''}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 3 }}>
                  <TextField
                    required
                    fullWidth
                    label="Zip"
                    error={validated}
                    helperText={validated ? 'Please provide a valid zip.' : ''}
                  />
                </Grid>
                <Grid size={12}>
                  <FormControlLabel
                    control={<Checkbox required />}
                    label="Agree to terms and conditions"
                  />
                </Grid>
                <Grid size={12}>
                  <Button variant="contained" type="submit">
                    Submit form
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Validation" subheader="Supported elements" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Validation styles are available for the following form controls and components.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Valid input"
                  defaultValue="Valid input"
                  color="success"
                  helperText="Example valid feedback"
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Invalid input"
                  error
                  helperText="Example invalid feedback"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Validation
