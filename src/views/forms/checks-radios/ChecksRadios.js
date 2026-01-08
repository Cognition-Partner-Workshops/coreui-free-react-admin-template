import React from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Typography from "@mui/material/Typography"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import Switch from "@mui/material/Switch"
import FormGroup from "@mui/material/FormGroup"
import Box from "@mui/material/Box"
import { DocsComponents, DocsExample } from "src/components"

const ChecksRadios = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/checks-radios/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Checkbox</Typography>} />
          <CardContent>
            <DocsExample href="forms/checks-radios">
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
          <CardHeader title={<Typography variant="h6">React Radio</Typography>} />
          <CardContent>
            <DocsExample href="forms/checks-radios#radios">
              <RadioGroup defaultValue="option1">
                <FormControlLabel value="option1" control={<Radio />} label="Default radio" />
                <FormControlLabel value="option2" control={<Radio />} label="Second default radio" />
              </RadioGroup>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Switch</Typography>} />
          <CardContent>
            <DocsExample href="forms/checks-radios#switches">
              <FormGroup>
                <FormControlLabel control={<Switch />} label="Default switch checkbox" />
                <FormControlLabel control={<Switch defaultChecked />} label="Checked switch checkbox" />
              </FormGroup>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Disabled</Typography>} />
          <CardContent>
            <DocsExample href="forms/checks-radios#disabled">
              <FormGroup>
                <FormControlLabel disabled control={<Checkbox />} label="Disabled checkbox" />
                <FormControlLabel disabled control={<Radio />} label="Disabled radio" />
                <FormControlLabel disabled control={<Switch />} label="Disabled switch" />
              </FormGroup>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default ChecksRadios
