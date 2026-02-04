import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const FloatingLabels = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/text-field/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Floating Labels</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              MUI TextField components have floating labels by default.
            </Typography>
            <DocsExample href="components/text-field#basic-textfield">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField label="Email address" type="email" />
                <TextField label="Password" type="password" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Floating Labels{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Textarea
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/text-field#multiline">
              <TextField label="Comments" multiline rows={3} fullWidth />
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Floating Labels{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Select
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/select">
              <FormControl fullWidth sx={{ maxWidth: 300 }}>
                <InputLabel>Works with selects</InputLabel>
                <Select label="Works with selects" defaultValue="">
                  <MenuItem value="">Open this select menu</MenuItem>
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                </Select>
              </FormControl>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Floating Labels{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Variants
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/text-field#form-props">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField label="Outlined (default)" variant="outlined" />
                <TextField label="Filled" variant="filled" />
                <TextField label="Standard" variant="standard" />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default FloatingLabels
