import React from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import Box from "@mui/material/Box"
import { DocsComponents, DocsExample } from "src/components"

const Badges = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/badge/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Badge</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Documentation and examples for badges, our small count and labeling component.</Typography>
            <DocsExample href="components/badge">
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip label="Primary" color="primary" />
                <Chip label="Secondary" color="secondary" />
                <Chip label="Success" color="success" />
                <Chip label="Error" color="error" />
                <Chip label="Warning" color="warning" />
                <Chip label="Info" color="info" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Outlined Badges</Typography>} />
          <CardContent>
            <DocsExample href="components/badge#contextual-variations">
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <Chip label="Primary" color="primary" variant="outlined" />
                <Chip label="Secondary" color="secondary" variant="outlined" />
                <Chip label="Success" color="success" variant="outlined" />
                <Chip label="Error" color="error" variant="outlined" />
                <Chip label="Warning" color="warning" variant="outlined" />
                <Chip label="Info" color="info" variant="outlined" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Badge Sizes</Typography>} />
          <CardContent>
            <DocsExample href="components/badge#sizes">
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Chip label="Small" size="small" color="primary" />
                <Chip label="Medium" color="primary" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Badges
