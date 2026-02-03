import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import MuiTypography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

const Typography = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Typography" subheader="Headings" />
          <CardContent>
            <MuiTypography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Use Typography component to present your design and content as clearly and efficiently
              as possible.
            </MuiTypography>
            <MuiTypography variant="h1" gutterBottom>
              h1. Heading
            </MuiTypography>
            <MuiTypography variant="h2" gutterBottom>
              h2. Heading
            </MuiTypography>
            <MuiTypography variant="h3" gutterBottom>
              h3. Heading
            </MuiTypography>
            <MuiTypography variant="h4" gutterBottom>
              h4. Heading
            </MuiTypography>
            <MuiTypography variant="h5" gutterBottom>
              h5. Heading
            </MuiTypography>
            <MuiTypography variant="h6" gutterBottom>
              h6. Heading
            </MuiTypography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Typography" subheader="Body text" />
          <CardContent>
            <MuiTypography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
              tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus,
              cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </MuiTypography>
            <Divider sx={{ my: 2 }} />
            <MuiTypography variant="body2" gutterBottom>
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
              tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus,
              cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </MuiTypography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Typography" subheader="Other variants" />
          <CardContent>
            <MuiTypography variant="subtitle1" gutterBottom>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </MuiTypography>
            <Divider sx={{ my: 2 }} />
            <MuiTypography variant="subtitle2" gutterBottom>
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </MuiTypography>
            <Divider sx={{ my: 2 }} />
            <MuiTypography variant="button" display="block" gutterBottom>
              button text
            </MuiTypography>
            <Divider sx={{ my: 2 }} />
            <MuiTypography variant="caption" display="block" gutterBottom>
              caption text
            </MuiTypography>
            <Divider sx={{ my: 2 }} />
            <MuiTypography variant="overline" display="block" gutterBottom>
              overline text
            </MuiTypography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title="Typography" subheader="Inline text elements" />
          <CardContent>
            <MuiTypography gutterBottom>
              You can use the mark tag to <mark>highlight</mark> text.
            </MuiTypography>
            <MuiTypography gutterBottom>
              <del>This line of text is meant to be treated as deleted text.</del>
            </MuiTypography>
            <MuiTypography gutterBottom>
              <s>This line of text is meant to be treated as no longer accurate.</s>
            </MuiTypography>
            <MuiTypography gutterBottom>
              <ins>This line of text is meant to be treated as an addition to the document.</ins>
            </MuiTypography>
            <MuiTypography gutterBottom>
              <u>This line of text will render as underlined.</u>
            </MuiTypography>
            <MuiTypography gutterBottom>
              <small>This line of text is meant to be treated as fine print.</small>
            </MuiTypography>
            <MuiTypography gutterBottom>
              <strong>This line rendered as bold text.</strong>
            </MuiTypography>
            <MuiTypography gutterBottom>
              <em>This line rendered as italicized text.</em>
            </MuiTypography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Typography
