import routes from '../routes'

describe('Routes Configuration', () => {
  describe('Structure', () => {
    test('exports an array', () => {
      expect(Array.isArray(routes)).toBe(true)
    })

    test('has route definitions', () => {
      expect(routes.length).toBeGreaterThan(0)
    })

    test('all routes have a path property', () => {
      routes.forEach(route => {
        expect(route.path).toBeDefined()
        expect(typeof route.path).toBe('string')
      })
    })

    test('all routes have a name property', () => {
      routes.forEach(route => {
        expect(route.name).toBeDefined()
        expect(typeof route.name).toBe('string')
      })
    })
  })

  describe('Home Route', () => {
    test('has home route at root path', () => {
      const homeRoute = routes.find(route => route.path === '/')
      expect(homeRoute).toBeDefined()
      expect(homeRoute.name).toBe('Home')
    })

    test('home route is exact', () => {
      const homeRoute = routes.find(route => route.path === '/')
      expect(homeRoute.exact).toBe(true)
    })
  })

  describe('Dashboard Route', () => {
    test('has dashboard route', () => {
      const dashboardRoute = routes.find(route => route.path === '/dashboard')
      expect(dashboardRoute).toBeDefined()
      expect(dashboardRoute.name).toBe('Dashboard')
    })

    test('dashboard route has element', () => {
      const dashboardRoute = routes.find(route => route.path === '/dashboard')
      expect(dashboardRoute.element).toBeDefined()
    })
  })

  describe('Theme Routes', () => {
    test('has theme route', () => {
      const themeRoute = routes.find(route => route.path === '/theme')
      expect(themeRoute).toBeDefined()
      expect(themeRoute.name).toBe('Theme')
    })

    test('has colors route', () => {
      const colorsRoute = routes.find(route => route.path === '/theme/colors')
      expect(colorsRoute).toBeDefined()
      expect(colorsRoute.name).toBe('Colors')
    })

    test('has typography route', () => {
      const typographyRoute = routes.find(route => route.path === '/theme/typography')
      expect(typographyRoute).toBeDefined()
      expect(typographyRoute.name).toBe('Typography')
    })
  })

  describe('Base Routes', () => {
    const baseRoutes = [
      { path: '/base', name: 'Base' },
      { path: '/base/accordion', name: 'Accordion' },
      { path: '/base/breadcrumbs', name: 'Breadcrumbs' },
      { path: '/base/cards', name: 'Cards' },
      { path: '/base/carousels', name: 'Carousel' },
      { path: '/base/collapses', name: 'Collapse' },
      { path: '/base/list-groups', name: 'List Groups' },
      { path: '/base/navs', name: 'Navs' },
      { path: '/base/paginations', name: 'Paginations' },
      { path: '/base/placeholders', name: 'Placeholders' },
      { path: '/base/popovers', name: 'Popovers' },
      { path: '/base/progress', name: 'Progress' },
      { path: '/base/spinners', name: 'Spinners' },
      { path: '/base/tabs', name: 'Tabs' },
      { path: '/base/tables', name: 'Tables' },
      { path: '/base/tooltips', name: 'Tooltips' },
    ]

    baseRoutes.forEach(({ path, name }) => {
      test(`has ${name} route at ${path}`, () => {
        const route = routes.find(r => r.path === path)
        expect(route).toBeDefined()
        expect(route.name).toBe(name)
      })
    })
  })

  describe('Button Routes', () => {
    const buttonRoutes = [
      { path: '/buttons', name: 'Buttons' },
      { path: '/buttons/buttons', name: 'Buttons' },
      { path: '/buttons/dropdowns', name: 'Dropdowns' },
      { path: '/buttons/button-groups', name: 'Button Groups' },
    ]

    buttonRoutes.forEach(({ path, name }) => {
      test(`has ${name} route at ${path}`, () => {
        const route = routes.find(r => r.path === path)
        expect(route).toBeDefined()
        expect(route.name).toBe(name)
      })
    })
  })

  describe('Form Routes', () => {
    const formRoutes = [
      { path: '/forms', name: 'Forms' },
      { path: '/forms/form-control', name: 'Form Control' },
      { path: '/forms/select', name: 'Select' },
      { path: '/forms/checks-radios', name: 'Checks & Radios' },
      { path: '/forms/range', name: 'Range' },
      { path: '/forms/input-group', name: 'Input Group' },
      { path: '/forms/floating-labels', name: 'Floating Labels' },
      { path: '/forms/layout', name: 'Layout' },
      { path: '/forms/validation', name: 'Validation' },
    ]

    formRoutes.forEach(({ path, name }) => {
      test(`has ${name} route at ${path}`, () => {
        const route = routes.find(r => r.path === path)
        expect(route).toBeDefined()
        expect(route.name).toBe(name)
      })
    })
  })

  describe('Charts Route', () => {
    test('has charts route', () => {
      const chartsRoute = routes.find(route => route.path === '/charts')
      expect(chartsRoute).toBeDefined()
      expect(chartsRoute.name).toBe('Charts')
    })
  })

  describe('Icon Routes', () => {
    const iconRoutes = [
      { path: '/icons', name: 'Icons' },
      { path: '/icons/coreui-icons', name: 'CoreUI Icons' },
      { path: '/icons/flags', name: 'Flags' },
      { path: '/icons/brands', name: 'Brands' },
    ]

    iconRoutes.forEach(({ path, name }) => {
      test(`has ${name} route at ${path}`, () => {
        const route = routes.find(r => r.path === path)
        expect(route).toBeDefined()
        expect(route.name).toBe(name)
      })
    })
  })

  describe('Notification Routes', () => {
    const notificationRoutes = [
      { path: '/notifications', name: 'Notifications' },
      { path: '/notifications/alerts', name: 'Alerts' },
      { path: '/notifications/badges', name: 'Badges' },
      { path: '/notifications/modals', name: 'Modals' },
      { path: '/notifications/toasts', name: 'Toasts' },
    ]

    notificationRoutes.forEach(({ path, name }) => {
      test(`has ${name} route at ${path}`, () => {
        const route = routes.find(r => r.path === path)
        expect(route).toBeDefined()
        expect(route.name).toBe(name)
      })
    })
  })

  describe('Widgets Route', () => {
    test('has widgets route', () => {
      const widgetsRoute = routes.find(route => route.path === '/widgets')
      expect(widgetsRoute).toBeDefined()
      expect(widgetsRoute.name).toBe('Widgets')
    })
  })

  describe('Route Elements', () => {
    test('routes with elements have lazy-loaded components', () => {
      const routesWithElements = routes.filter(route => route.element)
      routesWithElements.forEach(route => {
        expect(route.element).toBeDefined()
        expect(typeof route.element).toBe('object')
      })
    })

    test('home route does not have an element', () => {
      const homeRoute = routes.find(route => route.path === '/')
      expect(homeRoute.element).toBeUndefined()
    })
  })

  describe('Exact Routes', () => {
    test('parent routes are marked as exact', () => {
      const exactRoutes = routes.filter(route => route.exact === true)
      expect(exactRoutes.length).toBeGreaterThan(0)
    })

    test('home route is exact', () => {
      const homeRoute = routes.find(route => route.path === '/')
      expect(homeRoute.exact).toBe(true)
    })

    test('base parent route is exact', () => {
      const baseRoute = routes.find(route => route.path === '/base')
      expect(baseRoute.exact).toBe(true)
    })

    test('forms parent route is exact', () => {
      const formsRoute = routes.find(route => route.path === '/forms')
      expect(formsRoute.exact).toBe(true)
    })

    test('icons parent route is exact', () => {
      const iconsRoute = routes.find(route => route.path === '/icons')
      expect(iconsRoute.exact).toBe(true)
    })

    test('notifications parent route is exact', () => {
      const notificationsRoute = routes.find(route => route.path === '/notifications')
      expect(notificationsRoute.exact).toBe(true)
    })
  })

  describe('Route Count', () => {
    test('has expected number of routes', () => {
      expect(routes.length).toBeGreaterThanOrEqual(40)
    })
  })
})
