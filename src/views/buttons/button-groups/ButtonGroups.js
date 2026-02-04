import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Button,
  ButtonGroup,
  Box,
  Stack,
} from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const ButtonGroups = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/button-group/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Button Groups</Typography>} />
          <CardContent>
            <DocsExample href="components/button-group">
              <Stack spacing={2}>
                <ButtonGroup variant="contained">
                  <Button>Left</Button>
                  <Button>Center</Button>
                  <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined">
                  <Button>Left</Button>
                  <Button>Center</Button>
                  <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup variant="text">
                  <Button>Left</Button>
                  <Button>Center</Button>
                  <Button>Right</Button>
                </ButtonGroup>
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Button Groups{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Sizes
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/button-group#sizes">
              <Stack spacing={2} alignItems="flex-start">
                <ButtonGroup size="small" variant="contained">
                  <Button>Small</Button>
                  <Button>Small</Button>
                  <Button>Small</Button>
                </ButtonGroup>
                <ButtonGroup variant="contained">
                  <Button>Medium</Button>
                  <Button>Medium</Button>
                  <Button>Medium</Button>
                </ButtonGroup>
                <ButtonGroup size="large" variant="contained">
                  <Button>Large</Button>
                  <Button>Large</Button>
                  <Button>Large</Button>
                </ButtonGroup>
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Button Groups{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Vertical
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/button-group#vertical">
              <Stack direction="row" spacing={2}>
                <ButtonGroup orientation="vertical" variant="contained">
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup orientation="vertical" variant="outlined">
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup orientation="vertical" variant="text">
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Button Groups{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Colors
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/button-group#colors">
              <Stack spacing={2}>
                <ButtonGroup variant="contained" color="primary">
                  <Button>Primary</Button>
                  <Button>Primary</Button>
                  <Button>Primary</Button>
                </ButtonGroup>
                <ButtonGroup variant="contained" color="secondary">
                  <Button>Secondary</Button>
                  <Button>Secondary</Button>
                  <Button>Secondary</Button>
                </ButtonGroup>
                <ButtonGroup variant="contained" color="success">
                  <Button>Success</Button>
                  <Button>Success</Button>
                  <Button>Success</Button>
                </ButtonGroup>
                <ButtonGroup variant="contained" color="error">
                  <Button>Error</Button>
                  <Button>Error</Button>
                  <Button>Error</Button>
                </ButtonGroup>
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ButtonGroups
