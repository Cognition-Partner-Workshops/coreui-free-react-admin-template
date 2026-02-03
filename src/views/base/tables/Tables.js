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

const Tables = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Table" subheader="Basic example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Using the most basic table markup, here&apos;s how tables look in Material UI.
            </Typography>
            <TableContainer component={Paper} variant="outlined">
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
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Table" subheader="Striped rows" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use alternating row colors for better readability.
            </Typography>
            <TableContainer component={Paper} variant="outlined">
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
                  <TableRow sx={{ '&:nth-of-type(odd)': { bgcolor: 'action.hover' } }}>
                    <TableCell>2</TableCell>
                    <TableCell>Jacob</TableCell>
                    <TableCell>Thornton</TableCell>
                    <TableCell>@fat</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:nth-of-type(odd)': { bgcolor: 'action.hover' } }}>
                    <TableCell>3</TableCell>
                    <TableCell colSpan={2}>Larry the Bird</TableCell>
                    <TableCell>@twitter</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Table" subheader="Hoverable rows" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add hover state on table rows for better interactivity.
            </Typography>
            <TableContainer component={Paper} variant="outlined">
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
                  <TableRow hover>
                    <TableCell>1</TableCell>
                    <TableCell>Mark</TableCell>
                    <TableCell>Otto</TableCell>
                    <TableCell>@mdo</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>2</TableCell>
                    <TableCell>Jacob</TableCell>
                    <TableCell>Thornton</TableCell>
                    <TableCell>@fat</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>3</TableCell>
                    <TableCell colSpan={2}>Larry the Bird</TableCell>
                    <TableCell>@twitter</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Table" subheader="Dense table" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use size=&quot;small&quot; for a more compact table.
            </Typography>
            <TableContainer component={Paper} variant="outlined">
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
                    <TableCell colSpan={2}>Larry the Bird</TableCell>
                    <TableCell>@twitter</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Tables
