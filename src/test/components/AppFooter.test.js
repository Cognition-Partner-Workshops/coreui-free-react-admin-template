import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import AppFooter from '../../components/AppFooter'

describe('AppFooter', () => {
  it('should render footer component', () => {
    render(<AppFooter />)
    expect(screen.getByText('CoreUI')).toBeInTheDocument()
  })

  it('should have CoreUI link', () => {
    render(<AppFooter />)
    const link = screen.getByRole('link', { name: 'CoreUI' })
    expect(link).toHaveAttribute('href', 'https://coreui.io')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should display copyright text', () => {
    render(<AppFooter />)
    expect(screen.getByText(/2025 creativeLabs/)).toBeInTheDocument()
  })

  it('should have CoreUI React link', () => {
    render(<AppFooter />)
    const link = screen.getByRole('link', { name: 'CoreUI React Admin & Dashboard Template' })
    expect(link).toHaveAttribute('href', 'https://coreui.io/react')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('should display Powered by text', () => {
    render(<AppFooter />)
    expect(screen.getByText('Powered by')).toBeInTheDocument()
  })
})
