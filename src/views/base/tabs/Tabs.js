import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { DocsComponents, DocsExample } from 'src/components'

function TabPanel(props) {
  const { children, value, index, ...other } = props
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const TabsDemo = () => {
  const [value1, setValue1] = useState(1)
  const [value2, setValue2] = useState(1)
  const [value3, setValue3] = useState(1)
  const [value4, setValue4] = useState(1)
  const [value5, setValue5] = useState(1)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/tabs/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>React Tabs</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The basic React tabs example uses the variant=&quot;tabs&quot; props to generate a
              tabbed interface.
            </Typography>
            <DocsExample href="components/tabs/#example">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value1} onChange={(e, v) => setValue1(v)}>
                  <Tab label="Home" value={0} />
                  <Tab label="Profile" value={1} />
                  <Tab label="Contact" value={2} />
                  <Tab label="Disabled" value={3} disabled />
                </Tabs>
              </Box>
              <TabPanel value={value1} index={0}>
                Home tab content
              </TabPanel>
              <TabPanel value={value1} index={1}>
                Profile tab content
              </TabPanel>
              <TabPanel value={value1} index={2}>
                Contact tab content
              </TabPanel>
              <TabPanel value={value1} index={3}>
                Disabled tab content
              </TabPanel>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Tabs</strong> <small>Unstyled</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              If you don&apos;t provide the variant prop, the component will default to a basic
              style.
            </Typography>
            <DocsExample href="components/tabs/#unstyled">
              <Tabs value={value2} onChange={(e, v) => setValue2(v)}>
                <Tab label="Home" value={0} />
                <Tab label="Profile" value={1} />
                <Tab label="Contact" value={2} />
                <Tab label="Disabled" value={3} disabled />
              </Tabs>
              <TabPanel value={value2} index={0}>
                Home tab content
              </TabPanel>
              <TabPanel value={value2} index={1}>
                Profile tab content
              </TabPanel>
              <TabPanel value={value2} index={2}>
                Contact tab content
              </TabPanel>
              <TabPanel value={value2} index={3}>
                Disabled tab content
              </TabPanel>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Tabs</strong> <small>Pills</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Take that same code, but use variant=&quot;pills&quot; instead:
            </Typography>
            <DocsExample href="components/tabs/#unstyled">
              <Tabs
                value={value3}
                onChange={(e, v) => setValue3(v)}
                sx={{
                  '& .MuiTab-root': {
                    borderRadius: 2,
                    mx: 0.5,
                    minHeight: 40,
                  },
                  '& .Mui-selected': {
                    bgcolor: 'primary.main',
                    color: 'white !important',
                  },
                }}
                TabIndicatorProps={{ style: { display: 'none' } }}
              >
                <Tab label="Home" value={0} />
                <Tab label="Profile" value={1} />
                <Tab label="Contact" value={2} />
                <Tab label="Disabled" value={3} disabled />
              </Tabs>
              <TabPanel value={value3} index={0}>
                Home tab content
              </TabPanel>
              <TabPanel value={value3} index={1}>
                Profile tab content
              </TabPanel>
              <TabPanel value={value3} index={2}>
                Contact tab content
              </TabPanel>
              <TabPanel value={value3} index={3}>
                Disabled tab content
              </TabPanel>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Tabs</strong> <small>Underline</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Take that same code, but use variant=&quot;underline&quot; instead:
            </Typography>
            <DocsExample href="components/tabs/#unstyled">
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value4} onChange={(e, v) => setValue4(v)}>
                  <Tab label="Home" value={0} />
                  <Tab label="Profile" value={1} />
                  <Tab label="Contact" value={2} />
                  <Tab label="Disabled" value={3} disabled />
                </Tabs>
              </Box>
              <TabPanel value={value4} index={0}>
                Home tab content
              </TabPanel>
              <TabPanel value={value4} index={1}>
                Profile tab content
              </TabPanel>
              <TabPanel value={value4} index={2}>
                Contact tab content
              </TabPanel>
              <TabPanel value={value4} index={3}>
                Disabled tab content
              </TabPanel>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Tabs</strong> <small>Underline border</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Take that same code, but use variant=&quot;underline-border&quot; instead:
            </Typography>
            <DocsExample href="components/tabs/#unstyled">
              <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                <Tabs value={value5} onChange={(e, v) => setValue5(v)}>
                  <Tab label="Home" value={0} />
                  <Tab label="Profile" value={1} />
                  <Tab label="Contact" value={2} />
                  <Tab label="Disabled" value={3} disabled />
                </Tabs>
              </Box>
              <TabPanel value={value5} index={0}>
                Home tab content
              </TabPanel>
              <TabPanel value={value5} index={1}>
                Profile tab content
              </TabPanel>
              <TabPanel value={value5} index={2}>
                Contact tab content
              </TabPanel>
              <TabPanel value={value5} index={3}>
                Disabled tab content
              </TabPanel>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TabsDemo
