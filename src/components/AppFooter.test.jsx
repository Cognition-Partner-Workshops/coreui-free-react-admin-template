import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import AppFooter from './AppFooter'

describe('AppFooter', () => {
  it('renders without crashing', () => {
    render(<AppFooter />)
    expect(screen.getByText('CoreUI')).toBeInTheDocument()
  })

  it('displays the copyright text', () => {
    render(<AppFooter />)
    expect(screen.getByText(/2025 creativeLabs/)).toBeInTheDocument()
  })

  it('contains CoreUI link with correct href', () => {
    render(<AppFooter />)
    const coreUILink = screen.getByRole('link', { name: 'CoreUI' })
    expect(coreUILink).toHaveAttribute('href', 'https://coreui.io')
    expect(coreUILink).toHaveAttribute('target', '_blank')
  })

  it('contains CoreUI React Admin link', () => {
    render(<AppFooter />)
    const adminLink = screen.getByRole('link', { name: /CoreUI React Admin/ })
    expect(adminLink).toHaveAttribute('href', 'https://coreui.io/react')
  })

  it('displays "Powered by" text', () => {
    render(<AppFooter />)
    expect(screen.getByText('Powered by')).toBeInTheDocument()
  })
})
