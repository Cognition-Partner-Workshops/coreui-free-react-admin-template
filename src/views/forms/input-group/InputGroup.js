import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import PersonIcon from '@mui/icons-material/Person'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

const InputGroup = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Input Group" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Easily extend form controls by adding text, buttons, or button groups on either side
              of textual inputs.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  fullWidth
                  placeholder="Username"
                  slotProps={{
                    input: {
                      startAdornment: <InputAdornment position="start">@</InputAdornment>,
                    },
                  }}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  placeholder="Recipient's username"
                  slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">@example.com</InputAdornment>,
                    },
                  }}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Your vanity URL"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">https://example.com/users/</InputAdornment>
                      ),
                    },
                  }}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  slotProps={{
                    input: {
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                      endAdornment: <InputAdornment position="end">.00</InputAdornment>,
                    },
                  }}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">With textarea</InputAdornment>
                      ),
                    },
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Input Group" subheader="With Icons" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use icons as input adornments.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  placeholder="Username"
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
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  placeholder="Amount"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <AttachMoneyIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Input Group" subheader="Sizing" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add the relative form sizing props to the TextField.
            </Typography>
            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Small"
                  slotProps={{
                    input: {
                      startAdornment: <InputAdornment position="start">Small</InputAdornment>,
                    },
                  }}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  placeholder="Default"
                  slotProps={{
                    input: {
                      startAdornment: <InputAdornment position="start">Default</InputAdornment>,
                    },
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default InputGroup
