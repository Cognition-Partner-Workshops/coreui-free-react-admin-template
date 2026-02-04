import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  Box,
} from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const Select = () => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/select/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Select</Typography>} />
          <CardContent>
            <DocsExample href="components/select">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 300 }}>
                <FormControl fullWidth>
                  <InputLabel>Select option</InputLabel>
                  <MuiSelect value={value} label="Select option" onChange={handleChange}>
                    <MenuItem value="">Open this select menu</MenuItem>
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Three</MenuItem>
                  </MuiSelect>
                </FormControl>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Select{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Sizes
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/select#sizes">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 300 }}>
                <FormControl size="small" fullWidth>
                  <InputLabel>Small</InputLabel>
                  <MuiSelect label="Small">
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Three</MenuItem>
                  </MuiSelect>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Normal</InputLabel>
                  <MuiSelect label="Normal">
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Three</MenuItem>
                  </MuiSelect>
                </FormControl>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Select{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Disabled
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/select#disabled">
              <Box sx={{ maxWidth: 300 }}>
                <FormControl fullWidth disabled>
                  <InputLabel>Disabled</InputLabel>
                  <MuiSelect label="Disabled">
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Three</MenuItem>
                  </MuiSelect>
                </FormControl>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Select
