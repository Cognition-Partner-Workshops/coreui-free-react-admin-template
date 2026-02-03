import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PaletteIcon from '@mui/icons-material/Palette'
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
    name: 'Dashboard',
    to: '/dashboard',
    icon: <DashboardIcon fontSize="small" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    title: true,
    name: 'Theme',
  },
  {
    name: 'Colors',
    to: '/theme/colors',
    icon: <PaletteIcon fontSize="small" />,
  },
  {
    name: 'Typography',
    to: '/theme/typography',
    icon: <TextFieldsIcon fontSize="small" />,
  },
  {
    title: true,
    name: 'Components',
  },
  {
    name: 'Base',
    to: '/base',
    icon: <ExtensionIcon fontSize="small" />,
    items: [
      {
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        name: (
          <React.Fragment>
            {'Calendar'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/components/calendar/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        name: 'Cards',
        to: '/base/cards',
      },
      {
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        name: 'Progress',
        to: '/base/progress',
      },
      {
        name: 'Smart Pagination',
        href: 'https://coreui.io/react/docs/components/smart-pagination/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        name: (
          <React.Fragment>
            {'Smart Table'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/components/smart-table/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        name: 'Tables',
        to: '/base/tables',
      },
      {
        name: 'Tabs',
        to: '/base/tabs',
      },
      {
        name: 'Tooltips',
        to: '/base/tooltips',
      },
      {
        name: (
          <React.Fragment>
            {'Virtual Scroller'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 1 }} />
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
    name: 'Buttons',
    to: '/buttons',
    icon: <TouchAppIcon fontSize="small" />,
    items: [
      {
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
      {
        name: (
          <React.Fragment>
            {'Loading Button'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 1 }} />
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
    name: 'Forms',
    icon: <NotesIcon fontSize="small" />,
    items: [
      {
        name: (
          <React.Fragment>
            {'Autocomplete'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/autocomplete/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        name: (
          <React.Fragment>
            {'Date Picker'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/date-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        name: 'Date Range Picker',
        href: 'https://coreui.io/react/docs/forms/date-range-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        name: (
          <React.Fragment>
            {'Multi Select'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/multi-select/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        name: (
          <React.Fragment>
            {'OTP Input'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/one-time-password-input/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        name: (
          <React.Fragment>
            {'Password Input'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/password-input/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        name: 'Range',
        to: '/forms/range',
      },
      {
        name: (
          <React.Fragment>
            {'Range Slider'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/range-slider/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        name: (
          <React.Fragment>
            {'Rating'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/rating/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        name: 'Select',
        to: '/forms/select',
      },
      {
        name: (
          <React.Fragment>
            {'Stepper'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/stepper/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        name: (
          <React.Fragment>
            {'Time Picker'}
            <OpenInNewIcon sx={{ fontSize: 12, ml: 1 }} />
          </React.Fragment>
        ),
        href: 'https://coreui.io/react/docs/forms/time-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    name: 'Charts',
    to: '/charts',
    icon: <PieChartIcon fontSize="small" />,
  },
  {
    name: 'Icons',
    icon: <StarIcon fontSize="small" />,
    items: [
      {
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
      },
      {
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    name: 'Notifications',
    icon: <NotificationsIcon fontSize="small" />,
    items: [
      {
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    name: 'Widgets',
    to: '/widgets',
    icon: <CalculateIcon fontSize="small" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    icon: <StarIcon fontSize="small" />,
    items: [
      {
        name: 'Login',
        to: '/login',
      },
      {
        name: 'Register',
        to: '/register',
      },
      {
        name: 'Error 404',
        to: '/404',
      },
      {
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <DescriptionIcon fontSize="small" />,
  },
]

export default _nav
