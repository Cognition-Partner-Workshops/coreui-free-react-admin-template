import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import AppContent from '../../components/AppContent'

const renderWithProviders = (component, { route = '/dashboard' } = {}) => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
    </Provider>,
  )
}

describe('AppContent', () => {
  it('should render without crashing', () => {
    renderWithProviders(<AppContent />)
  })

  it('should render a container element', () => {
    const { container } = renderWithProviders(<AppContent />)
    expect(container.querySelector('.container-lg')).toBeInTheDocument()
  })
})
