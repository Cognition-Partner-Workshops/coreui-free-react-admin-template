import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

const TypographyView = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>Headings</strong>} />
          <CardContent>
            <Typography variant="h1" gutterBottom>
              h1. Heading
            </Typography>
            <Typography variant="h2" gutterBottom>
              h2. Heading
            </Typography>
            <Typography variant="h3" gutterBottom>
              h3. Heading
            </Typography>
            <Typography variant="h4" gutterBottom>
              h4. Heading
            </Typography>
            <Typography variant="h5" gutterBottom>
              h5. Heading
            </Typography>
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>Display headings</strong>} />
          <CardContent>
            <Typography variant="h1" sx={{ fontSize: '5rem', fontWeight: 300 }} gutterBottom>
              Display 1
            </Typography>
            <Typography variant="h1" sx={{ fontSize: '4.5rem', fontWeight: 300 }} gutterBottom>
              Display 2
            </Typography>
            <Typography variant="h1" sx={{ fontSize: '4rem', fontWeight: 300 }} gutterBottom>
              Display 3
            </Typography>
            <Typography variant="h1" sx={{ fontSize: '3.5rem', fontWeight: 300 }} gutterBottom>
              Display 4
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>Inline text elements</strong>} />
          <CardContent>
            <Typography paragraph>
              You can use the mark tag to <mark>highlight</mark> text.
            </Typography>
            <Typography paragraph>
              <del>This line of text is meant to be treated as deleted text.</del>
            </Typography>
            <Typography paragraph>
              <s>This line of text is meant to be treated as no longer accurate.</s>
            </Typography>
            <Typography paragraph>
              <ins>This line of text is meant to be treated as an addition to the document.</ins>
            </Typography>
            <Typography paragraph>
              <u>This line of text will render as underlined.</u>
            </Typography>
            <Typography paragraph>
              <small>This line of text is meant to be treated as fine print.</small>
            </Typography>
            <Typography paragraph>
              <strong>This line rendered as bold text.</strong>
            </Typography>
            <Typography paragraph>
              <em>This line rendered as italicized text.</em>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ mb: 4 }}>
          <CardHeader title={<strong>Body text variants</strong>} />
          <CardContent>
            <Typography variant="body1" paragraph>
              Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
            <Typography variant="body2" paragraph>
              Body 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Subtitle 1. Lorem ipsum dolor sit amet.
            </Typography>
            <Typography variant="subtitle2" paragraph>
              Subtitle 2. Lorem ipsum dolor sit amet.
            </Typography>
            <Typography variant="caption" display="block" paragraph>
              Caption text. Lorem ipsum dolor sit amet.
            </Typography>
            <Typography variant="overline" display="block">
              Overline text
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TypographyView
