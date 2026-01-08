import React from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import HomeIcon from "@mui/icons-material/Home"
import SettingsIcon from "@mui/icons-material/Settings"
import PersonIcon from "@mui/icons-material/Person"
import SearchIcon from "@mui/icons-material/Search"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import StarIcon from "@mui/icons-material/Star"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import NotificationsIcon from "@mui/icons-material/Notifications"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { DocsIcons } from "src/components"

const IconBox = ({ icon, name }) => (
  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 2, border: "1px solid", borderColor: "divider", borderRadius: 1 }}>
    {icon}
    <Typography variant="caption" sx={{ mt: 1 }}>{name}</Typography>
  </Box>
)

const CoreUIIcons = () => {
  const icons = [
    { icon: <HomeIcon fontSize="large" />, name: "Home" },
    { icon: <SettingsIcon fontSize="large" />, name: "Settings" },
    { icon: <PersonIcon fontSize="large" />, name: "Person" },
    { icon: <SearchIcon fontSize="large" />, name: "Search" },
    { icon: <EmailIcon fontSize="large" />, name: "Email" },
    { icon: <PhoneIcon fontSize="large" />, name: "Phone" },
    { icon: <StarIcon fontSize="large" />, name: "Star" },
    { icon: <FavoriteIcon fontSize="large" />, name: "Favorite" },
    { icon: <ShoppingCartIcon fontSize="large" />, name: "ShoppingCart" },
    { icon: <NotificationsIcon fontSize="large" />, name: "Notifications" },
    { icon: <DeleteIcon fontSize="large" />, name: "Delete" },
    { icon: <EditIcon fontSize="large" />, name: "Edit" },
  ]
  return (
    <>
      <DocsIcons />
      <Card sx={{ mb: 4 }}>
        <CardHeader title={<Typography variant="h6">Material UI Icons</Typography>} />
        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Material UI provides a comprehensive set of icons. Visit the MUI Icons documentation for the full list.</Typography>
          <Grid container spacing={2}>
            {icons.map((item, index) => (<Grid item xs={6} sm={4} md={3} lg={2} key={index}><IconBox icon={item.icon} name={item.name} /></Grid>))}
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}
export default CoreUIIcons
