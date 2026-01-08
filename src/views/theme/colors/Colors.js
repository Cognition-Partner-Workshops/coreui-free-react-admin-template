import React from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
import { DocsLink } from "src/components"

const ThemeColor = ({ color, name, children }) => {
  return (
    <Grid item xs={12} sm={6} md={4} xl={2}>
      <Box sx={{ bgcolor: color, height: 100, borderRadius: 1, mb: 1 }} />
      <Typography variant="subtitle2">{children}</Typography>
      <Typography variant="caption" color="text.secondary">{name}</Typography>
    </Grid>
  )
}

const Colors = () => {
  const theme = useTheme()
  return (
    <Card sx={{ mb: 4 }}>
      <CardHeader title={<Typography variant="h6">Theme colors <DocsLink href="https://mui.com/material-ui/customization/palette/" /></Typography>} />
      <CardContent>
        <Grid container spacing={3}>
          <ThemeColor color={theme.palette.primary.main} name="primary.main"><Typography variant="h6">Brand Primary Color</Typography></ThemeColor>
          <ThemeColor color={theme.palette.secondary.main} name="secondary.main"><Typography variant="h6">Brand Secondary Color</Typography></ThemeColor>
          <ThemeColor color={theme.palette.success.main} name="success.main"><Typography variant="h6">Brand Success Color</Typography></ThemeColor>
          <ThemeColor color={theme.palette.error.main} name="error.main"><Typography variant="h6">Brand Danger Color</Typography></ThemeColor>
          <ThemeColor color={theme.palette.warning.main} name="warning.main"><Typography variant="h6">Brand Warning Color</Typography></ThemeColor>
          <ThemeColor color={theme.palette.info.main} name="info.main"><Typography variant="h6">Brand Info Color</Typography></ThemeColor>
          <ThemeColor color={theme.palette.grey[100]} name="grey.100"><Typography variant="h6">Brand Light Color</Typography></ThemeColor>
          <ThemeColor color={theme.palette.grey[900]} name="grey.900"><Typography variant="h6">Brand Dark Color</Typography></ThemeColor>
        </Grid>
      </CardContent>
    </Card>
  )
}
export default Colors
