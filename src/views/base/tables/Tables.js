import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { DocsExample } from 'src/components'

const Tables = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Tables" />
      <CardContent>
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
  )
}

export default Tables
