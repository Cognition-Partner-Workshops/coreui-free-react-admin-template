import PropTypes from 'prop-types'
import React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

const DocsLink = (props) => {
  const { href, name, text, ...rest } = props

  const _href = name ? `https://mui.com/material-ui/react-${name}/` : href

  return (
    <Box sx={{ float: 'right' }}>
      <Link
        {...rest}
        href={_href}
        rel="noreferrer noopener"
        target="_blank"
        sx={{ color: 'text.secondary', fontSize: '0.875rem' }}
      >
        {text || 'docs'}
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
