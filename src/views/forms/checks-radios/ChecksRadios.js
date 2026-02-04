import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Box,
} from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const ChecksRadios = () => {
  const [checked, setChecked] = useState(true)
  const [radioValue, setRadioValue] = useState('option1')

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/checkbox/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Checkboxes</Typography>} />
          <CardContent>
            <DocsExample href="components/checkbox">
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Default checkbox" />
                <FormControlLabel control={<Checkbox />} label="Unchecked checkbox" />
                <FormControlLabel control={<Checkbox disabled />} label="Disabled checkbox" />
                <FormControlLabel
                  control={<Checkbox disabled checked />}
                  label="Disabled checked"
                />
              </FormGroup>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Radio Buttons</Typography>} />
          <CardContent>
            <DocsExample href="components/radio-button">
              <FormControl>
                <FormLabel>Select an option</FormLabel>
                <RadioGroup value={radioValue} onChange={(e) => setRadioValue(e.target.value)}>
                  <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                  <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                  <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
                  <FormControlLabel
                    value="disabled"
                    control={<Radio />}
                    label="Disabled"
                    disabled
                  />
                </RadioGroup>
              </FormControl>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Switches</Typography>} />
          <CardContent>
            <DocsExample href="components/switch">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                  }
                  label="Default switch"
                />
                <FormControlLabel control={<Switch defaultChecked />} label="Checked switch" />
                <FormControlLabel control={<Switch disabled />} label="Disabled switch" />
                <FormControlLabel
                  control={<Switch disabled checked />}
                  label="Disabled checked switch"
                />
              </FormGroup>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Checkboxes{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Colors
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/checkbox#color">
              <FormGroup row>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Primary" />
                <FormControlLabel
                  control={<Checkbox defaultChecked color="secondary" />}
                  label="Secondary"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked color="success" />}
                  label="Success"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked color="error" />}
                  label="Error"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked color="warning" />}
                  label="Warning"
                />
                <FormControlLabel control={<Checkbox defaultChecked color="info" />} label="Info" />
              </FormGroup>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ChecksRadios
