import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Popover from '@mui/material/Popover'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const PopoverButton = ({ title, content, placement, color = 'secondary', size, children }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const getAnchorOrigin = () => {
    switch (placement) {
      case 'top':
        return { vertical: 'top', horizontal: 'center' }
      case 'bottom':
        return { vertical: 'bottom', horizontal: 'center' }
      case 'left':
        return { vertical: 'center', horizontal: 'left' }
      case 'right':
      default:
        return { vertical: 'center', horizontal: 'right' }
    }
  }

  const getTransformOrigin = () => {
    switch (placement) {
      case 'top':
        return { vertical: 'bottom', horizontal: 'center' }
      case 'bottom':
        return { vertical: 'top', horizontal: 'center' }
      case 'left':
        return { vertical: 'center', horizontal: 'right' }
      case 'right':
      default:
        return { vertical: 'center', horizontal: 'left' }
    }
  }

  return (
    <>
      <Button variant="contained" color={color} size={size} onClick={handleClick}>
        {children}
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={getAnchorOrigin()}
        transformOrigin={getTransformOrigin()}
      >
        <Box sx={{ p: 2, maxWidth: 300 }}>
          {title && (
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              {title}
            </Typography>
          )}
          <Typography variant="body2">{content}</Typography>
        </Box>
      </Popover>
    </>
  )
}

const Popovers = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/popover/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Popover{' '}
                <Typography component="span" variant="body2">
                  Basic example
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/popover">
              <PopoverButton
                title="Popover title"
                content="And here's some amazing content. It's very engaging. Right?"
                placement="right"
                color="error"
                size="large"
              >
                Click to toggle popover
              </PopoverButton>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Popover{' '}
                <Typography component="span" variant="body2">
                  Four directions
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Four options are available: top, right, bottom, and left aligned.
            </Typography>
            <DocsExample href="components/popover#four-directions">
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <PopoverButton
                  content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  placement="top"
                >
                  Popover on top
                </PopoverButton>
                <PopoverButton
                  content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  placement="right"
                >
                  Popover on right
                </PopoverButton>
                <PopoverButton
                  content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  placement="bottom"
                >
                  Popover on bottom
                </PopoverButton>
                <PopoverButton
                  content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  placement="left"
                >
                  Popover on left
                </PopoverButton>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Popovers
