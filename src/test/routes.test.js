import { describe, it, expect } from 'vitest'
import routes from '../routes'

describe('Routes Configuration', () => {
  it('should export an array of routes', () => {
    expect(Array.isArray(routes)).toBe(true)
    expect(routes.length).toBeGreaterThan(0)
  })

  it('should have Home route at root path', () => {
    const home = routes.find((route) => route.path === '/')
    expect(home).toBeDefined()
    expect(home.name).toBe('Home')
    expect(home.exact).toBe(true)
  })

  it('should have Dashboard route', () => {
    const dashboard = routes.find((route) => route.path === '/dashboard')
    expect(dashboard).toBeDefined()
    expect(dashboard.name).toBe('Dashboard')
    expect(dashboard.element).toBeDefined()
  })

  it('should have Theme routes', () => {
    const theme = routes.find((route) => route.path === '/theme')
    expect(theme).toBeDefined()
    expect(theme.name).toBe('Theme')

    const colors = routes.find((route) => route.path === '/theme/colors')
    expect(colors).toBeDefined()
    expect(colors.name).toBe('Colors')

    const typography = routes.find((route) => route.path === '/theme/typography')
    expect(typography).toBeDefined()
    expect(typography.name).toBe('Typography')
  })

  it('should have Base routes', () => {
    const base = routes.find((route) => route.path === '/base')
    expect(base).toBeDefined()
    expect(base.name).toBe('Base')

    const accordion = routes.find((route) => route.path === '/base/accordion')
    expect(accordion).toBeDefined()
    expect(accordion.name).toBe('Accordion')
  })

  it('should have Buttons routes', () => {
    const buttons = routes.find((route) => route.path === '/buttons')
    expect(buttons).toBeDefined()
    expect(buttons.name).toBe('Buttons')

    const buttonGroups = routes.find((route) => route.path === '/buttons/button-groups')
    expect(buttonGroups).toBeDefined()
    expect(buttonGroups.name).toBe('Button Groups')
  })

  it('should have Forms routes', () => {
    const forms = routes.find((route) => route.path === '/forms')
    expect(forms).toBeDefined()
    expect(forms.name).toBe('Forms')

    const formControl = routes.find((route) => route.path === '/forms/form-control')
    expect(formControl).toBeDefined()
    expect(formControl.name).toBe('Form Control')
  })

  it('should have Charts route', () => {
    const charts = routes.find((route) => route.path === '/charts')
    expect(charts).toBeDefined()
    expect(charts.name).toBe('Charts')
    expect(charts.element).toBeDefined()
  })

  it('should have Icons routes', () => {
    const icons = routes.find((route) => route.path === '/icons')
    expect(icons).toBeDefined()
    expect(icons.name).toBe('Icons')

    const coreuiIcons = routes.find((route) => route.path === '/icons/coreui-icons')
    expect(coreuiIcons).toBeDefined()
    expect(coreuiIcons.name).toBe('CoreUI Icons')
  })

  it('should have Notifications routes', () => {
    const notifications = routes.find((route) => route.path === '/notifications')
    expect(notifications).toBeDefined()
    expect(notifications.name).toBe('Notifications')

    const alerts = routes.find((route) => route.path === '/notifications/alerts')
    expect(alerts).toBeDefined()
    expect(alerts.name).toBe('Alerts')
  })

  it('should have Widgets route', () => {
    const widgets = routes.find((route) => route.path === '/widgets')
    expect(widgets).toBeDefined()
    expect(widgets.name).toBe('Widgets')
    expect(widgets.element).toBeDefined()
  })

  it('should have all base sub-routes', () => {
    const baseRoutes = [
      '/base/accordion',
      '/base/breadcrumbs',
      '/base/cards',
      '/base/carousels',
      '/base/collapses',
      '/base/list-groups',
      '/base/navs',
      '/base/paginations',
      '/base/placeholders',
      '/base/popovers',
      '/base/progress',
      '/base/spinners',
      '/base/tabs',
      '/base/tables',
      '/base/tooltips',
    ]

    baseRoutes.forEach((path) => {
      const route = routes.find((r) => r.path === path)
      expect(route).toBeDefined()
    })
  })

  it('should have all form sub-routes', () => {
    const formRoutes = [
      '/forms/form-control',
      '/forms/select',
      '/forms/checks-radios',
      '/forms/range',
      '/forms/input-group',
      '/forms/floating-labels',
      '/forms/layout',
      '/forms/validation',
    ]

    formRoutes.forEach((path) => {
      const route = routes.find((r) => r.path === path)
      expect(route).toBeDefined()
    })
  })
})
