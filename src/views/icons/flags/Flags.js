import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Flags = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>Flag Icons</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              For flag icons, consider using a dedicated flag icon library like{' '}
              <a href="https://flagicons.lipis.dev/" target="_blank" rel="noopener noreferrer">
                flag-icons
              </a>{' '}
              or{' '}
              <a
                href="https://www.npmjs.com/package/react-world-flags"
                target="_blank"
                rel="noopener noreferrer"
              >
                react-world-flags
              </a>
              .
            </Typography>
            <Box sx={{ p: 4, bgcolor: 'grey.100', borderRadius: 1, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Flag icons can be added by installing a flag icon library of your choice.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Flags
