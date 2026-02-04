import React from 'react'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { Breadcrumbs, Link, Typography, Box } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import HomeIcon from '@mui/icons-material/Home'

import routes from '../routes'

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname

  const getRouteName = (pathname, routesList) => {
    const currentRoute = routesList.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      if (routeName) {
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length,
        })
      }
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{
        '& .MuiBreadcrumbs-separator': {
          mx: 0.5,
        },
      }}
    >
      <Link
        component={RouterLink}
        to="/"
        underline="hover"
        color="inherit"
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 14,
          '&:hover': {
            color: 'primary.main',
          },
        }}
      >
        <HomeIcon sx={{ mr: 0.5, fontSize: 18 }} />
        Home
      </Link>
      {breadcrumbs.map((breadcrumb, index) =>
        breadcrumb.active ? (
          <Typography key={index} color="text.primary" sx={{ fontSize: 14, fontWeight: 500 }}>
            {breadcrumb.name}
          </Typography>
        ) : (
          <Link
            key={index}
            component={RouterLink}
            to={breadcrumb.pathname}
            underline="hover"
            color="inherit"
            sx={{
              fontSize: 14,
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            {breadcrumb.name}
          </Link>
        ),
      )}
    </Breadcrumbs>
  )
}

export default React.memo(AppBreadcrumb)
