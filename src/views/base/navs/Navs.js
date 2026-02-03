import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import { DocsExample } from 'src/components'

const Navs = () => {
  const [value, setValue] = React.useState(0)

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Navs" />
      <CardContent>
        <DocsExample href="components/navs-tabs">
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={(e, v) => setValue(v)}>
              <Tab label="Active" />
              <Tab label="Link" />
              <Tab label="Link" />
              <Tab label="Disabled" disabled />
            </Tabs>
          </Box>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Navs
