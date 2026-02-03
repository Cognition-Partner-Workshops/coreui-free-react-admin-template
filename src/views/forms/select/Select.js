import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MuiSelect from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'

import { DocsExample } from 'src/components'

const Select = () => {
  const [value, setValue] = React.useState('')

  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Select" />
      <CardContent>
        <DocsExample href="forms/select">
          <Stack spacing={2}>
            <FormControl fullWidth>
              <InputLabel>Open this select menu</InputLabel>
              <MuiSelect
                value={value}
                label="Open this select menu"
                onChange={(e) => setValue(e.target.value)}
              >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
              </MuiSelect>
            </FormControl>
          </Stack>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Select
