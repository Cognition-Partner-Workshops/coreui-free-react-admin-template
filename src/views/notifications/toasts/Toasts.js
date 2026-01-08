import React from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
import Box from "@mui/material/Box"
import { DocsComponents, DocsExample } from "src/components"

const Toasts = () => {
  const [open, setOpen] = React.useState(false)
  const [autoOpen, setAutoOpen] = React.useState(false)
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/toast/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Toast (Snackbar)</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</Typography>
            <DocsExample href="components/toast">
              <Button variant="contained" onClick={() => setOpen(true)}>Show Toast</Button>
              <Snackbar open={open} onClose={() => setOpen(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={() => setOpen(false)} severity="info" sx={{ width: "100%" }}>Hello, world! This is a toast message.</Alert>
              </Snackbar>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Auto-hide Toast</Typography>} />
          <CardContent>
            <DocsExample href="components/toast#autohide">
              <Button variant="contained" onClick={() => setAutoOpen(true)}>Show Auto-hide Toast</Button>
              <Snackbar open={autoOpen} autoHideDuration={3000} onClose={() => setAutoOpen(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={() => setAutoOpen(false)} severity="success" sx={{ width: "100%" }}>This toast will auto-hide in 3 seconds.</Alert>
              </Snackbar>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Toast Colors</Typography>} />
          <CardContent>
            <DocsExample href="components/toast#color-schemes">
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Alert severity="success">Success toast</Alert>
                <Alert severity="info">Info toast</Alert>
                <Alert severity="warning">Warning toast</Alert>
                <Alert severity="error">Error toast</Alert>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Toasts
