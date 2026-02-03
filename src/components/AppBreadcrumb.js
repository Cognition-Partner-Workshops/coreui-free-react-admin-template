import React from 'react'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import HomeIcon from '@mui/icons-material/Home'

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
    <Breadcrumbs aria-label="breadcrumb" sx={{ my: 0 }}>
      <Link
        component={RouterLink}
        to="/"
        color="inherit"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
        Home
      </Link>
      {breadcrumbs.map((breadcrumb, index) => {
        return breadcrumb.active ? (
          <Typography key={index} color="text.primary">
            {breadcrumb.name}
          </Typography>
        ) : (
          <Link key={index} component={RouterLink} to={breadcrumb.pathname} color="inherit">
            {breadcrumb.name}
          </Link>
        )
      })}
    </Breadcrumbs>
  )
}

export default React.memo(AppBreadcrumb)
