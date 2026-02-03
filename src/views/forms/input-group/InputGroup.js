import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
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
          <CardHeader title={<strong>MUI Input Adornments</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Input adornments allow you to add a prefix, suffix, or an action to an input.
            </Typography>
            <DocsExample href="react-text-field#input-adornments">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
                <TextField
                  label="Username"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">@</InputAdornment>,
                  }}
                />
                <TextField
                  label="Email"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">@example.com</InputAdornment>,
                  }}
                />
                <TextField
                  label="Website"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">https://</InputAdornment>,
                  }}
                />
                <TextField
                  label="Amount"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    endAdornment: <InputAdornment position="end">.00</InputAdornment>,
                  }}
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
                <strong>MUI Input Adornments</strong>{' '}
                <Typography component="span">Sizing</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the size prop to change the size of the input.
            </Typography>
            <DocsExample href="react-text-field#sizes">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
                <TextField
                  label="Small"
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">@</InputAdornment>,
                  }}
                />
                <TextField
                  label="Normal"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">@</InputAdornment>,
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
