import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const ButtonGroups = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/button-group/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Button Group</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Group a series of buttons together on a single line with the button group.
            </Typography>
            <DocsExample href="components/button-group">
              <ButtonGroup variant="contained">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Outlined Button Group</Typography>} />
          <CardContent>
            <DocsExample href="components/button-group#outlined-styles">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <ButtonGroup variant="outlined" color="primary">
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined" color="secondary">
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined" color="success">
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Vertical Button Group</Typography>} />
          <CardContent>
            <DocsExample href="components/button-group#vertical-variation">
              <ButtonGroup orientation="vertical" variant="contained">
                <Button>Top</Button>
                <Button>Middle</Button>
                <Button>Bottom</Button>
              </ButtonGroup>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Button Group Sizes</Typography>} />
          <CardContent>
            <DocsExample href="components/button-group#sizing">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <ButtonGroup size="small" variant="contained">
                  <Button>Small</Button>
                  <Button>Small</Button>
                </ButtonGroup>
                <ButtonGroup size="medium" variant="contained">
                  <Button>Medium</Button>
                  <Button>Medium</Button>
                </ButtonGroup>
                <ButtonGroup size="large" variant="contained">
                  <Button>Large</Button>
                  <Button>Large</Button>
                </ButtonGroup>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default ButtonGroups
