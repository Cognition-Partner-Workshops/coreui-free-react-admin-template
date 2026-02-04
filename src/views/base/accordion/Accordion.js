import React from 'react'
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { DocsComponents, DocsExample } from 'src/components'

const Accordion = () => {
  const [expanded, setExpanded] = React.useState('panel2')
  const [multiExpanded, setMultiExpanded] = React.useState(['panel1'])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handleMultiChange = (panel) => (event, isExpanded) => {
    if (isExpanded) {
      setMultiExpanded([...multiExpanded, panel])
    } else {
      setMultiExpanded(multiExpanded.filter((p) => p !== panel))
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <DocsComponents href="components/accordion/" />
        <Card sx={{ mb: 3 }}>
          <CardHeader title={<Typography variant="h6">React Accordion</Typography>} />
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
                    style each element.
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
                    default, until the collapse plugin adds the appropriate classes.
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
                    default, until the collapse plugin adds the appropriate classes.
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Accordion{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Flush
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use <code>disableGutters</code> and <code>square</code> props to remove padding and
              rounded corners.
            </Typography>
            <DocsExample href="components/accordion#flush">
              <MuiAccordion
                disableGutters
                square
                elevation={0}
                sx={{ border: 1, borderColor: 'divider' }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the first item&apos;s accordion body.</strong>
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
              <MuiAccordion
                disableGutters
                square
                elevation={0}
                sx={{ border: 1, borderColor: 'divider', borderTop: 0 }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the second item&apos;s accordion body.</strong>
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
              <MuiAccordion
                disableGutters
                square
                elevation={0}
                sx={{ border: 1, borderColor: 'divider', borderTop: 0 }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the third item&apos;s accordion body.</strong>
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
            </DocsExample>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                React Accordion{' '}
                <Typography component="span" variant="body2" color="text.secondary">
                  Always open
                </Typography>
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Control each accordion independently to allow multiple panels to stay open.
            </Typography>
            <DocsExample href="components/accordion#flush">
              <MuiAccordion
                expanded={multiExpanded.includes('panel1')}
                onChange={handleMultiChange('panel1')}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the first item&apos;s accordion body.</strong>
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
              <MuiAccordion
                expanded={multiExpanded.includes('panel2')}
                onChange={handleMultiChange('panel2')}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the second item&apos;s accordion body.</strong>
                  </Typography>
                </AccordionDetails>
              </MuiAccordion>
              <MuiAccordion
                expanded={multiExpanded.includes('panel3')}
                onChange={handleMultiChange('panel3')}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Item #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <strong>This is the third item&apos;s accordion body.</strong>
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
