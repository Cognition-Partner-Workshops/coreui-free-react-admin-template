import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Switch from '@mui/material/Switch'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const ChecksRadios = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/checks-radios/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Checkbox</strong>
              </>
            }
          />
          <CardContent>
            <DocsExample href="forms/checks-radios">
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Default checkbox" />
                <FormControlLabel control={<Checkbox />} label="Checked checkbox" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Checkbox</strong> <small>Disabled</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="forms/checks-radios#disabled">
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <FormControlLabel control={<Checkbox disabled />} label="Disabled checkbox" />
                <FormControlLabel
                  control={<Checkbox disabled defaultChecked />}
                  label="Disabled checked checkbox"
                />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Radio</strong>
              </>
            }
          />
          <CardContent>
            <DocsExample href="forms/checks-radios#radios">
              <RadioGroup defaultValue="option1">
                <FormControlLabel value="option1" control={<Radio />} label="Default radio" />
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label="Second default radio"
                />
                <FormControlLabel
                  value="option3"
                  control={<Radio />}
                  label="Disabled radio"
                  disabled
                />
              </RadioGroup>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Switch</strong>
              </>
            }
          />
          <CardContent>
            <DocsExample href="forms/checks-radios#switches">
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <FormControlLabel control={<Switch />} label="Default switch checkbox input" />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Checked switch checkbox input"
                />
                <FormControlLabel
                  control={<Switch disabled />}
                  label="Disabled switch checkbox input"
                />
                <FormControlLabel
                  control={<Switch disabled defaultChecked />}
                  label="Disabled checked switch checkbox input"
                />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ChecksRadios
