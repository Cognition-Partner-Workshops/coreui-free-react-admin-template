import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { DocsComponents, DocsExample } from 'src/components'

const AccordionView = () => {
  const [expanded, setExpanded] = React.useState('panel2')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/accordion/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<Typography variant="h6">React Accordion</Typography>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Click the accordions below to expand/collapse the accordion content.
            </Typography>
            <DocsExample href="components/accordion">
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the third item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </DocsExample>
          </CardContent>
        </Card>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Accordion <Typography component="span" variant="body2">Flush</Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add <code>disableGutters</code> and <code>square</code> props to remove padding and
              rounded corners to render accordions edge-to-edge with their parent container.
            </Typography>
            <DocsExample href="components/accordion#flush">
              <Accordion disableGutters square elevation={0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion disableGutters square elevation={0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion disableGutters square elevation={0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the third item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </DocsExample>
          </CardContent>
        </Card>
        <Card sx={{ mb: 4 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Accordion <Typography component="span" variant="body2">Always open</Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              By default, MUI Accordion items stay open when another item is opened. Use controlled
              state to change this behavior.
            </Typography>
            <DocsExample href="components/accordion#flush">
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the third item&#39;s accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classes that we use to
                    style each element. These classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It&#39;s also worth noting that just
                    about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </DocsExample>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AccordionView
