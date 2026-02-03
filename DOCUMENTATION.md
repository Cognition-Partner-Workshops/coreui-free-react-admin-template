# CoreUI Free React Admin Template - Technical Documentation

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Project Structure](#project-structure)
4. [Core Application Files](#core-application-files)
5. [Layout System](#layout-system)
6. [Components](#components)
7. [Routing and Navigation](#routing-and-navigation)
8. [State Management](#state-management)
9. [Views and Pages](#views-and-pages)
10. [Styling System](#styling-system)
11. [Build Configuration](#build-configuration)
12. [Development Guide](#development-guide)
13. [API Reference](#api-reference)

---

## Overview

The CoreUI Free React Admin Template is a production-ready administrative dashboard framework built with React 19. It provides a comprehensive foundation for building web-based administrative interfaces, data dashboards, and control panels.

### Key Features

The template offers a pre-built admin shell with a complete layout system featuring responsive sidebar navigation, a header with theme switching capabilities, and content routing. It includes over 40 component examples serving as living documentation for CoreUI React components including forms, tables, modals, alerts, and charts. The built-in theme management system supports light, dark, and auto theme switching with persistence. Authentication scaffolding provides login, register, and error page templates ready for customization.

### Technology Stack

The application is built on React 19.2.3 with React Router DOM 7.11.0 for routing and Redux 5.0.1 for state management. The UI framework is CoreUI React 5.9.2 with CoreUI 5.5.0 CSS framework. Chart.js 4.5.1 powers the data visualization through CoreUI React ChartJS 3.0.0. The build system uses Vite 7.3.0 with Sass 1.97.0 for CSS preprocessing.

---

## Architecture

### Application Bootstrap Flow

The application follows a standard React bootstrapping pattern. The browser loads `index.html` which defines the root DOM element. This HTML file loads `/src/index.js` as an ES module. The index.js file creates a React root and renders the application wrapped in a Redux Provider. The App component sets up routing and renders either the DefaultLayout for authenticated views or page-specific views for login, register, and error pages. The DefaultLayout composes the Header, Sidebar, Content, and Footer components. Finally, AppContent matches URLs to routes and lazy-loads view components.

### Component Hierarchy

```
App
├── HashRouter
│   └── Suspense
│       └── Routes
│           ├── Login (standalone)
│           ├── Register (standalone)
│           ├── Page404 (standalone)
│           ├── Page500 (standalone)
│           └── DefaultLayout (main app shell)
│               ├── AppSidebar
│               │   ├── CSidebarHeader (logo)
│               │   ├── AppSidebarNav (navigation)
│               │   └── CSidebarFooter (toggler)
│               ├── AppHeader
│               │   ├── Navigation links
│               │   ├── Theme switcher
│               │   ├── AppHeaderDropdown (user menu)
│               │   └── AppBreadcrumb
│               ├── AppContent
│               │   └── Routes (lazy-loaded views)
│               └── AppFooter
```

---

## Project Structure

```
coreui-free-react-admin-template/
├── .github/                    # GitHub configuration
│   ├── workflows/              # CI/CD pipelines
│   ├── ISSUE_TEMPLATE/         # Bug report and feature request templates
│   ├── CONTRIBUTING.md         # Contribution guidelines
│   ├── CODE_OF_CONDUCT.md      # Community standards
│   ├── COMMIT_CONVENTION.md    # Commit message guidelines
│   └── SUPPORT.md              # Support information
├── public/                     # Static assets served directly
│   ├── favicon.ico             # Site icon
│   └── manifest.json           # PWA manifest
├── src/
│   ├── assets/                 # Images, icons, brand assets
│   │   ├── brand/              # Logo and sygnet SVG components
│   │   │   ├── logo.js         # Full logo SVG
│   │   │   └── sygnet.js       # Compact logo SVG
│   │   └── images/             # Avatar images and other assets
│   │       └── avatars/        # User avatar images (1-8.jpg)
│   ├── components/             # Reusable UI components
│   │   ├── index.js            # Component exports
│   │   ├── AppHeader.js        # Header component
│   │   ├── AppSidebar.js       # Sidebar component
│   │   ├── AppSidebarNav.js    # Sidebar navigation renderer
│   │   ├── AppContent.js       # Content router outlet
│   │   ├── AppFooter.js        # Footer component
│   │   ├── AppBreadcrumb.js    # Breadcrumb navigation
│   │   ├── DocsComponents.js   # Documentation header component
│   │   ├── DocsExample.js      # Example preview/code component
│   │   ├── DocsIcons.js        # Icon documentation component
│   │   ├── DocsLink.js         # Documentation link component
│   │   └── header/             # Header sub-components
│   │       ├── index.js        # Header component exports
│   │       └── AppHeaderDropdown.js  # User dropdown menu
│   ├── layout/                 # Layout components
│   │   └── DefaultLayout.js    # Main application layout
│   ├── views/                  # Application views
│   │   ├── dashboard/          # Main dashboard
│   │   │   ├── Dashboard.js    # Dashboard view
│   │   │   └── MainChart.js    # Traffic chart component
│   │   ├── pages/              # Authentication and error pages
│   │   │   ├── login/Login.js
│   │   │   ├── register/Register.js
│   │   │   ├── page404/Page404.js
│   │   │   └── page500/Page500.js
│   │   ├── base/               # Base UI component demos
│   │   ├── buttons/            # Button component demos
│   │   ├── forms/              # Form component demos
│   │   ├── notifications/      # Alert, toast, modal demos
│   │   ├── icons/              # Icon gallery displays
│   │   ├── charts/             # Chart.js examples
│   │   ├── theme/              # Theme-related demos
│   │   └── widgets/            # Widget components
│   ├── scss/                   # Stylesheets
│   │   ├── style.scss          # Main entrypoint
│   │   ├── examples.scss       # Example-specific styles
│   │   └── vendors/            # Third-party styles
│   │       └── simplebar.scss  # Simplebar scrollbar styles
│   ├── _nav.js                 # Sidebar navigation configuration
│   ├── routes.js               # Application route definitions
│   ├── store.js                # Redux store configuration
│   ├── App.js                  # Root application component
│   └── index.js                # React rendering entrypoint
├── index.html                  # HTML template
├── package.json                # npm dependencies and scripts
├── vite.config.mjs             # Vite build configuration
├── eslint.config.mjs           # ESLint configuration
├── .prettierrc.js              # Prettier configuration
├── .browserslistrc             # Browser support configuration
├── .editorconfig               # Editor configuration
└── LICENSE                     # MIT License
```

---

## Core Application Files

### index.js - Application Entry Point

Location: `src/index.js`

This file serves as the React application entry point. It creates a React root using `createRoot` from `react-dom/client` and renders the application wrapped in a Redux Provider for state management.

```javascript
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'

import App from './App'
import store from './store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
```

The `core-js` import provides polyfills for older browser compatibility.

### App.js - Root Application Component

Location: `src/App.js`

The App component is the root of the application. It sets up routing using HashRouter and manages theme state using the `useColorModes` hook from CoreUI.

Key responsibilities include configuring the HashRouter for client-side routing, managing theme state with light, dark, and auto modes, handling URL-based theme parameters for external theme switching, providing a Suspense boundary with a loading spinner for lazy-loaded components, and defining top-level routes for authentication pages and the main layout.

The component checks for a theme parameter in the URL, allowing external links to set the theme. If no theme is set, it falls back to the stored theme from Redux state.

```javascript
const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }
    if (isColorModeSet()) {
      return
    }
    setColorMode(storedTheme)
  }, [])

  return (
    <HashRouter>
      <Suspense fallback={<CSpinner />}>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/404" element={<Page404 />} />
          <Route exact path="/500" element={<Page500 />} />
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
```

### store.js - Redux Store Configuration

Location: `src/store.js`

The Redux store manages global application state using the legacy `createStore` function. The store maintains two pieces of state: `sidebarShow` controls sidebar visibility and `theme` stores the current color theme.

```javascript
import { legacy_createStore as createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  theme: 'light',
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
```

The reducer uses a simple `set` action type that spreads any additional properties into the state, allowing flexible state updates like `dispatch({ type: 'set', sidebarShow: false })`.

---

## Layout System

### DefaultLayout.js - Main Application Layout

Location: `src/layout/DefaultLayout.js`

The DefaultLayout component orchestrates the overall page structure. It composes the sidebar, header, content area, and footer into a cohesive layout.

```javascript
const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}
```

The layout uses flexbox to create a full-height layout where the content area grows to fill available space. The `wrapper` class handles responsive padding based on sidebar state.

### Layout CSS Structure

The wrapper class in `style.scss` manages the responsive behavior:

```scss
.wrapper {
  width: 100%;
  padding-inline: var(--cui-sidebar-occupy-start, 0) var(--cui-sidebar-occupy-end, 0);
  will-change: auto;
  @include transition(padding .15s);
}
```

This uses CSS custom properties set by the sidebar to automatically adjust content padding when the sidebar is visible or hidden.

---

## Components

### AppSidebar.js - Sidebar Component

Location: `src/components/AppSidebar.js`

The AppSidebar component renders the collapsible side navigation. It uses Redux to manage visibility state and supports both full and narrow (unfoldable) modes.

Key features include a dark color scheme with fixed positioning, brand logo display with full and narrow variants, close button for mobile views, navigation items rendered via AppSidebarNav, and a toggler for narrow/wide mode switching.

```javascript
const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
          <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}
```

### AppSidebarNav.js - Navigation Renderer

Location: `src/components/AppSidebarNav.js`

This component recursively renders the navigation structure defined in `_nav.js`. It handles three types of navigation elements: single items (CNavItem), groups with nested items (CNavGroup), and section titles (CNavTitle).

The component uses SimpleBar for custom scrollbar styling and supports badges, icons, and both internal routes (using `to`) and external links (using `href`).

```javascript
export const AppSidebarNav = ({ items }) => {
  const navLink = (name, icon, badge, indent = false) => {
    return (
      <>
        {icon ? icon : indent && (
          <span className="nav-icon">
            <span className="nav-icon-bullet"></span>
          </span>
        )}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto" size="sm">
            {badge.text}
          </CBadge>
        )}
      </>
    )
  }

  const navItem = (item, index, indent = false) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component
    return (
      <Component as="div" key={index}>
        {rest.to || rest.href ? (
          <CNavLink
            {...(rest.to && { as: NavLink })}
            {...(rest.href && { target: '_blank', rel: 'noopener noreferrer' })}
            {...rest}
          >
            {navLink(name, icon, badge, indent)}
          </CNavLink>
        ) : (
          navLink(name, icon, badge, indent)
        )}
      </Component>
    )
  }

  const navGroup = (item, index) => {
    const { component, name, icon, items, to, ...rest } = item
    const Component = component
    return (
      <Component compact as="div" key={index} toggler={navLink(name, icon)} {...rest}>
        {items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index, true),
        )}
      </Component>
    )
  }

  return (
    <CSidebarNav as={SimpleBar}>
      {items &&
        items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
    </CSidebarNav>
  )
}
```

### AppHeader.js - Header Component

Location: `src/components/AppHeader.js`

The AppHeader component provides the top navigation bar with several features: a hamburger menu toggle for sidebar visibility, navigation links for Dashboard, Users, and Settings, notification icons for bells, lists, and messages, a theme switcher dropdown supporting light, dark, and auto modes, a user dropdown menu via AppHeaderDropdown, and breadcrumb navigation via AppBreadcrumb.

The header adds a shadow effect on scroll using a scroll event listener:

```javascript
useEffect(() => {
  const handleScroll = () => {
    headerRef.current &&
      headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
  }
  document.addEventListener('scroll', handleScroll)
  return () => document.removeEventListener('scroll', handleScroll)
}, [])
```

### AppContent.js - Content Router

Location: `src/components/AppContent.js`

The AppContent component serves as the dynamic router outlet that renders matched route components. It wraps routes in a Suspense boundary for lazy loading support.

```javascript
const AppContent = () => {
  return (
    <CContainer className="px-4" lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}
```

### AppBreadcrumb.js - Breadcrumb Navigation

Location: `src/components/AppBreadcrumb.js`

This component generates breadcrumb navigation based on the current URL path. It parses the pathname and matches each segment against the routes configuration to build the breadcrumb trail.

```javascript
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
    <CBreadcrumb className="my-0">
      <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
      {breadcrumbs.map((breadcrumb, index) => (
        <CBreadcrumbItem
          {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
          key={index}
        >
          {breadcrumb.name}
        </CBreadcrumbItem>
      ))}
    </CBreadcrumb>
  )
}
```

### AppFooter.js - Footer Component

Location: `src/components/AppFooter.js`

A simple footer component displaying copyright information and links to CoreUI.

### AppHeaderDropdown.js - User Menu

Location: `src/components/header/AppHeaderDropdown.js`

This component renders the user avatar dropdown menu in the header. It displays user account options including Updates, Messages, Tasks, Comments, Profile, Settings, Payments, Projects, and Lock Account.

### Documentation Components

The template includes several components for displaying component documentation:

**DocsComponents** renders a promotional banner linking to CoreUI documentation. It accepts an `href` prop that is appended to the CoreUI docs base URL.

**DocsExample** provides a tabbed interface with Preview and Code tabs. The Preview tab shows the component in action, while the Code tab links to the source code in CoreUI documentation.

**DocsLink** renders an inline documentation link, typically used in card headers.

**DocsIcons** displays icon documentation with links to the CoreUI icons page.

---

## Routing and Navigation

### routes.js - Route Configuration

Location: `src/routes.js`

This file defines all application routes as an array of route objects. Each route specifies a path, name (used for breadcrumbs), and a lazy-loaded element component.

```javascript
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
// ... more lazy imports

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  // Base components
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  // ... more routes
]
```

Route categories include Theme routes for colors and typography, Base routes for accordion, breadcrumbs, cards, carousels, collapses, list groups, navs, paginations, placeholders, popovers, progress, spinners, tabs, tables, and tooltips, Button routes for buttons, dropdowns, and button groups, Form routes for form control, select, checks and radios, range, input group, floating labels, layout, and validation, Chart routes for various chart types, Icon routes for CoreUI icons, flags, and brands, Notification routes for alerts, badges, modals, and toasts, and Widget routes for dashboard widgets.

### _nav.js - Navigation Configuration

Location: `src/_nav.js`

This file exports an array defining the sidebar navigation structure. Each item specifies a component type (CNavItem, CNavGroup, or CNavTitle), name, route, icon, and optional badge.

```javascript
const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
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
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      // ... more items
    ],
  },
  // ... more navigation items
]
```

Navigation items can link to internal routes using `to` or external URLs using `href`. External links automatically open in new tabs with appropriate security attributes.

---

## State Management

### Redux Store Structure

The application uses Redux for global state management with a simple structure:

```javascript
{
  sidebarShow: boolean,      // Controls sidebar visibility
  sidebarUnfoldable: boolean, // Controls narrow/wide sidebar mode
  theme: 'light' | 'dark'    // Current color theme
}
```

### State Actions

The store uses a single action type `set` that accepts any state properties:

```javascript
// Toggle sidebar visibility
dispatch({ type: 'set', sidebarShow: !sidebarShow })

// Toggle sidebar unfoldable mode
dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })

// Set theme
dispatch({ type: 'set', theme: 'dark' })
```

### Theme Management

Theme state is managed through CoreUI's `useColorModes` hook, which handles theme persistence to localStorage and dispatches a `ColorSchemeChange` event on the document element when the theme changes.

Components that need to respond to theme changes (like charts) listen for this event:

```javascript
useEffect(() => {
  const handleColorSchemeChange = () => {
    // Update chart colors based on new theme
  }
  document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)
  return () =>
    document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
}, [])
```

---

## Views and Pages

### Dashboard

Location: `src/views/dashboard/Dashboard.js`

The main dashboard view showcases the template's capabilities with statistical widgets (WidgetsDropdown) displaying Users, Income, Conversion Rate, and Sessions, a traffic chart (MainChart) with time period selection, brand widgets (WidgetsBrand) for social media statistics, traffic and sales statistics with progress bars, and a user activity table with avatars, country flags, and payment icons.

### MainChart

Location: `src/views/dashboard/MainChart.js`

A line chart component using Chart.js that displays traffic data. It demonstrates theme-aware chart styling by listening to the ColorSchemeChange event and updating chart colors accordingly.

```javascript
const MainChart = () => {
  const chartRef = useRef(null)

  useEffect(() => {
    const handleColorSchemeChange = () => {
      if (chartRef.current) {
        setTimeout(() => {
          chartRef.current.options.scales.x.grid.borderColor = getStyle('--cui-border-color-translucent')
          chartRef.current.options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
          chartRef.current.options.scales.x.ticks.color = getStyle('--cui-body-color')
          // ... update y-axis colors
          chartRef.current.update()
        })
      }
    }
    document.documentElement.addEventListener('ColorSchemeChange', handleColorSchemeChange)
    return () =>
      document.documentElement.removeEventListener('ColorSchemeChange', handleColorSchemeChange)
  }, [chartRef])

  return (
    <CChartLine
      ref={chartRef}
      data={{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [/* chart data */],
      }}
      options={{/* chart options */}}
    />
  )
}
```

### Widget Components

**WidgetsDropdown** (`src/views/widgets/WidgetsDropdown.js`) displays a row of four statistical widgets with embedded charts. Each widget shows a metric value, trend indicator, and a small chart visualization.

**WidgetsBrand** (`src/views/widgets/WidgetsBrand.js`) displays social media brand widgets for Facebook, Twitter, LinkedIn, and a calendar widget. The `withCharts` prop conditionally renders chart backgrounds.

### Authentication Pages

**Login** (`src/views/pages/login/Login.js`) provides a login form with username and password fields, plus a link to the registration page.

**Register** (`src/views/pages/register/Register.js`) provides a registration form with username, email, password, and password confirmation fields.

**Page404** (`src/views/pages/page404/Page404.js`) displays a 404 error page for not found routes.

**Page500** (`src/views/pages/page500/Page500.js`) displays a 500 error page for server errors.

### Component Demo Views

The template includes comprehensive demo pages for all CoreUI components. Each demo page follows a consistent pattern using DocsComponents for documentation links and DocsExample for live previews with code links.

Example structure from Accordion.js:

```javascript
const Accordion = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsComponents href="components/accordion/" />
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Accordion</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Click the accordions below to expand/collapse the accordion content.
            </p>
            <DocsExample href="components/accordion">
              <CAccordion activeItemKey={2}>
                {/* Accordion items */}
              </CAccordion>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
```

### Charts View

Location: `src/views/charts/Charts.js`

Demonstrates various Chart.js chart types including Bar, Line, Doughnut, Pie, Polar Area, and Radar charts.

---

## Styling System

### SCSS Structure

The styling system is built on CoreUI's CSS framework with custom overrides.

**style.scss** (`src/scss/style.scss`) is the main entrypoint that imports CoreUI framework, CoreUI ChartJS styles, and vendor styles like SimpleBar.

```scss
@use "@coreui/coreui/scss/coreui" as * with ( 
  $enable-deprecation-messages: false,
);
@use "@coreui/chartjs/scss/coreui-chartjs";
@use "vendors/simplebar";
```

**Custom Styles** define layout-specific styles:

```scss
body {
  background-color: var(--cui-tertiary-bg);
}

.wrapper {
  width: 100%;
  padding-inline: var(--cui-sidebar-occupy-start, 0) var(--cui-sidebar-occupy-end, 0);
  will-change: auto;
  @include transition(padding .15s);
}

.header > .container-fluid,
.sidebar-header {
  min-height: calc(4rem + 1px);
}
```

**Dark Mode Styles** are defined using the `color-mode` mixin:

```scss
@include color-mode(dark) {
  body {
    background-color: var(--cui-dark-bg-subtle);
  }

  .footer {
    --cui-footer-bg: var(--cui-body-bg);
  }
}
```

### CSS Custom Properties

The template uses CoreUI's CSS custom properties (CSS variables) for theming. Key variables include `--cui-primary` for primary color, `--cui-body-bg` for body background, `--cui-body-color` for body text color, `--cui-border-color-translucent` for border colors, `--cui-sidebar-occupy-start` for sidebar width offset, and `--cui-tertiary-bg` for tertiary background.

These variables automatically update when the theme changes, enabling seamless light/dark mode switching.

### Accessing CSS Variables in JavaScript

Use the `getStyle` utility from `@coreui/utils` to read CSS custom property values:

```javascript
import { getStyle } from '@coreui/utils'

const primaryColor = getStyle('--cui-primary')
const borderColor = getStyle('--cui-border-color-translucent')
```

---

## Build Configuration

### Vite Configuration

Location: `vite.config.mjs`

The Vite configuration defines the build process and development server settings.

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import autoprefixer from 'autoprefixer'

export default defineConfig(() => {
  return {
    base: './',
    build: {
      outDir: 'build',
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer({}),
        ],
      },
    },
    esbuild: {
      loader: 'jsx',
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
    optimizeDeps: {
      force: true,
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    },
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: 'src/',
          replacement: `${path.resolve(__dirname, 'src')}/`,
        },
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss'],
    },
    server: {
      port: 3000,
    },
  }
})
```

Key configuration options include `base: './'` for relative asset paths enabling deployment to subdirectories, `build.outDir: 'build'` for output directory, `autoprefixer` for CSS vendor prefixing, JSX loader configuration for .js files, path alias `src/` mapping to the src directory, and development server on port 3000.

### ESLint Configuration

Location: `eslint.config.mjs`

The ESLint configuration uses the flat config format with React and Prettier plugins.

```javascript
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

export default [
  { ignores: ['eslint.config.mjs'] },
  {
    ...eslintPluginReact.configs.flat.recommended,
    ...eslintPluginReact.configs.flat['jsx-runtime'],
    files: ['src/**/*.{js,jsx}'],
    plugins: {
      eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
    },
  },
  eslintPluginPrettierRecommended,
]
```

### Prettier Configuration

Location: `.prettierrc.js`

```javascript
module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
}
```

---

## Development Guide

### Getting Started

Install dependencies using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### Development Server

Start the development server with hot reload:

```bash
npm start
```

The application will be available at http://localhost:3000.

### Production Build

Build for production:

```bash
npm run build
```

The optimized build will be output to the `build/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run serve
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

### Adding New Routes

To add a new route, first create the view component in `src/views/`, then add a lazy import in `src/routes.js`, add the route configuration to the routes array, and optionally add a navigation item in `src/_nav.js`.

Example:

```javascript
// In routes.js
const MyNewView = React.lazy(() => import('./views/my-new-view/MyNewView'))

const routes = [
  // ... existing routes
  { path: '/my-new-view', name: 'My New View', element: MyNewView },
]
```

```javascript
// In _nav.js
const _nav = [
  // ... existing items
  {
    component: CNavItem,
    name: 'My New View',
    to: '/my-new-view',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
]
```

### Adding New Components

Create reusable components in `src/components/` and export them from `src/components/index.js` for easy importing.

### Customizing the Theme

To customize colors and styling, modify CSS custom properties in `src/scss/style.scss`, override CoreUI variables before the import, or add custom styles after the CoreUI import.

---

## API Reference

### Redux Actions

**Set Sidebar Visibility**
```javascript
dispatch({ type: 'set', sidebarShow: boolean })
```

**Set Sidebar Unfoldable**
```javascript
dispatch({ type: 'set', sidebarUnfoldable: boolean })
```

**Set Theme**
```javascript
dispatch({ type: 'set', theme: 'light' | 'dark' })
```

### Navigation Item Structure

```typescript
interface NavItem {
  component: CNavItem | CNavGroup | CNavTitle
  name: string | ReactNode
  to?: string           // Internal route
  href?: string         // External URL
  icon?: ReactNode
  badge?: {
    color: string
    text: string
  }
  items?: NavItem[]     // For CNavGroup
}
```

### Route Structure

```typescript
interface Route {
  path: string
  name: string
  element?: React.LazyExoticComponent<React.ComponentType>
  exact?: boolean
}
```

### Theme Hook

```javascript
const { colorMode, setColorMode, isColorModeSet } = useColorModes(storageKey)
```

The `colorMode` property returns the current mode as 'light', 'dark', or 'auto'. The `setColorMode` function sets the color mode. The `isColorModeSet` function returns true if a mode has been explicitly set.

### CSS Utility Function

```javascript
import { getStyle } from '@coreui/utils'

const value = getStyle('--cui-property-name')
```

Returns the computed value of a CSS custom property.

---

## Dependencies

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| @coreui/chartjs | ^4.1.0 | Chart.js integration for CoreUI |
| @coreui/coreui | ^5.5.0 | CoreUI CSS framework |
| @coreui/icons | ^3.0.1 | CoreUI icon library |
| @coreui/icons-react | ^2.3.0 | React components for CoreUI icons |
| @coreui/react | ^5.9.2 | CoreUI React components |
| @coreui/react-chartjs | ^3.0.0 | React Chart.js components |
| @coreui/utils | ^2.0.2 | CoreUI utility functions |
| @popperjs/core | ^2.11.8 | Tooltip/popover positioning |
| chart.js | ^4.5.1 | Chart library |
| classnames | ^2.5.1 | Conditional CSS class utility |
| core-js | ^3.47.0 | JavaScript polyfills |
| prop-types | ^15.8.1 | Runtime type checking |
| react | ^19.2.3 | React library |
| react-dom | ^19.2.3 | React DOM rendering |
| react-redux | ^9.2.0 | React bindings for Redux |
| react-router-dom | ^7.11.0 | React routing |
| redux | 5.0.1 | State management |
| simplebar-react | ^3.3.2 | Custom scrollbar component |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| @vitejs/plugin-react | ^5.1.2 | Vite React plugin |
| autoprefixer | ^10.4.23 | CSS vendor prefixing |
| eslint | ^9.39.2 | JavaScript linting |
| eslint-config-prettier | ^10.1.8 | Prettier ESLint config |
| eslint-plugin-prettier | ^5.5.4 | Prettier ESLint plugin |
| eslint-plugin-react | ^7.37.5 | React ESLint rules |
| eslint-plugin-react-hooks | ^7.0.1 | React Hooks ESLint rules |
| globals | ^16.5.0 | Global variable definitions |
| postcss | ^8.5.6 | CSS processing |
| prettier | 3.7.4 | Code formatting |
| sass | ^1.97.0 | SCSS compilation |
| vite | ^7.3.0 | Build tool |

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Additional Resources

- [CoreUI React Documentation](https://coreui.io/react/docs/)
- [CoreUI Components](https://coreui.io/react/docs/components/)
- [CoreUI Icons](https://coreui.io/icons/)
- [Chart.js Documentation](https://www.chartjs.org/docs/)
- [React Router Documentation](https://reactrouter.com/)
- [Redux Documentation](https://redux.js.org/)
