import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { DocsComponents, DocsExample } from 'src/components'

const Tables = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/table/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Table{' '}
                <Typography component="span" variant="body2">
                  Basic example
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Using the most basic table markup.
            </Typography>
            <DocsExample href="components/table">
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Class</TableCell>
                      <TableCell>Heading</TableCell>
                      <TableCell>Heading</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Mark</TableCell>
                      <TableCell>Otto</TableCell>
                      <TableCell>@mdo</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Jacob</TableCell>
                      <TableCell>Thornton</TableCell>
                      <TableCell>@fat</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>Larry the Bird</TableCell>
                      <TableCell colSpan={2}>@twitter</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Table{' '}
                <Typography component="span" variant="body2">
                  Variants
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use contextual colors to style tables.
            </Typography>
            <DocsExample href="components/table#variants">
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Class</TableCell>
                      <TableCell>Heading</TableCell>
                      <TableCell>Heading</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Default</TableCell>
                      <TableCell>Cell</TableCell>
                      <TableCell>Cell</TableCell>
                    </TableRow>
                    <TableRow sx={{ bgcolor: 'primary.light' }}>
                      <TableCell>Primary</TableCell>
                      <TableCell>Cell</TableCell>
                      <TableCell>Cell</TableCell>
                    </TableRow>
                    <TableRow sx={{ bgcolor: 'secondary.light' }}>
                      <TableCell>Secondary</TableCell>
                      <TableCell>Cell</TableCell>
                      <TableCell>Cell</TableCell>
                    </TableRow>
                    <TableRow sx={{ bgcolor: 'success.light' }}>
                      <TableCell>Success</TableCell>
                      <TableCell>Cell</TableCell>
                      <TableCell>Cell</TableCell>
                    </TableRow>
                    <TableRow sx={{ bgcolor: 'error.light' }}>
                      <TableCell>Danger</TableCell>
                      <TableCell>Cell</TableCell>
                      <TableCell>Cell</TableCell>
                    </TableRow>
                    <TableRow sx={{ bgcolor: 'warning.light' }}>
                      <TableCell>Warning</TableCell>
                      <TableCell>Cell</TableCell>
                      <TableCell>Cell</TableCell>
                    </TableRow>
                    <TableRow sx={{ bgcolor: 'info.light' }}>
                      <TableCell>Info</TableCell>
                      <TableCell>Cell</TableCell>
                      <TableCell>Cell</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Table{' '}
                <Typography component="span" variant="body2">
                  Striped rows
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/table#striped-rows">
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Class</TableCell>
                      <TableCell>Heading</TableCell>
                      <TableCell>Heading</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow sx={{ '&:nth-of-type(odd)': { bgcolor: 'action.hover' } }}>
                      <TableCell>1</TableCell>
                      <TableCell>Mark</TableCell>
                      <TableCell>Otto</TableCell>
                      <TableCell>@mdo</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Jacob</TableCell>
                      <TableCell>Thornton</TableCell>
                      <TableCell>@fat</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:nth-of-type(odd)': { bgcolor: 'action.hover' } }}>
                      <TableCell>3</TableCell>
                      <TableCell>Larry</TableCell>
                      <TableCell>the Bird</TableCell>
                      <TableCell>@twitter</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Table{' '}
                <Typography component="span" variant="body2">
                  Hoverable rows
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/table#hoverable-rows">
              <TableContainer component={Paper}>
                <Table sx={{ '& tbody tr:hover': { bgcolor: 'action.hover' } }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Class</TableCell>
                      <TableCell>Heading</TableCell>
                      <TableCell>Heading</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Mark</TableCell>
                      <TableCell>Otto</TableCell>
                      <TableCell>@mdo</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Jacob</TableCell>
                      <TableCell>Thornton</TableCell>
                      <TableCell>@fat</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>Larry the Bird</TableCell>
                      <TableCell colSpan={2}>@twitter</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Table{' '}
                <Typography component="span" variant="body2">
                  Small tables
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/table#small-tables">
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Class</TableCell>
                      <TableCell>Heading</TableCell>
                      <TableCell>Heading</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Mark</TableCell>
                      <TableCell>Otto</TableCell>
                      <TableCell>@mdo</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Jacob</TableCell>
                      <TableCell>Thornton</TableCell>
                      <TableCell>@fat</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>Larry the Bird</TableCell>
                      <TableCell colSpan={2}>@twitter</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Tables
