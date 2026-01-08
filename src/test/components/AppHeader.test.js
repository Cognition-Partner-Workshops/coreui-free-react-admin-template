import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import AppHeader from '../../components/AppHeader'

const renderWithProviders = (component) => {
  return render(
    <Provider store={store}>
      <MemoryRouter>{component}</MemoryRouter>
    </Provider>,
  )
}

describe('AppHeader', () => {
  it('should render without crashing', () => {
    renderWithProviders(<AppHeader />)
  })

  it('should render header element', () => {
    const { container } = renderWithProviders(<AppHeader />)
    expect(container.querySelector('.header')).toBeInTheDocument()
  })

  it('should render Dashboard link', () => {
    renderWithProviders(<AppHeader />)
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })

  it('should render Users link', () => {
    renderWithProviders(<AppHeader />)
    expect(screen.getByText('Users')).toBeInTheDocument()
  })

  it('should render Settings link', () => {
    renderWithProviders(<AppHeader />)
    expect(screen.getAllByText('Settings').length).toBeGreaterThan(0)
  })

  it('should render header toggler', () => {
    const { container } = renderWithProviders(<AppHeader />)
    expect(container.querySelector('.header-toggler')).toBeInTheDocument()
  })

  it('should render breadcrumb', () => {
    const { container } = renderWithProviders(<AppHeader />)
    expect(container.querySelector('.breadcrumb')).toBeInTheDocument()
  })

  it('should render theme dropdown', () => {
    const { container } = renderWithProviders(<AppHeader />)
    expect(container.querySelector('.dropdown')).toBeInTheDocument()
  })

  it('should render Light theme option', () => {
    renderWithProviders(<AppHeader />)
    expect(screen.getByText('Light')).toBeInTheDocument()
  })

  it('should render Dark theme option', () => {
    renderWithProviders(<AppHeader />)
    expect(screen.getByText('Dark')).toBeInTheDocument()
  })

  it('should render Auto theme option', () => {
    renderWithProviders(<AppHeader />)
    expect(screen.getByText('Auto')).toBeInTheDocument()
  })

  it('should toggle sidebar when toggler is clicked', () => {
    const { container } = renderWithProviders(<AppHeader />)
    const toggler = container.querySelector('.header-toggler')
    const initialState = store.getState().sidebarShow
    fireEvent.click(toggler)
    expect(store.getState().sidebarShow).toBe(!initialState)
  })
})
