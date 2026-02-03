import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Switch from '@mui/material/Switch'
import Grid from '@mui/material/Grid'

import { DocsExample } from 'src/components'

const ChecksRadios = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Checks and Radios" />
      <CardContent>
        <DocsExample href="forms/checks-radios">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Default checkbox" />
                <FormControlLabel control={<Checkbox />} label="Checked checkbox" />
              </FormGroup>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <RadioGroup defaultValue="option1">
                <FormControlLabel value="option1" control={<Radio />} label="Default radio" />
                <FormControlLabel value="option2" control={<Radio />} label="Second radio" />
              </RadioGroup>
            </Grid>
          </Grid>
        </DocsExample>
        <DocsExample href="forms/checks-radios#switches">
          <FormGroup sx={{ mt: 3 }}>
            <FormControlLabel control={<Switch defaultChecked />} label="Default switch checkbox" />
            <FormControlLabel control={<Switch />} label="Checked switch checkbox" />
            <FormControlLabel control={<Switch disabled />} label="Disabled switch checkbox" />
          </FormGroup>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default ChecksRadios
