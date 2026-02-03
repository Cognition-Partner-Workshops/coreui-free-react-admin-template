import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import ConstructionIcon from '@mui/icons-material/Construction'

const PlaceholderView = ({ title }) => (
  <Card>
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 8,
        }}
      >
        <ConstructionIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          This component is being migrated to Material UI.
        </Typography>
      </Box>
    </CardContent>
  </Card>
)

PlaceholderView.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PlaceholderView
