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
import { DocsComponents, DocsExample } from 'src/components'

const Accordion = () => {
  const [expanded, setExpanded] = React.useState('panel2')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/accordion/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>React Accordion</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Click the accordions below to expand/collapse the accordion content.
            </Typography>
            <DocsExample href="components/accordion">
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
            </DocsExample>
          </CardContent>
        </Card>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Accordion</strong> <small>Flush</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add <code>disableGutters</code> and <code>square</code> props to remove padding and
              rounded corners to render accordions edge-to-edge with their parent container.
            </Typography>
            <DocsExample href="components/accordion#flush">
              <MuiAccordion disableGutters square>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the first item&apos;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes.
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
              <MuiAccordion disableGutters square>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the second item&apos;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes.
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
              <MuiAccordion disableGutters square>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the third item&apos;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes.
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
            </DocsExample>
          </CardContent>
        </Card>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <>
                <strong>React Accordion</strong> <small>Always open</small>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Multiple accordions can be open at the same time by managing state independently.
            </Typography>
            <DocsExample href="components/accordion#flush">
              <MuiAccordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the first item&apos;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes.
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
              <MuiAccordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the second item&apos;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes.
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
              <MuiAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the third item&apos;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes.
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Accordion
