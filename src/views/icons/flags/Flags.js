import React from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import FlagIcon from "@mui/icons-material/Flag"
import PublicIcon from "@mui/icons-material/Public"
import LanguageIcon from "@mui/icons-material/Language"
import { DocsIcons } from "src/components"

const IconBox = ({ icon, name }) => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 2, border: "1px solid", borderColor: "divider", borderRadius: 1 }}>
    {icon}
    <Typography variant="caption" sx={{ mt: 1 }}>{name}</Typography>
  </Box>
)

const Flags = () => {
  const icons = [
    { icon: <FlagIcon fontSize="large" color="error" />, name: "Flag" },
    { icon: <PublicIcon fontSize="large" color="primary" />, name: "Public" },
    { icon: <LanguageIcon fontSize="large" color="info" />, name: "Language" },
  ]
  return (
    <>
      <DocsIcons />
      <Card sx={{ mb: 4 }}>
        <CardHeader title={<Typography variant="h6">Flag Icons</Typography>} />
        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Material UI provides various icons for international and flag-related purposes. For country-specific flags, consider using a dedicated flag icon library.</Typography>
          <Grid container spacing={2}>
            {icons.map((item, index) => (<Grid item xs={6} sm={4} md={3} lg={2} key={index}><IconBox icon={item.icon} name={item.name} /></Grid>))}
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}
export default Flags
