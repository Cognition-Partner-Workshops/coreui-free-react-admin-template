import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MuiSelect from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const Select = () => {
  const [value, setValue] = React.useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Select" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Customize the native selects with custom CSS that changes the element&apos;s initial
              appearance.
            </Typography>
            <FormControl fullWidth>
              <InputLabel>Open this select menu</InputLabel>
              <MuiSelect value={value} label="Open this select menu" onChange={handleChange}>
                <MenuItem value="">
                  <em>Open this select menu</em>
                </MenuItem>
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
              </MuiSelect>
            </FormControl>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Select" subheader="Sizing" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You may also choose from small and large custom selects to match our similarly sized
              text inputs.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={12}>
                <FormControl fullWidth size="small">
                  <InputLabel>Small select</InputLabel>
                  <MuiSelect label="Small select" defaultValue="">
                    <MenuItem value="">
                      <em>Open this select menu</em>
                    </MenuItem>
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Three</MenuItem>
                  </MuiSelect>
                </FormControl>
              </Grid>
              <Grid size={12}>
                <FormControl fullWidth>
                  <InputLabel>Default select</InputLabel>
                  <MuiSelect label="Default select" defaultValue="">
                    <MenuItem value="">
                      <em>Open this select menu</em>
                    </MenuItem>
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Three</MenuItem>
                  </MuiSelect>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Select" subheader="Disabled" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add the disabled prop to a select to give it a grayed out appearance and remove
              pointer events.
            </Typography>
            <FormControl fullWidth disabled>
              <InputLabel>Disabled select</InputLabel>
              <MuiSelect label="Disabled select" defaultValue="">
                <MenuItem value="">
                  <em>Open this select menu</em>
                </MenuItem>
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
              </MuiSelect>
            </FormControl>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Select
