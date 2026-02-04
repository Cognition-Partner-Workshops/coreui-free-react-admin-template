import PropTypes from 'prop-types'
import React from 'react'
import { Box, Paper, Tabs, Tab, Link, useTheme } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import CodeIcon from '@mui/icons-material/Code'

const DocsExample = (props) => {
  const { children, href, tabContentClassName } = props
  const theme = useTheme()

  const _href = `https://mui.com/material-ui/${href || ''}`

  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        mb: 3,
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={0} aria-label="example tabs">
          <Tab
            icon={<PlayArrowIcon sx={{ fontSize: 18 }} />}
            iconPosition="start"
            label="Preview"
            sx={{ textTransform: 'none', minHeight: 48 }}
          />
          <Tab
            icon={<CodeIcon sx={{ fontSize: 18 }} />}
            iconPosition="start"
            label="Code"
            component={Link}
            href={_href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textTransform: 'none', minHeight: 48 }}
          />
        </Tabs>
      </Box>
      <Box
        sx={{
          p: 3,
          backgroundColor: theme.palette.mode === 'dark' ? 'background.paper' : 'grey.50',
        }}
        className={tabContentClassName}
      >
        {children}
      </Box>
    </Paper>
  )
}

DocsExample.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  tabContentClassName: PropTypes.string,
}

export default React.memo(DocsExample)
