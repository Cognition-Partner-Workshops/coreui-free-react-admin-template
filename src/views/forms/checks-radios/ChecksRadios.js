import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Switch from '@mui/material/Switch'

const ChecksRadios = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Checks & Radios
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Create consistent cross-browser and cross-device checkboxes and radios.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Checkboxes
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Default checkbox" />
            <FormControlLabel control={<Checkbox />} label="Unchecked checkbox" />
            <FormControlLabel control={<Checkbox disabled />} label="Disabled checkbox" />
          </FormGroup>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Radio Buttons
          </Typography>
          <RadioGroup defaultValue="option1">
            <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
            <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
            <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
            <FormControlLabel value="disabled" control={<Radio disabled />} label="Disabled" />
          </RadioGroup>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Switches
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Default switch" />
            <FormControlLabel control={<Switch />} label="Unchecked switch" />
            <FormControlLabel control={<Switch disabled />} label="Disabled switch" />
          </FormGroup>
        </CardContent>
      </Card>
    </>
  )
}

export default ChecksRadios
