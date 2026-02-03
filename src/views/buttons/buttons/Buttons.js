import React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'

const Buttons = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Buttons
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Use MUI custom button styles for actions in forms, dialogs, and more.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Contained Buttons
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button variant="contained">Primary</Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
            <Button variant="contained" color="warning">
              Warning
            </Button>
            <Button variant="contained" color="info">
              Info
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Outlined Buttons
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button variant="outlined">Primary</Button>
            <Button variant="outlined" color="secondary">
              Secondary
            </Button>
            <Button variant="outlined" color="success">
              Success
            </Button>
            <Button variant="outlined" color="error">
              Error
            </Button>
            <Button variant="outlined" color="warning">
              Warning
            </Button>
            <Button variant="outlined" color="info">
              Info
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Text Buttons
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button>Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="error">Error</Button>
            <Button color="warning">Warning</Button>
            <Button color="info">Info</Button>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Button Sizes
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="medium">
              Medium
            </Button>
            <Button variant="contained" size="large">
              Large
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Buttons with Icons
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
            <IconButton color="primary">
              <DeleteIcon />
            </IconButton>
            <IconButton color="secondary">
              <SendIcon />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default Buttons
