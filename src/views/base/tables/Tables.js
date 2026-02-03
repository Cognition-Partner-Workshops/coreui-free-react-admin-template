import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
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
          <CardHeader title={<strong>MUI Table</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Tables display sets of data. They can be fully customized.
            </Typography>
            <DocsExample href="react-table">
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
                <strong>MUI Table</strong> <Typography component="span">Striped Rows</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use alternating row colors for better readability.
            </Typography>
            <DocsExample href="react-table#striped-rows">
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
                    {[1, 2, 3].map((row) => (
                      <TableRow
                        key={row}
                        sx={{ '&:nth-of-type(odd)': { bgcolor: 'action.hover' } }}
                      >
                        <TableCell>{row}</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
                        <TableCell>Cell</TableCell>
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
