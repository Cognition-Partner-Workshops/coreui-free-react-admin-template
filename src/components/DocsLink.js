import PropTypes from 'prop-types'
import React from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const DocsLink = (props) => {
  const { href, name, text, ...rest } = props

  const _href = name ? `https://coreui.io/react/docs/components/${name}` : href

  return (
    <Box sx={{ float: 'right' }}>
      <Link
        {...rest}
        href={_href}
        rel="noreferrer noopener"
        target="_blank"
        underline="hover"
      >
        <Typography variant="caption" color="text.secondary">
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
