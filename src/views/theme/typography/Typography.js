import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { DocsLink } from 'src/components'

const TypographyView = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Headings <DocsLink href="https://mui.com/material-ui/react-typography/" />
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Documentation and examples for MUI typography, including headings, body text, and
              more.
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Variant</TableCell>
                  <TableCell>Example</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <code>h1</code>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h1" sx={{ fontSize: '2.5rem' }}>
                      h1. MUI heading
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>h2</code>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h2" sx={{ fontSize: '2rem' }}>
                      h2. MUI heading
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>h3</code>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h3" sx={{ fontSize: '1.75rem' }}>
                      h3. MUI heading
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>h4</code>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h4" sx={{ fontSize: '1.5rem' }}>
                      h4. MUI heading
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>h5</code>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h5" sx={{ fontSize: '1.25rem' }}>
                      h5. MUI heading
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <code>h6</code>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" sx={{ fontSize: '1rem' }}>
                      h6. MUI heading
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Typography Variants</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              MUI Typography component supports various variants for different text styles.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="h1" sx={{ fontSize: '2.5rem' }}>
                h1. MUI heading
              </Typography>
              <Typography variant="h2" sx={{ fontSize: '2rem' }}>
                h2. MUI heading
              </Typography>
              <Typography variant="h3" sx={{ fontSize: '1.75rem' }}>
                h3. MUI heading
              </Typography>
              <Typography variant="h4" sx={{ fontSize: '1.5rem' }}>
                h4. MUI heading
              </Typography>
              <Typography variant="h5" sx={{ fontSize: '1.25rem' }}>
                h5. MUI heading
              </Typography>
              <Typography variant="h6" sx={{ fontSize: '1rem' }}>
                h6. MUI heading
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Body Text</Typography>} />
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body1">
                Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography variant="body2">
                Body 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography variant="subtitle1">Subtitle 1 - Lorem ipsum dolor sit amet</Typography>
              <Typography variant="subtitle2">Subtitle 2 - Lorem ipsum dolor sit amet</Typography>
              <Typography variant="caption">Caption text</Typography>
              <Typography variant="overline">Overline text</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">Inline Text Elements</Typography>} />
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography>
                You can use the mark tag to{' '}
                <Box component="mark" sx={{ bgcolor: 'warning.light', px: 0.5 }}>
                  highlight
                </Box>{' '}
                text.
              </Typography>
              <Typography>
                <del>This line of text is meant to be treated as deleted text.</del>
              </Typography>
              <Typography>
                <s>This line of text is meant to be treated as no longer accurate.</s>
              </Typography>
              <Typography>
                <ins>This line of text is meant to be treated as an addition to the document.</ins>
              </Typography>
              <Typography>
                <u>This line of text will render as underlined</u>
              </Typography>
              <Typography variant="caption">
                This line of text is meant to be treated as fine print.
              </Typography>
              <Typography>
                <strong>This line rendered as bold text.</strong>
              </Typography>
              <Typography>
                <em>This line rendered as italicized text.</em>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default TypographyView
