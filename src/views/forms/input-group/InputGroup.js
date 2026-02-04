import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Box,
} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { DocsComponents, DocsExample } from 'src/components'

const InputGroup = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/text-field/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Input Group</Typography>} />
          <CardContent>
            <DocsExample href="components/text-field#input-adornments">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  label="Username"
                  slotProps={{
                    input: {
                      startAdornment: <InputAdornment position="start">@</InputAdornment>,
                    },
                  }}
                />
                <TextField
                  label="Email"
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">@example.com</InputAdornment>,
                    },
                  }}
                />
                <TextField
                  label="Website"
                  slotProps={{
                    input: {
                      startAdornment: <InputAdornment position="start">https://</InputAdornment>,
                    },
                  }}
                />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Input Group{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  With icons
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/text-field#icons">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  label="Username"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                <TextField
                  label="Email"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                <TextField
                  label="Amount"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <AttachMoneyIcon />
                        </InputAdornment>
                      ),
                      endAdornment: <InputAdornment position="end">.00</InputAdornment>,
                    },
                  }}
                />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Input Group{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Sizes
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/text-field#sizes">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  size="small"
                  label="Small"
                  slotProps={{
                    input: {
                      startAdornment: <InputAdornment position="start">@</InputAdornment>,
                    },
                  }}
                />
                <TextField
                  label="Normal"
                  slotProps={{
                    input: {
                      startAdornment: <InputAdornment position="start">@</InputAdornment>,
                    },
                  }}
                />
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default InputGroup
