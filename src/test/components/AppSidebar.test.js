import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import AppSidebar from '../../components/AppSidebar'

const renderWithProviders = (component) => {
  return render(
    <Provider store={store}>
      <MemoryRouter>{component}</MemoryRouter>
    </Provider>,
  )
}

describe('AppSidebar', () => {
  it('should render without crashing', () => {
    renderWithProviders(<AppSidebar />)
  })

  it('should render sidebar element', () => {
    const { container } = renderWithProviders(<AppSidebar />)
    expect(container.querySelector('.sidebar')).toBeInTheDocument()
  })

  it('should render sidebar brand', () => {
    const { container } = renderWithProviders(<AppSidebar />)
    expect(container.querySelector('.sidebar-brand')).toBeInTheDocument()
  })

  it('should render sidebar navigation', () => {
    const { container } = renderWithProviders(<AppSidebar />)
    expect(container.querySelector('.sidebar-nav')).toBeInTheDocument()
  })

  it('should render sidebar footer', () => {
    const { container } = renderWithProviders(<AppSidebar />)
    expect(container.querySelector('.sidebar-footer')).toBeInTheDocument()
  })

  it('should render close button', () => {
    const { container } = renderWithProviders(<AppSidebar />)
    expect(container.querySelector('.btn-close')).toBeInTheDocument()
  })

  it('should render sidebar toggler', () => {
    const { container } = renderWithProviders(<AppSidebar />)
    expect(container.querySelector('.sidebar-toggler')).toBeInTheDocument()
  })

  it('should render Dashboard nav item', () => {
    renderWithProviders(<AppSidebar />)
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })
})
