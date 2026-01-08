import { describe, it, expect } from 'vitest'
import _nav from '../_nav'

describe('Navigation Configuration', () => {
  it('should export an array of navigation items', () => {
    expect(Array.isArray(_nav)).toBe(true)
    expect(_nav.length).toBeGreaterThan(0)
  })

  it('should have Dashboard as first item', () => {
    expect(_nav[0].name).toBe('Dashboard')
    expect(_nav[0].to).toBe('/dashboard')
  })

  it('should have Theme title', () => {
    const themeTitle = _nav.find((item) => item.name === 'Theme')
    expect(themeTitle).toBeDefined()
  })

  it('should have Colors navigation item', () => {
    const colors = _nav.find((item) => item.name === 'Colors')
    expect(colors).toBeDefined()
    expect(colors.to).toBe('/theme/colors')
  })

  it('should have Typography navigation item', () => {
    const typography = _nav.find((item) => item.name === 'Typography')
    expect(typography).toBeDefined()
    expect(typography.to).toBe('/theme/typography')
  })

  it('should have Base navigation group', () => {
    const base = _nav.find((item) => item.name === 'Base')
    expect(base).toBeDefined()
    expect(base.items).toBeDefined()
    expect(base.items.length).toBeGreaterThan(0)
  })

  it('should have Buttons navigation group', () => {
    const buttons = _nav.find((item) => item.name === 'Buttons')
    expect(buttons).toBeDefined()
    expect(buttons.items).toBeDefined()
  })

  it('should have Forms navigation group', () => {
    const forms = _nav.find((item) => item.name === 'Forms')
    expect(forms).toBeDefined()
    expect(forms.items).toBeDefined()
  })

  it('should have Charts navigation item', () => {
    const charts = _nav.find((item) => item.name === 'Charts')
    expect(charts).toBeDefined()
    expect(charts.to).toBe('/charts')
  })

  it('should have Icons navigation group', () => {
    const icons = _nav.find((item) => item.name === 'Icons')
    expect(icons).toBeDefined()
    expect(icons.items).toBeDefined()
  })

  it('should have Notifications navigation group', () => {
    const notifications = _nav.find((item) => item.name === 'Notifications')
    expect(notifications).toBeDefined()
    expect(notifications.items).toBeDefined()
  })

  it('should have Widgets navigation item', () => {
    const widgets = _nav.find((item) => item.name === 'Widgets')
    expect(widgets).toBeDefined()
    expect(widgets.to).toBe('/widgets')
  })

  it('should have Pages navigation group', () => {
    const pages = _nav.find((item) => item.name === 'Pages')
    expect(pages).toBeDefined()
    expect(pages.items).toBeDefined()
  })

  it('should have Docs navigation item with external link', () => {
    const docs = _nav.find((item) => item.name === 'Docs')
    expect(docs).toBeDefined()
    expect(docs.href).toBe('https://coreui.io/react/docs/templates/installation/')
  })

  it('should have badge on Dashboard item', () => {
    expect(_nav[0].badge).toBeDefined()
    expect(_nav[0].badge.color).toBe('info')
    expect(_nav[0].badge.text).toBe('NEW')
  })

  it('should have badge on Widgets item', () => {
    const widgets = _nav.find((item) => item.name === 'Widgets')
    expect(widgets.badge).toBeDefined()
    expect(widgets.badge.color).toBe('info')
    expect(widgets.badge.text).toBe('NEW')
  })
})
