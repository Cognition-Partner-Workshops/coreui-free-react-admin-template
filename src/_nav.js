import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import ExtensionIcon from '@mui/icons-material/Extension'
import MouseIcon from '@mui/icons-material/Mouse'
import NotesIcon from '@mui/icons-material/Notes'
import PieChartIcon from '@mui/icons-material/PieChart'
import StarIcon from '@mui/icons-material/Star'
import NotificationsIcon from '@mui/icons-material/Notifications'
import CalculateIcon from '@mui/icons-material/Calculate'
import DescriptionIcon from '@mui/icons-material/Description'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const CNavItem = { name: 'CNavItem' }
const CNavGroup = { name: 'CNavGroup' }
const CNavTitle = { name: 'CNavTitle' }

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <DashboardIcon fontSize="small" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <ColorLensIcon fontSize="small" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <TextFieldsIcon fontSize="small" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    icon: <ExtensionIcon fontSize="small" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Calendar'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/components/calendar/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Smart Pagination',
        href: 'https://coreui.io/react/docs/components/smart-pagination/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Smart Table'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/components/smart-table/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tabs',
        to: '/base/tabs',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Virtual Scroller'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/components/virtual-scroller/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <MouseIcon fontSize="small" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Loading Button'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/components/loading-button/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <NotesIcon fontSize="small" />,
    items: [
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Autocomplete'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/autocomplete/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Date Picker'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/date-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Date Range Picker',
        href: 'https://coreui.io/react/docs/forms/date-range-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Multi Select'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/multi-select/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'OTP Input'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/one-time-password-input/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Password Input'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/password-input/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Range Slider'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/range-slider/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Rating'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/rating/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Stepper'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/stepper/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: (
          <React.Fragment>
            {'Time Picker'}
            <OpenInNewIcon sx={{ fontSize: 14, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/time-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <PieChartIcon fontSize="small" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <StarIcon fontSize="small" />,
    items: [
      {
        component: CNavItem,
        name: 'Material Icons',
        to: '/icons/coreui-icons',
      },
      {
        component: CNavItem,
        name: 'Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <NotificationsIcon fontSize="small" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CalculateIcon fontSize="small" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <StarIcon fontSize="small" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://mui.com/material-ui/getting-started/',
    icon: <DescriptionIcon fontSize="small" />,
  },
]

export default _nav
