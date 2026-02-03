import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import ExtensionIcon from '@mui/icons-material/Extension'
import TouchAppIcon from '@mui/icons-material/TouchApp'
import NotesIcon from '@mui/icons-material/Notes'
import PieChartIcon from '@mui/icons-material/PieChart'
import StarIcon from '@mui/icons-material/Star'
import NotificationsIcon from '@mui/icons-material/Notifications'
import CalculateIcon from '@mui/icons-material/Calculate'
import DescriptionIcon from '@mui/icons-material/Description'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const NavTitle = { name: 'CNavTitle', displayName: 'CNavTitle' }
const NavItem = { name: 'CNavItem', displayName: 'CNavItem' }
const NavGroup = { name: 'CNavGroup', displayName: 'CNavGroup' }

const _nav = [
  {
    component: NavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <DashboardIcon />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: NavTitle,
    name: 'Theme',
  },
  {
    component: NavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <ColorLensIcon />,
  },
  {
    component: NavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <TextFieldsIcon />,
  },
  {
    component: NavTitle,
    name: 'Components',
  },
  {
    component: NavGroup,
    name: 'Base',
    to: '/base',
    icon: <ExtensionIcon />,
    items: [
      {
        component: NavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: NavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: NavItem,
        name: (
          <React.Fragment>
            {'Calendar'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://mui.com/x/react-date-pickers/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: NavItem,
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: NavItem,
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: NavItem,
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: NavItem,
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: NavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: NavItem,
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: NavItem,
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: NavItem,
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: NavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: NavItem,
        name: 'Smart Pagination',
        href: 'https://mui.com/material-ui/react-pagination/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: NavItem,
        name: (
          <React.Fragment>
            {'Smart Table'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://mui.com/x/react-data-grid/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: NavItem,
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: NavItem,
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: NavItem,
        name: 'Tabs',
        to: '/base/tabs',
      },
      {
        component: NavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
      {
        component: NavItem,
        name: (
          <React.Fragment>
            {'Virtual Scroller'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://mui.com/material-ui/react-list/#virtualized-list',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
    ],
  },
  {
    component: NavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <TouchAppIcon />,
    items: [
      {
        component: NavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: NavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: NavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
      {
        component: NavItem,
        name: (
          <React.Fragment>
            {'Loading Button'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://mui.com/material-ui/react-button/#loading-button',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
    ],
  },
  {
    component: NavGroup,
    name: 'Forms',
    icon: <NotesIcon />,
    items: [
      {
        component: NavItem,
        name: (
          <React.Fragment>
            {'Autocomplete'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://mui.com/material-ui/react-autocomplete/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: NavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: NavItem,
        name: (
          <React.Fragment>
            {'Date Picker'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://mui.com/x/react-date-pickers/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: NavItem,
        name: 'Date Range Picker',
        href: 'https://mui.com/x/react-date-pickers/date-range-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: NavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: NavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: NavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: NavItem,
        name: (
          <React.Fragment>
            {'Multi Select'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://mui.com/material-ui/react-select/#multiple-select',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: NavItem,
        name: (
          <React.Fragment>
            {'OTP Input'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://mui.com/material-ui/react-text-field/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: NavItem,
        name: (
          <React.Fragment>
            {'Password Input'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://mui.com/material-ui/react-text-field/#input-adornments',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: NavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: NavItem,
        name: (
          <React.Fragment>
            {'Range Slider'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://mui.com/material-ui/react-slider/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: NavItem,
        name: (
          <React.Fragment>
            {'Rating'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://mui.com/material-ui/react-rating/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: NavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: NavItem,
        name: (
          <React.Fragment>
            {'Stepper'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://mui.com/material-ui/react-stepper/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: NavItem,
        name: (
          <React.Fragment>
            {'Time Picker'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://mui.com/x/react-date-pickers/time-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: NavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: NavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: NavItem,
    name: 'Charts',
    to: '/charts',
    icon: <PieChartIcon />,
  },
  {
    component: NavGroup,
    name: 'Icons',
    icon: <StarIcon />,
    items: [
      {
        component: NavItem,
        name: 'Material Icons',
        to: '/icons/coreui-icons',
      },
      {
        component: NavItem,
        name: 'Flag Icons',
        to: '/icons/flags',
      },
      {
        component: NavItem,
        name: 'Brand Icons',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: NavGroup,
    name: 'Notifications',
    icon: <NotificationsIcon />,
    items: [
      {
        component: NavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: NavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: NavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: NavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: NavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CalculateIcon />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: NavTitle,
    name: 'Extras',
  },
  {
    component: NavGroup,
    name: 'Pages',
    icon: <StarIcon />,
    items: [
      {
        component: NavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: NavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: NavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: NavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: NavItem,
    name: 'Docs',
    href: 'https://mui.com/material-ui/getting-started/',
    icon: <DescriptionIcon />,
  },
]

export default _nav
