import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Typography from '../../../views/theme/typography/Typography'

describe('Typography Page', () => {
  it('should render without crashing', () => {
    render(<Typography />)
  })

  it('should render Headings header', () => {
    render(<Typography />)
    expect(screen.getAllByText('Headings').length).toBeGreaterThan(0)
  })

  it('should render h1 Bootstrap heading', () => {
    render(<Typography />)
    expect(screen.getAllByText('h1. Bootstrap heading').length).toBeGreaterThan(0)
  })

  it('should render h2 Bootstrap heading', () => {
    render(<Typography />)
    expect(screen.getAllByText('h2. Bootstrap heading').length).toBeGreaterThan(0)
  })

  it('should render Display headings header', () => {
    render(<Typography />)
    expect(screen.getByText('Display headings')).toBeInTheDocument()
  })

  it('should render Display 1', () => {
    render(<Typography />)
    expect(screen.getByText('Display 1')).toBeInTheDocument()
  })

  it('should render Inline text elements header', () => {
    render(<Typography />)
    expect(screen.getByText('Inline text elements')).toBeInTheDocument()
  })

  it('should render Description list alignment header', () => {
    render(<Typography />)
    expect(screen.getByText('Description list alignment')).toBeInTheDocument()
  })

  it('should render highlight text', () => {
    render(<Typography />)
    expect(screen.getByText('highlight')).toBeInTheDocument()
  })
})
