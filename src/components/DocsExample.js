import PropTypes from 'prop-types'
import React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Link from '@mui/material/Link'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import CodeIcon from '@mui/icons-material/Code'

const DocsExample = (props) => {
  const { children, href, tabContentClassName } = props

  const _href = `https://coreui.io/react/docs/${href}`

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={0}>
          <Tab icon={<PlayArrowIcon />} iconPosition="start" label="Preview" />
          <Tab
            icon={<CodeIcon />}
            iconPosition="start"
            label="Code"
            component={Link}
            href={_href}
            target="_blank"
          />
        </Tabs>
      </Box>
      <Box
        sx={{ p: 3, border: 1, borderTop: 0, borderColor: 'divider', borderRadius: '0 0 4px 4px' }}
      >
        {children}
      </Box>
    </Box>
  )
}

DocsExample.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  tabContentClassName: PropTypes.string,
}

export default React.memo(DocsExample)
