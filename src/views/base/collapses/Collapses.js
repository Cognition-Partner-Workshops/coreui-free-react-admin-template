import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

const Collapses = () => {
  const [visible, setVisible] = useState(false)
  const [visibleHorizontal, setVisibleHorizontal] = useState(false)
  const [visibleA, setVisibleA] = useState(false)
  const [visibleB, setVisibleB] = useState(false)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/collapse/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Collapse</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You can use a link or a button component.
            </Typography>
            <DocsExample href="components/collapse">
              <Button
                variant="contained"
                color="primary"
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setVisible(!visible)
                }}
                sx={{ mr: 1 }}
              >
                Link
              </Button>
              <Button variant="contained" color="primary" onClick={() => setVisible(!visible)}>
                Button
              </Button>
              <Collapse in={visible}>
                <Card sx={{ mt: 3 }}>
                  <CardContent>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                    anderson cred nesciunt sapiente ea proident.
                  </CardContent>
                </Card>
              </Collapse>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Collapse{' '}
                <Typography component="span" variant="body2">
                  Horizontal
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You can use a link or a button component.
            </Typography>
            <DocsExample href="components/collapse#horizontal">
              <Button
                variant="contained"
                color="primary"
                onClick={() => setVisibleHorizontal(!visibleHorizontal)}
                aria-expanded={visibleHorizontal}
                sx={{ mb: 3 }}
              >
                Button
              </Button>
              <Box sx={{ minHeight: '120px' }}>
                <Collapse in={visibleHorizontal} orientation="horizontal">
                  <Card sx={{ width: '300px' }}>
                    <CardContent>
                      This is some placeholder content for a horizontal collapse. It&#39;s hidden by
                      default and shown when triggered.
                    </CardContent>
                  </Card>
                </Collapse>
              </Box>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Collapse{' '}
                <Typography component="span" variant="body2">
                  multi target
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              A <code>&lt;Button&gt;</code> can show and hide multiple elements.
            </Typography>
            <DocsExample href="components/collapse#multiple-targets">
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Button variant="contained" color="primary" onClick={() => setVisibleA(!visibleA)}>
                  Toggle first element
                </Button>
                <Button variant="contained" color="primary" onClick={() => setVisibleB(!visibleB)}>
                  Toggle second element
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setVisibleA(!visibleA)
                    setVisibleB(!visibleB)
                  }}
                >
                  Toggle both elements
                </Button>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Collapse in={visibleA}>
                    <Card sx={{ mt: 3 }}>
                      <CardContent>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident.
                      </CardContent>
                    </Card>
                  </Collapse>
                </Grid>
                <Grid item xs={6}>
                  <Collapse in={visibleB}>
                    <Card sx={{ mt: 3 }}>
                      <CardContent>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident.
                      </CardContent>
                    </Card>
                  </Collapse>
                </Grid>
              </Grid>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Collapses
