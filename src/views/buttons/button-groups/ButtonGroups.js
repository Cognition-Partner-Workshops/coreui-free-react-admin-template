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
          <CardHeader
            title={
              <>
                <strong>React Button Group</strong> <small>Basic example</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Wrap a series of buttons with ButtonGroup.
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
          <CardHeader
            title={
              <>
                <strong>React Button Group</strong> <small>Outlined styles</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="components/button-group#outlined-styles">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {['primary', 'secondary', 'success', 'error', 'warning', 'info'].map((color) => (
                  <ButtonGroup key={color} variant="outlined" color={color}>
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                  </ButtonGroup>
                ))}
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Button Group</strong> <small>Vertical variation</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Make a set of buttons appear vertically stacked.
            </Typography>
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
          <CardHeader
            title={
              <>
                <strong>React Button Group</strong> <small>Sizes</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="components/button-group#sizing">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <ButtonGroup size="large" variant="contained">
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup variant="contained">
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup size="small" variant="contained">
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
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
