import PropTypes from 'prop-types'
import React from 'react'
import { Box, Typography, Button, Paper, Grid, alpha, useTheme } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

import ComponentsImg from 'src/assets/images/components.webp'

const DocsComponents = (props) => {
  const theme = useTheme()

  return (
    <Paper
      elevation={0}
      sx={{
        mb: 3,
        p: 3,
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
        border: 2,
        borderColor: 'primary.main',
        borderRadius: 2,
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid size={{ xs: 12, xl: 'auto' }} sx={{ display: { xs: 'none', xl: 'block' } }}>
          <Box
            component="img"
            src={ComponentsImg}
            alt="MUI Components"
            sx={{ width: 160, height: 160 }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: true }}>
          <Typography variant="body1" color="text.primary">
            Our Admin Panel isn&apos;t just a mix of third-party components. It&apos;s{' '}
            <strong>
              the only open-source React dashboard built on a professional, enterprise-grade UI
              Components Library
            </strong>
            . This component is part of this library, and we present only the basic usage of it
            here. To explore extended examples, detailed API documentation, and customization
            options, refer to our docs.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 'auto' }}>
          <Button
            variant="contained"
            color="primary"
            href={`https://mui.com/material-ui/${props.href || ''}`}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<OpenInNewIcon />}
            sx={{ whiteSpace: 'nowrap' }}
          >
            Explore Documentation
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

DocsComponents.propTypes = {
  href: PropTypes.string,
}

export default DocsComponents
