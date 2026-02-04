import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Alert,
  Fade,
} from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const Validation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    terms: false,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (field) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setFormData({ ...formData, [field]: value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.firstName) newErrors.firstName = 'Please provide a first name.'
    if (!formData.lastName) newErrors.lastName = 'Please provide a last name.'
    if (!formData.username) newErrors.username = 'Please choose a username.'
    if (!formData.city) newErrors.city = 'Please provide a valid city.'
    if (!formData.state) newErrors.state = 'Please select a valid state.'
    if (!formData.zip) newErrors.zip = 'Please provide a valid zip.'
    if (!formData.terms) newErrors.terms = 'You must agree before submitting.'
    return newErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setShowSuccess(false)
    } else {
      setErrors({})
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/text-field/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Form Validation</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Provide valuable, actionable feedback to your users with form validation.
            </Typography>
            <DocsExample href="components/text-field#validation">
              <Fade in={showSuccess}>
                <Alert severity="success" sx={{ mb: 2 }}>
                  Form submitted successfully!
                </Alert>
              </Fade>
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <TextField
                      label="First name"
                      fullWidth
                      required
                      value={formData.firstName}
                      onChange={handleChange('firstName')}
                      error={submitted && !!errors.firstName}
                      helperText={submitted && errors.firstName}
                      color={submitted && !errors.firstName ? 'success' : undefined}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <TextField
                      label="Last name"
                      fullWidth
                      required
                      value={formData.lastName}
                      onChange={handleChange('lastName')}
                      error={submitted && !!errors.lastName}
                      helperText={submitted && errors.lastName}
                      color={submitted && !errors.lastName ? 'success' : undefined}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <TextField
                      label="Username"
                      fullWidth
                      required
                      value={formData.username}
                      onChange={handleChange('username')}
                      error={submitted && !!errors.username}
                      helperText={submitted && errors.username}
                      slotProps={{
                        input: {
                          startAdornment: <Typography sx={{ mr: 1 }}>@</Typography>,
                        },
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label="City"
                      fullWidth
                      required
                      value={formData.city}
                      onChange={handleChange('city')}
                      error={submitted && !!errors.city}
                      helperText={submitted && errors.city}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 3 }}>
                    <FormControl fullWidth required error={submitted && !!errors.state}>
                      <InputLabel>State</InputLabel>
                      <Select value={formData.state} label="State" onChange={handleChange('state')}>
                        <MenuItem value="">Choose...</MenuItem>
                        <MenuItem value="CA">California</MenuItem>
                        <MenuItem value="NY">New York</MenuItem>
                        <MenuItem value="TX">Texas</MenuItem>
                      </Select>
                      {submitted && errors.state && <FormHelperText>{errors.state}</FormHelperText>}
                    </FormControl>
                  </Grid>
                  <Grid size={{ xs: 12, md: 3 }}>
                    <TextField
                      label="Zip"
                      fullWidth
                      required
                      value={formData.zip}
                      onChange={handleChange('zip')}
                      error={submitted && !!errors.zip}
                      helperText={submitted && errors.zip}
                    />
                  </Grid>
                  <Grid size={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.terms}
                          onChange={handleChange('terms')}
                          color={submitted && errors.terms ? 'error' : 'primary'}
                        />
                      }
                      label="Agree to terms and conditions"
                    />
                    {submitted && errors.terms && (
                      <FormHelperText error>{errors.terms}</FormHelperText>
                    )}
                  </Grid>
                  <Grid size={12}>
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
