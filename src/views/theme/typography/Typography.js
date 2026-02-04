import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography as MuiTypography,
  Box,
  Divider,
} from '@mui/material'

const Typography = () => {
  return (
    <>
      <Card sx={{ mb: 3 }}>
        <CardHeader title={<MuiTypography variant="h6">Headings</MuiTypography>} />
        <CardContent>
          <MuiTypography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            MUI provides a set of typography variants for consistent text styling.
          </MuiTypography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <MuiTypography variant="h1">h1. Heading</MuiTypography>
              <MuiTypography variant="caption" color="text.secondary">
                variant=&quot;h1&quot;
              </MuiTypography>
            </Box>
            <Divider />
            <Box>
              <MuiTypography variant="h2">h2. Heading</MuiTypography>
              <MuiTypography variant="caption" color="text.secondary">
                variant=&quot;h2&quot;
              </MuiTypography>
            </Box>
            <Divider />
            <Box>
              <MuiTypography variant="h3">h3. Heading</MuiTypography>
              <MuiTypography variant="caption" color="text.secondary">
                variant=&quot;h3&quot;
              </MuiTypography>
            </Box>
            <Divider />
            <Box>
              <MuiTypography variant="h4">h4. Heading</MuiTypography>
              <MuiTypography variant="caption" color="text.secondary">
                variant=&quot;h4&quot;
              </MuiTypography>
            </Box>
            <Divider />
            <Box>
              <MuiTypography variant="h5">h5. Heading</MuiTypography>
              <MuiTypography variant="caption" color="text.secondary">
                variant=&quot;h5&quot;
              </MuiTypography>
            </Box>
            <Divider />
            <Box>
              <MuiTypography variant="h6">h6. Heading</MuiTypography>
              <MuiTypography variant="caption" color="text.secondary">
                variant=&quot;h6&quot;
              </MuiTypography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title={<MuiTypography variant="h6">Body Text</MuiTypography>} />
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <MuiTypography variant="body1">
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
                tenetur unde suscipit, quam beatae rerum inventore consectetur.
              </MuiTypography>
              <MuiTypography variant="caption" color="text.secondary">
                variant=&quot;body1&quot;
              </MuiTypography>
            </Box>
            <Divider />
            <Box>
              <MuiTypography variant="body2">
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
                tenetur unde suscipit, quam beatae rerum inventore consectetur.
              </MuiTypography>
              <MuiTypography variant="caption" color="text.secondary">
                variant=&quot;body2&quot;
              </MuiTypography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardHeader title={<MuiTypography variant="h6">Other Variants</MuiTypography>} />
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <MuiTypography variant="subtitle1">
                subtitle1. Lorem ipsum dolor sit amet
              </MuiTypography>
              <MuiTypography variant="caption" color="text.secondary">
                variant=&quot;subtitle1&quot;
              </MuiTypography>
            </Box>
            <Divider />
            <Box>
              <MuiTypography variant="subtitle2">
                subtitle2. Lorem ipsum dolor sit amet
              </MuiTypography>
              <MuiTypography variant="caption" color="text.secondary">
                variant=&quot;subtitle2&quot;
              </MuiTypography>
            </Box>
            <Divider />
            <Box>
              <MuiTypography variant="button" display="block">
                button text
              </MuiTypography>
              <MuiTypography variant="caption" color="text.secondary">
                variant=&quot;button&quot;
              </MuiTypography>
            </Box>
            <Divider />
            <Box>
              <MuiTypography variant="caption" display="block">
                caption text
              </MuiTypography>
              <MuiTypography variant="caption" color="text.secondary">
                variant=&quot;caption&quot;
              </MuiTypography>
            </Box>
            <Divider />
            <Box>
              <MuiTypography variant="overline" display="block">
                overline text
              </MuiTypography>
              <MuiTypography variant="caption" color="text.secondary">
                variant=&quot;overline&quot;
              </MuiTypography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default Typography
