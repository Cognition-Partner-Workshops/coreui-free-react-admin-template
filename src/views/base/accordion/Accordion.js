import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import MuiAccordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { DocsComponents, DocsExample } from 'src/components'

const Accordion = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DocsComponents href="components/accordion/" />
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>MUI Accordion</strong>} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Click the accordions below to expand/collapse the accordion content.
            </Typography>
            <DocsExample href="react-accordion">
              <MuiAccordion defaultExpanded>
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
              <MuiAccordion>
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
              <MuiAccordion>
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
                <strong>MUI Accordion</strong> <Typography component="span">Flush</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use <code>disableGutters</code> and <code>square</code> props to remove padding and
              rounded corners for a flush appearance.
            </Typography>
            <DocsExample href="react-accordion#customization">
              <MuiAccordion disableGutters square elevation={0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the first item&apos;s accordion body.</strong> It is hidden by
                    default, until expanded. You can customize the appearance using MUI&apos;s
                    styling system.
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
              <MuiAccordion disableGutters square elevation={0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the second item&apos;s accordion body.</strong> It is hidden by
                    default, until expanded. You can customize the appearance using MUI&apos;s
                    styling system.
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
              <MuiAccordion disableGutters square elevation={0}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the third item&apos;s accordion body.</strong> It is hidden by
                    default, until expanded. You can customize the appearance using MUI&apos;s
                    styling system.
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
                <strong>MUI Accordion</strong>{' '}
                <Typography component="span">Multiple Open</Typography>
              </>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              By default, MUI Accordions can stay open independently when another item is opened.
            </Typography>
            <DocsExample href="react-accordion">
              <MuiAccordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the first item&apos;s accordion body.</strong> Multiple
                    accordions can be open at the same time by default in MUI.
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
              <MuiAccordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the second item&apos;s accordion body.</strong> Multiple
                    accordions can be open at the same time by default in MUI.
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
              <MuiAccordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the third item&apos;s accordion body.</strong> Multiple
                    accordions can be open at the same time by default in MUI.
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
