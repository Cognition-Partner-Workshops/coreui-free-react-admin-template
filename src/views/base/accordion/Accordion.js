import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import MuiAccordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Accordion = () => {
  const [expanded, setExpanded] = React.useState('panel2')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Accordion" subheader="Basic Example" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Click the accordions below to expand/collapse the accordion content.
            </Typography>
            <MuiAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion Item #1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <strong>This is the first item&apos;s accordion body.</strong> It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions.
                </Typography>
              </AccordionDetails>
            </MuiAccordion>
            <MuiAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion Item #2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <strong>This is the second item&apos;s accordion body.</strong> It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions.
                </Typography>
              </AccordionDetails>
            </MuiAccordion>
            <MuiAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion Item #3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <strong>This is the third item&apos;s accordion body.</strong> It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as the
                  showing and hiding via CSS transitions.
                </Typography>
              </AccordionDetails>
            </MuiAccordion>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Accordion" subheader="Flush" />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use the <code>disableGutters</code> and <code>square</code> props to remove spacing
              and rounded corners.
            </Typography>
            <MuiAccordion disableGutters square>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion Item #1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This is the first item&apos;s accordion body with flush styling.
                </Typography>
              </AccordionDetails>
            </MuiAccordion>
            <MuiAccordion disableGutters square>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion Item #2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This is the second item&apos;s accordion body with flush styling.
                </Typography>
              </AccordionDetails>
            </MuiAccordion>
            <MuiAccordion disableGutters square>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion Item #3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This is the third item&apos;s accordion body with flush styling.
                </Typography>
              </AccordionDetails>
            </MuiAccordion>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Accordion
