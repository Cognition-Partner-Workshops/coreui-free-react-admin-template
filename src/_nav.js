import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PaletteIcon from '@mui/icons-material/Palette'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import ExtensionIcon from '@mui/icons-material/Extension'
import TouchAppIcon from '@mui/icons-material/TouchApp'
import DescriptionIcon from '@mui/icons-material/Description'
import BarChartIcon from '@mui/icons-material/BarChart'
import StarIcon from '@mui/icons-material/Star'
import NotificationsIcon from '@mui/icons-material/Notifications'
import WidgetsIcon from '@mui/icons-material/Widgets'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const _nav = [
  {
    component: { name: 'CNavItem' },
    name: 'Dashboard',
    to: '/dashboard',
    icon: <DashboardIcon fontSize="small" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: { name: 'CNavTitle' },
    name: 'Theme',
  },
  {
    component: { name: 'CNavItem' },
    name: 'Colors',
    to: '/theme/colors',
    icon: <PaletteIcon fontSize="small" />,
  },
  {
    component: { name: 'CNavItem' },
    name: 'Typography',
    to: '/theme/typography',
    icon: <TextFieldsIcon fontSize="small" />,
  },
  {
    component: { name: 'CNavTitle' },
    name: 'Components',
  },
  {
    component: { name: 'CNavGroup' },
    name: 'Base',
    to: '/base',
    icon: <ExtensionIcon fontSize="small" />,
    items: [
      {
        component: { name: 'CNavItem' },
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: { name: 'CNavItem' },
        name: (
          <React.Fragment>
            {'Calendar'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 0.5 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/components/calendar/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: { name: 'CNavItem' },
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: { name: 'CNavItem' },
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Smart Pagination',
        href: 'https://coreui.io/react/docs/components/smart-pagination/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: { name: 'CNavItem' },
        name: (
          <React.Fragment>
            {'Smart Table'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 0.5 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/components/smart-table/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: { name: 'CNavItem' },
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Tabs',
        to: '/base/tabs',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Tooltips',
        to: '/base/tooltips',
      },
      {
        component: { name: 'CNavItem' },
        name: (
          <React.Fragment>
            {'Virtual Scroller'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 0.5 }} />
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
    component: { name: 'CNavGroup' },
    name: 'Buttons',
    to: '/buttons',
    icon: <TouchAppIcon fontSize="small" />,
    items: [
      {
        component: { name: 'CNavItem' },
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
      {
        component: { name: 'CNavItem' },
        name: (
          <React.Fragment>
            {'Loading Button'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 0.5 }} />
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
    component: { name: 'CNavGroup' },
    name: 'Forms',
    icon: <DescriptionIcon fontSize="small" />,
    items: [
      {
        component: { name: 'CNavItem' },
        name: (
          <React.Fragment>
            {'Autocomplete'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 0.5 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/autocomplete/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: { name: 'CNavItem' },
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: { name: 'CNavItem' },
        name: (
          <React.Fragment>
            {'Date Picker'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 0.5 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/date-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: { name: 'CNavItem' },
        name: 'Date Range Picker',
        href: 'https://coreui.io/react/docs/forms/date-range-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: { name: 'CNavItem' },
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: { name: 'CNavItem' },
        name: (
          <React.Fragment>
            {'Multi Select'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 0.5 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/multi-select/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: { name: 'CNavItem' },
        name: (
          <React.Fragment>
            {'OTP Input'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 0.5 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/one-time-password-input/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: { name: 'CNavItem' },
        name: (
          <React.Fragment>
            {'Password Input'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 0.5 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/password-input/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: { name: 'CNavItem' },
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: { name: 'CNavItem' },
        name: (
          <React.Fragment>
            {'Range Slider'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 0.5 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/range-slider/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: { name: 'CNavItem' },
        name: (
          <React.Fragment>
            {'Rating'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 0.5 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/rating/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: { name: 'CNavItem' },
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: { name: 'CNavItem' },
        name: (
          <React.Fragment>
            {'Stepper'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 0.5 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/stepper/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: { name: 'CNavItem' },
        name: (
          <React.Fragment>
            {'Time Picker'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 0.5 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/time-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: { name: 'CNavItem' },
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: { name: 'CNavItem' },
    name: 'Charts',
    to: '/charts',
    icon: <BarChartIcon fontSize="small" />,
  },
  {
    component: { name: 'CNavGroup' },
    name: 'Icons',
    icon: <StarIcon fontSize="small" />,
    items: [
      {
        component: { name: 'CNavItem' },
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
      },
      {
        component: { name: 'CNavItem' },
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: { name: 'CNavItem' },
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: { name: 'CNavGroup' },
    name: 'Notifications',
    icon: <NotificationsIcon fontSize="small" />,
    items: [
      {
        component: { name: 'CNavItem' },
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: { name: 'CNavItem' },
    name: 'Widgets',
    to: '/widgets',
    icon: <WidgetsIcon fontSize="small" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: { name: 'CNavTitle' },
    name: 'Extras',
  },
  {
    component: { name: 'CNavGroup' },
    name: 'Pages',
    icon: <StarIcon fontSize="small" />,
    items: [
      {
        component: { name: 'CNavItem' },
        name: 'Login',
        to: '/login',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Register',
        to: '/register',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Error 404',
        to: '/404',
      },
      {
        component: { name: 'CNavItem' },
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: { name: 'CNavItem' },
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <DescriptionIcon fontSize="small" />,
  },
]

export default _nav
