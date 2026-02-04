import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import { DocsComponents, DocsExample } from 'src/components'

const Tables = () => {
  const rows = [
    { id: 1, name: 'Mark', lastName: 'Otto', handle: '@mdo' },
    { id: 2, name: 'Jacob', lastName: 'Thornton', handle: '@fat' },
    { id: 3, name: 'Larry', lastName: 'the Bird', handle: '@twitter' },
  ]

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/table/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">Basic Table</Typography>} />
          <CardContent>
            <DocsExample href="components/table">
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>First</TableCell>
                      <TableCell>Last</TableCell>
                      <TableCell>Handle</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.lastName}</TableCell>
                        <TableCell>{row.handle}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Table{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Striped rows
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/table#striped-rows">
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>First</TableCell>
                      <TableCell>Last</TableCell>
                      <TableCell>Handle</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow
                        key={row.id}
                        sx={{ bgcolor: index % 2 === 0 ? 'action.hover' : 'transparent' }}
                      >
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.lastName}</TableCell>
                        <TableCell>{row.handle}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Table{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Hoverable rows
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/table#hoverable-rows">
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>First</TableCell>
                      <TableCell>Last</TableCell>
                      <TableCell>Handle</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.lastName}</TableCell>
                        <TableCell>{row.handle}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Table{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Small table
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <DocsExample href="components/table#small-table">
              <TableContainer component={Paper} variant="outlined">
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>First</TableCell>
                      <TableCell>Last</TableCell>
                      <TableCell>Handle</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.lastName}</TableCell>
                        <TableCell>{row.handle}</TableCell>
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
