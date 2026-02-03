import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup'
import Switch from '@mui/material/Switch'
import { DocsComponents, DocsExample } from 'src/components'

const ChecksRadios = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/checks-radios/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Checkbox</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Checkboxes allow the user to select one or more items from a set.
            </Typography>
            <DocsExample href="react-checkbox">
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Default checkbox" />
                <FormControlLabel control={<Checkbox />} label="Checked checkbox" />
              </FormGroup>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Radio</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Radio buttons allow the user to select one option from a set.
            </Typography>
            <DocsExample href="react-radio-button">
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup defaultValue="female" name="radio-buttons-group">
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Switch</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Switches toggle the state of a single setting on or off.
            </Typography>
            <DocsExample href="react-switch">
              <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Default switch" />
                <FormControlLabel control={<Switch />} label="Unchecked switch" />
                <FormControlLabel control={<Switch disabled />} label="Disabled switch" />
                <FormControlLabel
                  control={<Switch disabled defaultChecked />}
                  label="Disabled checked switch"
                />
              </FormGroup>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ChecksRadios
