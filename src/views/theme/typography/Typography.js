import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import MuiTypography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { DocsLink } from 'src/components'

const Typography = () => {
  return (
    <>
      <Card sx={{ mb: 4 }}>
        <CardHeader
          title="Headings"
          action={<DocsLink href="https://mui.com/material-ui/react-typography/" />}
        />
        <CardContent>
          <MuiTypography paragraph>
            Documentation and examples for Material UI typography, including global settings,
            headings, body text, lists, and more.
          </MuiTypography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Heading</TableCell>
                <TableCell>Example</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <code>&lt;Typography variant=&quot;h1&quot;&gt;</code>
                </TableCell>
                <TableCell>
                  <MuiTypography variant="h1" sx={{ fontSize: '2.5rem' }}>
                    h1. MUI heading
                  </MuiTypography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>&lt;Typography variant=&quot;h2&quot;&gt;</code>
                </TableCell>
                <TableCell>
                  <MuiTypography variant="h2" sx={{ fontSize: '2rem' }}>
                    h2. MUI heading
                  </MuiTypography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>&lt;Typography variant=&quot;h3&quot;&gt;</code>
                </TableCell>
                <TableCell>
                  <MuiTypography variant="h3" sx={{ fontSize: '1.75rem' }}>
                    h3. MUI heading
                  </MuiTypography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>&lt;Typography variant=&quot;h4&quot;&gt;</code>
                </TableCell>
                <TableCell>
                  <MuiTypography variant="h4" sx={{ fontSize: '1.5rem' }}>
                    h4. MUI heading
                  </MuiTypography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>&lt;Typography variant=&quot;h5&quot;&gt;</code>
                </TableCell>
                <TableCell>
                  <MuiTypography variant="h5" sx={{ fontSize: '1.25rem' }}>
                    h5. MUI heading
                  </MuiTypography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>&lt;Typography variant=&quot;h6&quot;&gt;</code>
                </TableCell>
                <TableCell>
                  <MuiTypography variant="h6" sx={{ fontSize: '1rem' }}>
                    h6. MUI heading
                  </MuiTypography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4 }}>
        <CardHeader title="Typography Variants" />
        <CardContent>
          <MuiTypography paragraph>
            MUI provides various typography variants for different use cases.
          </MuiTypography>
          <Box sx={{ '& > *': { mb: 2 } }}>
            <MuiTypography variant="h1" sx={{ fontSize: '2.5rem' }}>
              h1. MUI heading
            </MuiTypography>
            <MuiTypography variant="h2" sx={{ fontSize: '2rem' }}>
              h2. MUI heading
            </MuiTypography>
            <MuiTypography variant="h3" sx={{ fontSize: '1.75rem' }}>
              h3. MUI heading
            </MuiTypography>
            <MuiTypography variant="h4" sx={{ fontSize: '1.5rem' }}>
              h4. MUI heading
            </MuiTypography>
            <MuiTypography variant="h5" sx={{ fontSize: '1.25rem' }}>
              h5. MUI heading
            </MuiTypography>
            <MuiTypography variant="h6" sx={{ fontSize: '1rem' }}>
              h6. MUI heading
            </MuiTypography>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4 }}>
        <CardHeader title="Body Text Variants" />
        <CardContent>
          <MuiTypography paragraph>
            Use body1 and body2 variants for paragraph text with different sizes.
          </MuiTypography>
          <Box sx={{ '& > *': { mb: 2 } }}>
            <MuiTypography variant="body1">
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
              tenetur unde suscipit, quam beatae rerum inventore consectetur.
            </MuiTypography>
            <MuiTypography variant="body2">
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
              tenetur unde suscipit, quam beatae rerum inventore consectetur.
            </MuiTypography>
            <MuiTypography variant="subtitle1">
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </MuiTypography>
            <MuiTypography variant="subtitle2">
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </MuiTypography>
            <MuiTypography variant="caption" display="block">
              caption text
            </MuiTypography>
            <MuiTypography variant="overline" display="block">
              overline text
            </MuiTypography>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4 }}>
        <CardHeader title="Inline Text Elements" />
        <CardContent>
          <MuiTypography paragraph>
            Various inline text styling options are available through standard HTML elements.
          </MuiTypography>
          <Box sx={{ '& > p': { mb: 1 } }}>
            <MuiTypography>
              You can use the mark tag to <mark>highlight</mark> text.
            </MuiTypography>
            <MuiTypography>
              <del>This line of text is meant to be treated as deleted text.</del>
            </MuiTypography>
            <MuiTypography>
              <s>This line of text is meant to be treated as no longer accurate.</s>
            </MuiTypography>
            <MuiTypography>
              <ins>This line of text is meant to be treated as an addition to the document.</ins>
            </MuiTypography>
            <MuiTypography>
              <u>This line of text will render as underlined</u>
            </MuiTypography>
            <MuiTypography variant="caption" display="block">
              This line of text is meant to be treated as fine print.
            </MuiTypography>
            <MuiTypography>
              <strong>This line rendered as bold text.</strong>
            </MuiTypography>
            <MuiTypography>
              <em>This line rendered as italicized text.</em>
            </MuiTypography>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4 }}>
        <CardHeader title="Description List" />
        <CardContent>
          <MuiTypography paragraph>
            Use Grid components to create aligned description lists.
          </MuiTypography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <MuiTypography fontWeight="bold">Description lists</MuiTypography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <MuiTypography>A description list is perfect for defining terms.</MuiTypography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <MuiTypography fontWeight="bold">Euismod</MuiTypography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <MuiTypography paragraph>
                Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
              </MuiTypography>
              <MuiTypography>Donec id elit non mi porta gravida at eget metus.</MuiTypography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <MuiTypography fontWeight="bold">Malesuada porta</MuiTypography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <MuiTypography>Etiam porta sem malesuada magna mollis euismod.</MuiTypography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <MuiTypography fontWeight="bold" noWrap>
                Truncated term is truncated
              </MuiTypography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <MuiTypography>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus.
              </MuiTypography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default Typography
