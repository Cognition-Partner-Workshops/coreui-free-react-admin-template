import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const InputGroup = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="forms/input-group/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Input group</strong> <small>Basic example</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use MUI TextField with InputAdornment for input groups.
            </Typography>
            <DocsExample href="forms/input-group">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  InputProps={{
                    startAdornment: <InputAdornment position="start">@</InputAdornment>,
                  }}
                  placeholder="Username"
                  fullWidth
                />
                <TextField
                  InputProps={{
                    endAdornment: <InputAdornment position="end">@example.com</InputAdornment>,
                  }}
                  fullWidth
                />
                <TextField
                  label="Your vanity URL"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">https://example.com/users/</InputAdornment>
                    ),
                  }}
                  fullWidth
                />
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
                <strong>React Input group</strong> <small>Sizing</small>
              </>
            }
          />
          <CardContent>
            <DocsExample href="forms/input-group#sizing">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">Small</InputAdornment>,
                  }}
                  fullWidth
                />
                <TextField
                  InputProps={{
                    startAdornment: <InputAdornment position="start">Default</InputAdornment>,
                  }}
                  fullWidth
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
