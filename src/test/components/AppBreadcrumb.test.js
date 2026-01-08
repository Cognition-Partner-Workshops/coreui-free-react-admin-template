import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AppBreadcrumb from '../../components/AppBreadcrumb'

const renderWithRouter = (component, { route = '/' } = {}) => {
  return render(<MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>)
}

describe('AppBreadcrumb', () => {
  it('should render Home breadcrumb', () => {
    renderWithRouter(<AppBreadcrumb />)
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0)
  })

  it('should render breadcrumbs for dashboard route', () => {
    renderWithRouter(<AppBreadcrumb />, { route: '/dashboard' })
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })

  it('should render breadcrumbs for nested route', () => {
    renderWithRouter(<AppBreadcrumb />, { route: '/theme/colors' })
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Theme')).toBeInTheDocument()
    expect(screen.getByText('Colors')).toBeInTheDocument()
  })

  it('should render breadcrumbs for base accordion route', () => {
    renderWithRouter(<AppBreadcrumb />, { route: '/base/accordion' })
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Base')).toBeInTheDocument()
    expect(screen.getByText('Accordion')).toBeInTheDocument()
  })

  it('should render breadcrumbs for forms route', () => {
    renderWithRouter(<AppBreadcrumb />, { route: '/forms/validation' })
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Forms')).toBeInTheDocument()
    expect(screen.getByText('Validation')).toBeInTheDocument()
  })

  it('should handle unknown routes gracefully', () => {
    renderWithRouter(<AppBreadcrumb />, { route: '/unknown/path' })
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('should render breadcrumbs for icons route', () => {
    renderWithRouter(<AppBreadcrumb />, { route: '/icons/coreui-icons' })
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Icons')).toBeInTheDocument()
    expect(screen.getByText('CoreUI Icons')).toBeInTheDocument()
  })

  it('should render breadcrumbs for notifications route', () => {
    renderWithRouter(<AppBreadcrumb />, { route: '/notifications/alerts' })
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Notifications')).toBeInTheDocument()
    expect(screen.getByText('Alerts')).toBeInTheDocument()
  })
})
