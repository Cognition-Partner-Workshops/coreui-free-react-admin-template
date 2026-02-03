import React, { useEffect, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { DocsLink } from 'src/components'

const rgbToHex = (rgb) => {
  if (!rgb || rgb === 'rgb(255, 255, 255)') return '#ffffff'
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
  if (!match) return rgb
  const hex = (x) => ('0' + parseInt(x).toString(16)).slice(-2)
  return '#' + hex(match[1]) + hex(match[2]) + hex(match[3])
}

const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <Table size="small" ref={ref}>
      <TableBody>
        <TableRow>
          <TableCell sx={{ color: 'text.secondary' }}>HEX:</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>{rgbToHex(color)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ color: 'text.secondary' }}>RGB:</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>{color}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

const ThemeColor = ({ bgcolor, children }) => {
  return (
    <Grid item xs={12} sm={6} md={4} xl={2}>
      <Box
        sx={{
          bgcolor,
          width: '75%',
          borderRadius: 1,
          mb: 1,
          paddingTop: '75%',
        }}
      />
      {children}
      <ThemeView />
    </Grid>
  )
}

ThemeColor.propTypes = {
  children: PropTypes.node,
  bgcolor: PropTypes.string,
}

const Colors = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardHeader
        title="Theme colors"
        action={<DocsLink href="https://mui.com/material-ui/customization/palette/" />}
      />
      <CardContent>
        <Grid container spacing={3}>
          <ThemeColor bgcolor="primary.main">
            <Typography variant="subtitle2">Brand Primary Color</Typography>
          </ThemeColor>
          <ThemeColor bgcolor="secondary.main">
            <Typography variant="subtitle2">Brand Secondary Color</Typography>
          </ThemeColor>
          <ThemeColor bgcolor="success.main">
            <Typography variant="subtitle2">Brand Success Color</Typography>
          </ThemeColor>
          <ThemeColor bgcolor="error.main">
            <Typography variant="subtitle2">Brand Danger Color</Typography>
          </ThemeColor>
          <ThemeColor bgcolor="warning.main">
            <Typography variant="subtitle2">Brand Warning Color</Typography>
          </ThemeColor>
          <ThemeColor bgcolor="info.main">
            <Typography variant="subtitle2">Brand Info Color</Typography>
          </ThemeColor>
          <ThemeColor bgcolor="grey.100">
            <Typography variant="subtitle2">Brand Light Color</Typography>
          </ThemeColor>
          <ThemeColor bgcolor="grey.900">
            <Typography variant="subtitle2">Brand Dark Color</Typography>
          </ThemeColor>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Colors
