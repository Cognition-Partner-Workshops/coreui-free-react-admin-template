import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Switch from '@mui/material/Switch'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

const ChecksRadios = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Checkboxes" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Checkboxes allow the user to select one or more items from a set.
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Default checkbox" />
              <FormControlLabel control={<Checkbox />} label="Checked checkbox" />
            </FormGroup>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Checkboxes" subheader="Disabled" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add the disabled prop to disable a checkbox.
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox disabled />} label="Disabled checkbox" />
              <FormControlLabel
                control={<Checkbox disabled defaultChecked />}
                label="Disabled checked checkbox"
              />
            </FormGroup>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Radios" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Radio buttons allow the user to select one option from a set.
            </Typography>
            <FormControl>
              <FormLabel>Select an option</FormLabel>
              <RadioGroup defaultValue="option1">
                <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Radios" subheader="Disabled" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add the disabled prop to disable a radio button.
            </Typography>
            <FormControl>
              <RadioGroup defaultValue="option1">
                <FormControlLabel value="option1" control={<Radio />} label="Default radio" />
                <FormControlLabel
                  value="option2"
                  control={<Radio disabled />}
                  label="Disabled radio"
                />
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Switches" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Switches toggle the state of a single setting on or off.
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Switch defaultChecked />} label="Default switch" />
              <FormControlLabel control={<Switch />} label="Unchecked switch" />
              <FormControlLabel control={<Switch disabled />} label="Disabled switch" />
              <FormControlLabel
                control={<Switch disabled defaultChecked />}
                label="Disabled checked switch"
              />
            </FormGroup>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Checkboxes" subheader="Inline" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Group checkboxes or radios on the same horizontal row.
            </Typography>
            <FormGroup row>
              <FormControlLabel control={<Checkbox defaultChecked />} label="1" />
              <FormControlLabel control={<Checkbox />} label="2" />
              <FormControlLabel control={<Checkbox disabled />} label="3 (disabled)" />
            </FormGroup>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ChecksRadios
