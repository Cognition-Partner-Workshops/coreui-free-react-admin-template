import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import ExtensionIcon from '@mui/icons-material/Extension'
import MouseIcon from '@mui/icons-material/Mouse'
import DescriptionIcon from '@mui/icons-material/Description'
import BarChartIcon from '@mui/icons-material/BarChart'
import StarIcon from '@mui/icons-material/Star'
import NotificationsIcon from '@mui/icons-material/Notifications'
import WidgetsIcon from '@mui/icons-material/Widgets'
import ArticleIcon from '@mui/icons-material/Article'
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
        href: 'https://coreui.io/react/docs/components/calendar/',
        badge: {
          color: 'error',
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
    ],
  },
  {
    type: 'group',
    name: 'Buttons',
    to: '/buttons',
    icon: <MouseIcon />,
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
    ],
  },
  {
    type: 'group',
    name: 'Forms',
    icon: <DescriptionIcon />,
    items: [
      {
        type: 'item',
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
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
        name: 'Range',
        to: '/forms/range',
      },
      {
        type: 'item',
        name: 'Select',
        to: '/forms/select',
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
    icon: <BarChartIcon />,
  },
  {
    type: 'group',
    name: 'Icons',
    icon: <StarIcon />,
    items: [
      {
        type: 'item',
        name: 'Material Icons',
        to: '/icons/material-icons',
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
        name: 'Snackbar',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    type: 'item',
    name: 'Widgets',
    to: '/widgets',
    icon: <WidgetsIcon />,
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
    icon: <ArticleIcon />,
  },
]

export default _nav
