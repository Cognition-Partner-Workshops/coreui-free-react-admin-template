import PropTypes from 'prop-types'
import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import ComponentsImg from 'src/assets/images/components.webp'

const DocsComponents = (props) => (
  <Box
    sx={{
      bgcolor: 'primary.light',
      opacity: 0.9,
      border: 2,
      borderColor: 'primary.main',
      borderRadius: 1,
      mb: 4,
    }}
  >
    <Grid container alignItems="center" sx={{ p: 3 }}>
      <Grid size={{ xs: 12, xl: 'auto' }} sx={{ display: { xs: 'none', xl: 'block' }, p: 0 }}>
        <Box
          component="img"
          src={ComponentsImg}
          sx={{ width: 160, height: 160 }}
          alt="CoreUI PRO hexagon"
        />
      </Grid>
      <Grid size={{ xs: 12, md: true }} sx={{ px: { lg: 4 } }}>
        <Typography>
          Our Admin Panel isn't just a mix of third-party components. It's{' '}
          <strong>
            the only open-source React dashboard built on a professional, enterprise-grade UI
            Components Library
          </strong>
          . This component is part of this library, and we present only the basic usage of it here.
          To explore extended examples, detailed API documentation, and customization options, refer
          to our docs.
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 'auto' }} sx={{ mt: { xs: 3, lg: 0 } }}>
        <Button
          variant="contained"
          color="primary"
          href={`https://coreui.io/react/docs/${props.href}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ whiteSpace: 'nowrap' }}
        >
          Explore Documentation
        </Button>
      </Grid>
    </Grid>
  </Box>
)

DocsComponents.propTypes = {
  href: PropTypes.string,
}

export default DocsComponents
