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
              <>
                <strong>React Table</strong> <small>Basic example</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Using the most basic table with MUI Table component.
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
                      <TableCell colSpan={2}>Larry the Bird</TableCell>
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
              <>
                <strong>React Table</strong> <small>Striped rows</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use alternating row colors for better readability.
            </Typography>
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
                    {[1, 2, 3].map((row, index) => (
                      <TableRow
                        key={row}
                        sx={{ bgcolor: index % 2 === 0 ? 'action.hover' : 'transparent' }}
                      >
                        <TableCell>{row}</TableCell>
                        <TableCell>{['Mark', 'Jacob', 'Larry'][index]}</TableCell>
                        <TableCell>{['Otto', 'Thornton', 'the Bird'][index]}</TableCell>
                        <TableCell>{['@mdo', '@fat', '@twitter'][index]}</TableCell>
                      </TableRow>
                    ))}
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
              <>
                <strong>React Table</strong> <small>Hoverable rows</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add hover state on table rows.
            </Typography>
            <DocsExample href="components/table#hoverable-rows">
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
                    {[1, 2, 3].map((row, index) => (
                      <TableRow key={row} hover>
                        <TableCell>{row}</TableCell>
                        <TableCell>{['Mark', 'Jacob', 'Larry'][index]}</TableCell>
                        <TableCell>{['Otto', 'Thornton', 'the Bird'][index]}</TableCell>
                        <TableCell>{['@mdo', '@fat', '@twitter'][index]}</TableCell>
                      </TableRow>
                    ))}
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
