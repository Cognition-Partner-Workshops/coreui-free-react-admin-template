import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Button,
  IconButton,
  Box,
  Stack,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import { DocsComponents, DocsExample } from 'src/components'

const Buttons = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/button/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Buttons</Typography>} />
          <CardContent>
            <DocsExample href="components/button">
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button variant="contained">Primary</Button>
                <Button variant="contained" color="secondary">
                  Secondary
                </Button>
                <Button variant="contained" color="success">
                  Success
                </Button>
                <Button variant="contained" color="error">
                  Error
                </Button>
                <Button variant="contained" color="warning">
                  Warning
                </Button>
                <Button variant="contained" color="info">
                  Info
                </Button>
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Buttons{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Outlined
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/button#outlined-buttons">
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button variant="outlined">Primary</Button>
                <Button variant="outlined" color="secondary">
                  Secondary
                </Button>
                <Button variant="outlined" color="success">
                  Success
                </Button>
                <Button variant="outlined" color="error">
                  Error
                </Button>
                <Button variant="outlined" color="warning">
                  Warning
                </Button>
                <Button variant="outlined" color="info">
                  Info
                </Button>
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Buttons{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Text
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/button#text-buttons">
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button>Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="error">Error</Button>
                <Button color="warning">Warning</Button>
                <Button color="info">Info</Button>
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Buttons{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Sizes
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/button#sizes">
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
                <Button variant="contained" size="small">
                  Small
                </Button>
                <Button variant="contained" size="medium">
                  Medium
                </Button>
                <Button variant="contained" size="large">
                  Large
                </Button>
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Buttons{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  With icons
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/button#buttons-with-icons">
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Send
                </Button>
                <IconButton color="primary">
                  <DeleteIcon />
                </IconButton>
                <IconButton color="secondary">
                  <SendIcon />
                </IconButton>
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Buttons{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Disabled
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/button#disabled">
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button variant="contained" disabled>
                  Disabled
                </Button>
                <Button variant="outlined" disabled>
                  Disabled
                </Button>
                <Button disabled>Disabled</Button>
              </Stack>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Buttons
