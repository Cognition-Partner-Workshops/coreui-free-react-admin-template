import React from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box"
import HomeIcon from "@mui/icons-material/Home"
import SettingsIcon from "@mui/icons-material/Settings"
import { DocsComponents, DocsExample } from "src/components"

const Buttons = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/button/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Button</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Use MUI custom button styles for actions in forms, dialogs, and more.</Typography>
            <DocsExample href="components/button">
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="success">Success</Button>
                <Button variant="contained" color="error">Danger</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="info">Info</Button>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Outlined Buttons</Typography>} />
          <CardContent>
            <DocsExample href="components/button#outline-buttons">
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Button variant="outlined" color="primary">Primary</Button>
                <Button variant="outlined" color="secondary">Secondary</Button>
                <Button variant="outlined" color="success">Success</Button>
                <Button variant="outlined" color="error">Danger</Button>
                <Button variant="outlined" color="warning">Warning</Button>
                <Button variant="outlined" color="info">Info</Button>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Button Sizes</Typography>} />
          <CardContent>
            <DocsExample href="components/button#sizes">
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Disabled Buttons</Typography>} />
          <CardContent>
            <DocsExample href="components/button#disabled-state">
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button variant="contained" disabled>Disabled</Button>
                <Button variant="outlined" disabled>Disabled</Button>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Icon Buttons</Typography>} />
          <CardContent>
            <DocsExample href="components/button#icons">
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton color="primary"><HomeIcon /></IconButton>
                <IconButton color="secondary"><SettingsIcon /></IconButton>
                <Button variant="contained" startIcon={<HomeIcon />}>Home</Button>
                <Button variant="contained" endIcon={<SettingsIcon />}>Settings</Button>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Buttons
