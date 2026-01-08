import React from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Box from "@mui/material/Box"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { DocsComponents, DocsExample } from "src/components"

const Dropdowns = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [anchorEl2, setAnchorEl2] = React.useState(null)
  const open = Boolean(anchorEl)
  const open2 = Boolean(anchorEl2)
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/dropdown/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Dropdown</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Toggle contextual overlays for displaying lists of links and more with the MUI Menu component.</Typography>
            <DocsExample href="components/dropdown">
              <Button variant="contained" endIcon={<ArrowDropDownIcon />} onClick={(e) => setAnchorEl(e.currentTarget)}>Dropdown button</Button>
              <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
                <MenuItem onClick={() => setAnchorEl(null)}>Action</MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>Another action</MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>Something else here</MenuItem>
              </Menu>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Dropdown Colors</Typography>} />
          <CardContent>
            <DocsExample href="components/dropdown#single-button">
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Button variant="contained" color="primary" endIcon={<ArrowDropDownIcon />}>Primary</Button>
                <Button variant="contained" color="secondary" endIcon={<ArrowDropDownIcon />}>Secondary</Button>
                <Button variant="contained" color="success" endIcon={<ArrowDropDownIcon />}>Success</Button>
                <Button variant="contained" color="error" endIcon={<ArrowDropDownIcon />}>Danger</Button>
                <Button variant="contained" color="warning" endIcon={<ArrowDropDownIcon />}>Warning</Button>
                <Button variant="contained" color="info" endIcon={<ArrowDropDownIcon />}>Info</Button>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Dropdown Sizes</Typography>} />
          <CardContent>
            <DocsExample href="components/dropdown#sizing">
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Button variant="contained" size="small" endIcon={<ArrowDropDownIcon />} onClick={(e) => setAnchorEl2(e.currentTarget)}>Small</Button>
                <Button variant="contained" size="large" endIcon={<ArrowDropDownIcon />}>Large</Button>
              </Box>
              <Menu anchorEl={anchorEl2} open={open2} onClose={() => setAnchorEl2(null)}>
                <MenuItem onClick={() => setAnchorEl2(null)}>Action</MenuItem>
                <MenuItem onClick={() => setAnchorEl2(null)}>Another action</MenuItem>
              </Menu>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Dropdowns
