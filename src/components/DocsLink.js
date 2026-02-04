import PropTypes from 'prop-types'
import React from 'react'
import { Box, Link, Typography } from '@mui/material'

const DocsLink = (props) => {
  const { href, name, text, ...rest } = props

  const _href = name ? `https://mui.com/material-ui/${name}` : href

  return (
    <Box sx={{ float: 'right' }}>
      <Link
        {...rest}
        href={_href}
        rel="noreferrer noopener"
        target="_blank"
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Typography variant="body2" color="text.secondary">
          {text || 'docs'}
        </Typography>
      </Link>
    </Box>
  )
}

DocsLink.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
}

export default React.memo(DocsLink)
