import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

import routes from '../routes'

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ my: 0 }}
    >
      <MuiLink component={Link} to="/" underline="hover" color="inherit">
        Home
      </MuiLink>
      {breadcrumbs.map((breadcrumb, index) => {
        return breadcrumb.active ? (
          <Typography key={index} color="text.primary">
            {breadcrumb.name}
          </Typography>
        ) : (
          <MuiLink
            key={index}
            component={Link}
            to={breadcrumb.pathname}
            underline="hover"
            color="inherit"
          >
            {breadcrumb.name}
          </MuiLink>
        )
      })}
    </Breadcrumbs>
  )
}

export default React.memo(AppBreadcrumb)
