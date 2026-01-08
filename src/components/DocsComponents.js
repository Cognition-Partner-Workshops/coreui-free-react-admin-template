import PropTypes from 'prop-types'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import ComponentsImg from 'src/assets/images/components.webp'

const DocsComponents = (props) => (
  <Box
    sx={{
      backgroundColor: 'primary.light',
      opacity: 0.9,
      border: 2,
      borderColor: 'primary.main',
      borderRadius: 1,
      mb: 4,
      p: 3,
    }}
  >
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} xl="auto" sx={{ display: { xs: 'none', xl: 'block' } }}>
        <Box
          component="img"
          src={ComponentsImg}
          alt="MUI Components"
          sx={{ width: 160, height: 160 }}
        />
      </Grid>
      <Grid item xs={12} md>
        <Typography variant="body1">
          Our Admin Panel is built on{' '}
          <strong>Material UI - a professional, enterprise-grade UI Components Library</strong>.
          This component is part of this library, and we present only the basic usage of it here. To
          explore extended examples, detailed API documentation, and customization options, refer to
          our docs.
        </Typography>
      </Grid>
      <Grid item xs={12} md="auto">
        <Button
          variant="contained"
          color="primary"
          href={`https://mui.com/material-ui/${props.href || ''}`}
          target="_blank"
          rel="noopener noreferrer"
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
