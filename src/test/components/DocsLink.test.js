import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import DocsLink from '../../components/DocsLink'

describe('DocsLink', () => {
  it('should render with name prop', () => {
    render(<DocsLink name="button" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://coreui.io/react/docs/components/button')
  })

  it('should render with href prop when name is not provided', () => {
    render(<DocsLink href="https://example.com" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://example.com')
  })

  it('should display default text "docs"', () => {
    render(<DocsLink name="button" />)
    expect(screen.getByText('docs')).toBeInTheDocument()
  })

  it('should display custom text when provided', () => {
    render(<DocsLink name="button" text="View documentation" />)
    expect(screen.getByText('View documentation')).toBeInTheDocument()
  })

  it('should have correct link attributes', () => {
    render(<DocsLink name="button" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer noopener')
  })

  it('should prioritize name over href for URL generation', () => {
    render(<DocsLink name="card" href="https://example.com" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://coreui.io/react/docs/components/card')
  })
})
