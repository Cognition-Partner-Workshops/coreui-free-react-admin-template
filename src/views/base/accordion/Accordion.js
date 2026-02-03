import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import MuiAccordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { DocsExample } from 'src/components'

const Accordion = () => {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Accordion" />
      <CardContent>
        <DocsExample href="components/accordion">
          <MuiAccordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Accordion Item #1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is the first item&apos;s accordion body. It is shown by default.
              </Typography>
            </AccordionDetails>
          </MuiAccordion>
          <MuiAccordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Accordion Item #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>This is the second item&apos;s accordion body.</Typography>
            </AccordionDetails>
          </MuiAccordion>
          <MuiAccordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Accordion Item #3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>This is the third item&apos;s accordion body.</Typography>
            </AccordionDetails>
          </MuiAccordion>
        </DocsExample>
      </CardContent>
    </Card>
  )
}

export default Accordion
