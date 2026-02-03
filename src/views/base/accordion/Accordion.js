import React from 'react'
import Typography from '@mui/material/Typography'
import MuiAccordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

const Accordion = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Accordion
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Build vertically collapsing accordions using MUI Accordion component.
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic Accordion
          </Typography>
          <MuiAccordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Accordion Item #1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </MuiAccordion>
          <MuiAccordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Accordion Item #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </MuiAccordion>
          <MuiAccordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Accordion Item #3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </MuiAccordion>
        </CardContent>
      </Card>
    </>
  )
}

export default Accordion
