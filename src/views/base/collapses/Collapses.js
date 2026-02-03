import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
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
          <CardHeader title={<strong>MUI Collapse</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You can use a link or a button component to toggle the collapse.
            </Typography>
            <DocsExample href="react-collapse">
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Button variant="contained" onClick={() => setVisible(!visible)}>
                  Toggle
                </Button>
              </Box>
              <Collapse in={visible}>
                <Card sx={{ mt: 2 }}>
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
              <>
                <strong>MUI Collapse</strong> <Typography component="span">Horizontal</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The collapse component supports horizontal collapsing with the orientation prop.
            </Typography>
            <DocsExample href="react-collapse#horizontal">
              <Button
                variant="contained"
                onClick={() => setVisibleHorizontal(!visibleHorizontal)}
                sx={{ mb: 2 }}
              >
                Toggle Horizontal
              </Button>
              <Box sx={{ minHeight: 120, display: 'flex' }}>
                <Collapse in={visibleHorizontal} orientation="horizontal">
                  <Card sx={{ width: 300 }}>
                    <CardContent>
                      This is some placeholder content for a horizontal collapse. It&apos;s hidden
                      by default and shown when triggered.
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
              <>
                <strong>MUI Collapse</strong> <Typography component="span">Multi Target</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              A Button can show and hide multiple elements.
            </Typography>
            <DocsExample href="react-collapse#multiple-targets">
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Button variant="contained" onClick={() => setVisibleA(!visibleA)}>
                  Toggle first
                </Button>
                <Button variant="contained" onClick={() => setVisibleB(!visibleB)}>
                  Toggle second
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    setVisibleA(!visibleA)
                    setVisibleB(!visibleB)
                  }}
                >
                  Toggle both
                </Button>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Collapse in={visibleA}>
                    <Card>
                      <CardContent>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid.
                      </CardContent>
                    </Card>
                  </Collapse>
                </Grid>
                <Grid item xs={6}>
                  <Collapse in={visibleB}>
                    <Card>
                      <CardContent>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid.
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
