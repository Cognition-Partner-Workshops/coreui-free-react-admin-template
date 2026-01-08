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

const _nav = [
  {
    type: 'item',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <DashboardIcon />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    type: 'title',
    name: 'Theme',
  },
  {
    type: 'item',
    name: 'Colors',
    to: '/theme/colors',
    icon: <ColorLensIcon />,
  },
  {
    type: 'item',
    name: 'Typography',
    to: '/theme/typography',
    icon: <TextFieldsIcon />,
  },
  {
    type: 'title',
    name: 'Components',
  },
  {
    type: 'group',
    name: 'Base',
    to: '/base',
    icon: <ExtensionIcon />,
    items: [
      {
        type: 'item',
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        type: 'item',
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        type: 'item',
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
        type: 'item',
        name: 'Cards',
        to: '/base/cards',
      },
      {
        type: 'item',
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        type: 'item',
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        type: 'item',
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        type: 'item',
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        type: 'item',
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        type: 'item',
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        type: 'item',
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        type: 'item',
        name: 'Progress',
        to: '/base/progress',
      },
      {
        type: 'item',
        name: 'Smart Pagination',
        href: 'https://mui.com/material-ui/react-pagination/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        type: 'item',
        name: (
          <React.Fragment>
            {'Data Grid'}
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
        type: 'item',
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        type: 'item',
        name: 'Tables',
        to: '/base/tables',
      },
      {
        type: 'item',
        name: 'Tabs',
        to: '/base/tabs',
      },
      {
        type: 'item',
        name: 'Tooltips',
        to: '/base/tooltips',
      },
      {
        type: 'item',
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
    type: 'group',
    name: 'Buttons',
    to: '/buttons',
    icon: <TouchAppIcon />,
    items: [
      {
        type: 'item',
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        type: 'item',
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        type: 'item',
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
      {
        type: 'item',
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
    type: 'group',
    name: 'Forms',
    icon: <NotesIcon />,
    items: [
      {
        type: 'item',
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
        type: 'item',
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        type: 'item',
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
        type: 'item',
        name: 'Date Range Picker',
        href: 'https://mui.com/x/react-date-pickers/date-range-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        type: 'item',
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        type: 'item',
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        type: 'item',
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        type: 'item',
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
        type: 'item',
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
        type: 'item',
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
        type: 'item',
        name: 'Range',
        to: '/forms/range',
      },
      {
        type: 'item',
        name: (
          <React.Fragment>
            {'Range Slider'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://mui.com/material-ui/react-slider/#range-slider',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        type: 'item',
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
        type: 'item',
        name: 'Select',
        to: '/forms/select',
      },
      {
        type: 'item',
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
        type: 'item',
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
        type: 'item',
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        type: 'item',
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    type: 'item',
    name: 'Charts',
    to: '/charts',
    icon: <PieChartIcon />,
  },
  {
    type: 'group',
    name: 'Icons',
    icon: <StarIcon />,
    items: [
      {
        type: 'item',
        name: 'Material Icons',
        to: '/icons/coreui-icons',
      },
      {
        type: 'item',
        name: 'Flag Icons',
        to: '/icons/flags',
      },
      {
        type: 'item',
        name: 'Brand Icons',
        to: '/icons/brands',
      },
    ],
  },
  {
    type: 'group',
    name: 'Notifications',
    icon: <NotificationsIcon />,
    items: [
      {
        type: 'item',
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        type: 'item',
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        type: 'item',
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        type: 'item',
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    type: 'item',
    name: 'Widgets',
    to: '/widgets',
    icon: <CalculateIcon />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    type: 'title',
    name: 'Extras',
  },
  {
    type: 'group',
    name: 'Pages',
    icon: <StarIcon />,
    items: [
      {
        type: 'item',
        name: 'Login',
        to: '/login',
      },
      {
        type: 'item',
        name: 'Register',
        to: '/register',
      },
      {
        type: 'item',
        name: 'Error 404',
        to: '/404',
      },
      {
        type: 'item',
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    type: 'item',
    name: 'Docs',
    href: 'https://mui.com/material-ui/getting-started/',
    icon: <DescriptionIcon />,
  },
]

export default _nav
