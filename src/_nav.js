import DashboardIcon from '@mui/icons-material/Dashboard'
import PaletteIcon from '@mui/icons-material/Palette'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import ExtensionIcon from '@mui/icons-material/Extension'
import SmartButtonIcon from '@mui/icons-material/SmartButton'
import DescriptionIcon from '@mui/icons-material/Description'
import BarChartIcon from '@mui/icons-material/BarChart'
import StarIcon from '@mui/icons-material/Star'
import NotificationsIcon from '@mui/icons-material/Notifications'
import WidgetsIcon from '@mui/icons-material/Widgets'
import ArticleIcon from '@mui/icons-material/Article'

const _nav = [
  {
    name: 'Dashboard',
    to: '/dashboard',
    icon: DashboardIcon,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    title: 'Theme',
  },
  {
    name: 'Colors',
    to: '/theme/colors',
    icon: PaletteIcon,
  },
  {
    name: 'Typography',
    to: '/theme/typography',
    icon: TextFieldsIcon,
  },
  {
    title: 'Components',
  },
  {
    name: 'Base',
    to: '/base',
    icon: ExtensionIcon,
    items: [
      { name: 'Accordion', to: '/base/accordion' },
      { name: 'Breadcrumb', to: '/base/breadcrumbs' },
      {
        name: 'Calendar',
        href: 'https://coreui.io/react/docs/components/calendar/',
        external: true,
        badge: { color: 'error', text: 'PRO' },
      },
      { name: 'Cards', to: '/base/cards' },
      { name: 'Carousel', to: '/base/carousels' },
      { name: 'Collapse', to: '/base/collapses' },
      { name: 'List group', to: '/base/list-groups' },
      { name: 'Navs & Tabs', to: '/base/navs' },
      { name: 'Pagination', to: '/base/paginations' },
      { name: 'Placeholders', to: '/base/placeholders' },
      { name: 'Popovers', to: '/base/popovers' },
      { name: 'Progress', to: '/base/progress' },
      {
        name: 'Smart Pagination',
        href: 'https://coreui.io/react/docs/components/smart-pagination/',
        external: true,
        badge: { color: 'error', text: 'PRO' },
      },
      {
        name: 'Smart Table',
        href: 'https://coreui.io/react/docs/components/smart-table/',
        external: true,
        badge: { color: 'error', text: 'PRO' },
      },
      { name: 'Spinners', to: '/base/spinners' },
      { name: 'Tables', to: '/base/tables' },
      { name: 'Tabs', to: '/base/tabs' },
      { name: 'Tooltips', to: '/base/tooltips' },
      {
        name: 'Virtual Scroller',
        href: 'https://coreui.io/react/docs/components/virtual-scroller/',
        external: true,
        badge: { color: 'error', text: 'PRO' },
      },
    ],
  },
  {
    name: 'Buttons',
    to: '/buttons',
    icon: SmartButtonIcon,
    items: [
      { name: 'Buttons', to: '/buttons/buttons' },
      { name: 'Button groups', to: '/buttons/button-groups' },
      { name: 'Dropdowns', to: '/buttons/dropdowns' },
      {
        name: 'Loading Button',
        href: 'https://coreui.io/react/docs/components/loading-button/',
        external: true,
        badge: { color: 'error', text: 'PRO' },
      },
    ],
  },
  {
    name: 'Forms',
    icon: DescriptionIcon,
    items: [
      {
        name: 'Autocomplete',
        href: 'https://coreui.io/react/docs/forms/autocomplete/',
        external: true,
        badge: { color: 'error', text: 'PRO' },
      },
      { name: 'Checks & Radios', to: '/forms/checks-radios' },
      {
        name: 'Date Picker',
        href: 'https://coreui.io/react/docs/forms/date-picker/',
        external: true,
        badge: { color: 'error', text: 'PRO' },
      },
      {
        name: 'Date Range Picker',
        href: 'https://coreui.io/react/docs/forms/date-range-picker/',
        external: true,
        badge: { color: 'error', text: 'PRO' },
      },
      { name: 'Floating Labels', to: '/forms/floating-labels' },
      { name: 'Form Control', to: '/forms/form-control' },
      { name: 'Input Group', to: '/forms/input-group' },
      {
        name: 'Multi Select',
        href: 'https://coreui.io/react/docs/forms/multi-select/',
        external: true,
        badge: { color: 'error', text: 'PRO' },
      },
      {
        name: 'OTP Input',
        href: 'https://coreui.io/react/docs/forms/one-time-password-input/',
        external: true,
        badge: { color: 'error', text: 'PRO' },
      },
      {
        name: 'Password Input',
        href: 'https://coreui.io/react/docs/forms/password-input/',
        external: true,
        badge: { color: 'error', text: 'PRO' },
      },
      { name: 'Range', to: '/forms/range' },
      {
        name: 'Range Slider',
        href: 'https://coreui.io/react/docs/forms/range-slider/',
        external: true,
        badge: { color: 'error', text: 'PRO' },
      },
      {
        name: 'Rating',
        href: 'https://coreui.io/react/docs/forms/rating/',
        external: true,
        badge: { color: 'error', text: 'PRO' },
      },
      { name: 'Select', to: '/forms/select' },
      {
        name: 'Stepper',
        href: 'https://coreui.io/react/docs/forms/stepper/',
        external: true,
        badge: { color: 'error', text: 'PRO' },
      },
      {
        name: 'Time Picker',
        href: 'https://coreui.io/react/docs/forms/time-picker/',
        external: true,
        badge: { color: 'error', text: 'PRO' },
      },
      { name: 'Layout', to: '/forms/layout' },
      { name: 'Validation', to: '/forms/validation' },
    ],
  },
  {
    name: 'Charts',
    to: '/charts',
    icon: BarChartIcon,
  },
  {
    name: 'Icons',
    icon: StarIcon,
    items: [
      { name: 'CoreUI Free', to: '/icons/coreui-icons' },
      { name: 'CoreUI Flags', to: '/icons/flags' },
      { name: 'CoreUI Brands', to: '/icons/brands' },
    ],
  },
  {
    name: 'Notifications',
    icon: NotificationsIcon,
    items: [
      { name: 'Alerts', to: '/notifications/alerts' },
      { name: 'Badges', to: '/notifications/badges' },
      { name: 'Modal', to: '/notifications/modals' },
      { name: 'Toasts', to: '/notifications/toasts' },
    ],
  },
  {
    name: 'Widgets',
    to: '/widgets',
    icon: WidgetsIcon,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    title: 'Extras',
  },
  {
    name: 'Pages',
    icon: StarIcon,
    items: [
      { name: 'Login', to: '/login' },
      { name: 'Register', to: '/register' },
      { name: 'Error 404', to: '/404' },
      { name: 'Error 500', to: '/500' },
    ],
  },
  {
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: ArticleIcon,
    external: true,
  },
]

export default _nav
