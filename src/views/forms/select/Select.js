import React from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Typography from "@mui/material/Typography"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Box from "@mui/material/Box"
import { DocsComponents, DocsExample } from "src/components"

const SelectView = () => {
  const [value, setValue] = React.useState("")
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/select/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Select</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Customize the native selects with MUI Select component.</Typography>
            <DocsExample href="forms/select">
              <FormControl fullWidth>
                <InputLabel>Open this select menu</InputLabel>
                <Select value={value} label="Open this select menu" onChange={(e) => setValue(e.target.value)}>
                  <MenuItem value="1">One</MenuItem>
                  <MenuItem value="2">Two</MenuItem>
                  <MenuItem value="3">Three</MenuItem>
                </Select>
              </FormControl>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Select <Typography component="span" variant="body2">Sizing</Typography></Typography>} />
          <CardContent>
            <DocsExample href="forms/select#sizing">
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <FormControl size="small" fullWidth><InputLabel>Small</InputLabel><Select label="Small"><MenuItem value="1">One</MenuItem></Select></FormControl>
                <FormControl fullWidth><InputLabel>Default</InputLabel><Select label="Default"><MenuItem value="1">One</MenuItem></Select></FormControl>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Select <Typography component="span" variant="body2">Disabled</Typography></Typography>} />
          <CardContent>
            <DocsExample href="forms/select#disabled">
              <FormControl fullWidth disabled><InputLabel>Disabled select</InputLabel><Select label="Disabled select"><MenuItem value="1">One</MenuItem></Select></FormControl>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default SelectView
