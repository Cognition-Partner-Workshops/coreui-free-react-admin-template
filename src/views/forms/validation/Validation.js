import React from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { DocsComponents, DocsExample } from "src/components"

const Validation = () => {
  const [validated, setValidated] = React.useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    setValidated(true)
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/validation/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Form Validation</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Provide valuable, actionable feedback to your users with HTML5 form validation.</Typography>
            <DocsExample href="forms/validation">
              <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}><TextField label="First name" required defaultValue="Mark" fullWidth error={validated} helperText={validated ? "Looks good!" : ""} /></Grid>
                  <Grid item xs={12} md={4}><TextField label="Last name" required defaultValue="Otto" fullWidth /></Grid>
                  <Grid item xs={12} md={4}><TextField label="Username" required fullWidth error={validated} helperText={validated ? "Please choose a username." : ""} /></Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}><TextField label="City" required fullWidth /></Grid>
                  <Grid item xs={12} md={3}><TextField label="State" required fullWidth /></Grid>
                  <Grid item xs={12} md={3}><TextField label="Zip" required fullWidth /></Grid>
                </Grid>
                <Button type="submit" variant="contained">Submit form</Button>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Validation
