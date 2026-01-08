import PropTypes from 'prop-types'
import React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Paper from '@mui/material/Paper'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import CodeIcon from '@mui/icons-material/Code'

const DocsExample = (props) => {
  const { children, href, tabContentClassName } = props

  const _href = `https://mui.com/material-ui/${href || ''}`

  return (
    <Box sx={{ mb: 3 }}>
      <Tabs value={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tab
          icon={<PlayArrowIcon />}
          iconPosition="start"
          label="Preview"
          sx={{ textTransform: 'none' }}
        />
        <Tab
          icon={<CodeIcon />}
          iconPosition="start"
          label="Code"
          component="a"
          href={_href}
          target="_blank"
          sx={{ textTransform: 'none' }}
        />
      </Tabs>
      <Paper
        variant="outlined"
        sx={{
          p: 3,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderTop: 0,
        }}
        className={tabContentClassName || ''}
      >
        {children}
      </Paper>
    </Box>
  )
}

DocsExample.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  tabContentClassName: PropTypes.string,
}

export default React.memo(DocsExample)
