import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

import { DocsExample } from 'src/components'

const Toasts = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Toasts" />
      <CardContent>
        <DocsExample href="components/toast">
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={() => setOpen(true)}>
              Show Toast
            </Button>
          </Stack>
          <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
            <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
              This is a success message!
            </Alert>
          </Snackbar>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Toasts
