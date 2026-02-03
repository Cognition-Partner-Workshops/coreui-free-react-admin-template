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
        name: 'Calendar',
        href: 'https://coreui.io/react/docs/components/calendar/',
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
        href: 'https://coreui.io/react/docs/components/smart-pagination/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        type: 'item',
        name: 'Smart Table',
        href: 'https://coreui.io/react/docs/components/smart-table/',
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
        name: 'Virtual Scroller',
        href: 'https://coreui.io/react/docs/components/virtual-scroller/',
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
        name: 'Loading Button',
        href: 'https://coreui.io/react/docs/components/loading-button/',
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
        name: 'Autocomplete',
        href: 'https://coreui.io/react/docs/forms/autocomplete/',
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
        name: 'Date Picker',
        href: 'https://coreui.io/react/docs/forms/date-picker/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        type: 'item',
        name: 'Date Range Picker',
        href: 'https://coreui.io/react/docs/forms/date-range-picker/',
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
        name: 'Multi Select',
        href: 'https://coreui.io/react/docs/forms/multi-select/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        type: 'item',
        name: 'OTP Input',
        href: 'https://coreui.io/react/docs/forms/one-time-password-input/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        type: 'item',
        name: 'Password Input',
        href: 'https://coreui.io/react/docs/forms/password-input/',
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
        name: 'Range Slider',
        href: 'https://coreui.io/react/docs/forms/range-slider/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        type: 'item',
        name: 'Rating',
        href: 'https://coreui.io/react/docs/forms/rating/',
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
        name: 'Stepper',
        href: 'https://coreui.io/react/docs/forms/stepper/',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        type: 'item',
        name: 'Time Picker',
        href: 'https://coreui.io/react/docs/forms/time-picker/',
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
        name: 'Flags',
        to: '/icons/flags',
      },
      {
        type: 'item',
        name: 'Brands',
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
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <DescriptionIcon />,
  },
]

export default _nav
