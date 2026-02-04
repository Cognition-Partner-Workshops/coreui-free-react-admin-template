import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  TextField,
  Box,
  InputAdornment,
} from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const FormControl = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    text: '',
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/text-field/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Form Controls</Typography>} />
          <CardContent>
            <DocsExample href="components/text-field">
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  label="Email address"
                  type="email"
                  placeholder="name@example.com"
                  helperText="We'll never share your email with anyone else."
                  value={values.email}
                  onChange={handleChange('email')}
                />
                <TextField
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange('password')}
                />
                <TextField
                  label="Example textarea"
                  multiline
                  rows={3}
                  value={values.text}
                  onChange={handleChange('text')}
                />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Form Controls{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Sizes
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/text-field#sizes">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField label="Small" size="small" placeholder="Small size" />
                <TextField label="Normal" placeholder="Normal size" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Form Controls{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Disabled & Readonly
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/text-field#disabled">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField label="Disabled input" placeholder="Disabled input" disabled />
                <TextField
                  label="Readonly input"
                  defaultValue="Readonly input here..."
                  slotProps={{ input: { readOnly: true } }}
                />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Form Controls{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Variants
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/text-field#variants">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField label="Outlined" variant="outlined" />
                <TextField label="Filled" variant="filled" />
                <TextField label="Standard" variant="standard" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default FormControl
