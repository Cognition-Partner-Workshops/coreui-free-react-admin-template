import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store'
import DefaultLayout from '../../layout/DefaultLayout'

const renderWithProviders = (component) => {
  return render(
    <Provider store={store}>
      <MemoryRouter>{component}</MemoryRouter>
    </Provider>,
  )
}

describe('DefaultLayout', () => {
  it('should render without crashing', () => {
    renderWithProviders(<DefaultLayout />)
  })

  it('should render wrapper div', () => {
    const { container } = renderWithProviders(<DefaultLayout />)
    expect(container.querySelector('.wrapper')).toBeInTheDocument()
  })

  it('should render sidebar', () => {
    const { container } = renderWithProviders(<DefaultLayout />)
    expect(container.querySelector('.sidebar')).toBeInTheDocument()
  })

  it('should render header', () => {
    const { container } = renderWithProviders(<DefaultLayout />)
    expect(container.querySelector('.header')).toBeInTheDocument()
  })

  it('should render footer', () => {
    const { container } = renderWithProviders(<DefaultLayout />)
    expect(container.querySelector('.footer')).toBeInTheDocument()
  })

  it('should render body container', () => {
    const { container } = renderWithProviders(<DefaultLayout />)
    expect(container.querySelector('.body')).toBeInTheDocument()
  })
})
