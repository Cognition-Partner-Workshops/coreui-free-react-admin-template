import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const ButtonGroups = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/button-group/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Button Group</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The ButtonGroup component can be used to group related buttons.
            </Typography>
            <DocsExample href="react-button-group">
              <ButtonGroup variant="contained">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
              </ButtonGroup>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Button Group</strong> <Typography component="span">Outlined</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the outlined variant for a lighter button group style.
            </Typography>
            <DocsExample href="react-button-group#basic-button-group">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <ButtonGroup variant="outlined" color="primary">
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined" color="secondary">
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup variant="outlined" color="success">
                  <Button>Left</Button>
                  <Button>Middle</Button>
                  <Button>Right</Button>
                </ButtonGroup>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Button Group</strong> <Typography component="span">Vertical</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the orientation prop to create vertical button groups.
            </Typography>
            <DocsExample href="react-button-group#vertical-group">
              <ButtonGroup orientation="vertical" variant="contained">
                <Button>Top</Button>
                <Button>Middle</Button>
                <Button>Bottom</Button>
              </ButtonGroup>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>MUI Button Group</strong> <Typography component="span">Sizes</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the size prop for different button group sizes.
            </Typography>
            <DocsExample href="react-button-group#sizes">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <ButtonGroup size="small" variant="contained">
                  <Button>Small</Button>
                  <Button>Small</Button>
                  <Button>Small</Button>
                </ButtonGroup>
                <ButtonGroup size="medium" variant="contained">
                  <Button>Medium</Button>
                  <Button>Medium</Button>
                  <Button>Medium</Button>
                </ButtonGroup>
                <ButtonGroup size="large" variant="contained">
                  <Button>Large</Button>
                  <Button>Large</Button>
                  <Button>Large</Button>
                </ButtonGroup>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ButtonGroups
