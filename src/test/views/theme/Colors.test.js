import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Colors from '../../../views/theme/colors/Colors'

describe('Colors Page', () => {
  it('should render without crashing', () => {
    render(<Colors />)
  })

  it('should render Theme colors header', () => {
    render(<Colors />)
    expect(screen.getByText('Theme colors')).toBeInTheDocument()
  })

  it('should render Brand Primary Color', () => {
    render(<Colors />)
    expect(screen.getByText('Brand Primary Color')).toBeInTheDocument()
  })

  it('should render Brand Secondary Color', () => {
    render(<Colors />)
    expect(screen.getByText('Brand Secondary Color')).toBeInTheDocument()
  })

  it('should render Brand Success Color', () => {
    render(<Colors />)
    expect(screen.getByText('Brand Success Color')).toBeInTheDocument()
  })

  it('should render Brand Danger Color', () => {
    render(<Colors />)
    expect(screen.getByText('Brand Danger Color')).toBeInTheDocument()
  })

  it('should render Brand Warning Color', () => {
    render(<Colors />)
    expect(screen.getByText('Brand Warning Color')).toBeInTheDocument()
  })

  it('should render Brand Info Color', () => {
    render(<Colors />)
    expect(screen.getByText('Brand Info Color')).toBeInTheDocument()
  })

  it('should render Brand Light Color', () => {
    render(<Colors />)
    expect(screen.getByText('Brand Light Color')).toBeInTheDocument()
  })

  it('should render Brand Dark Color', () => {
    render(<Colors />)
    expect(screen.getByText('Brand Dark Color')).toBeInTheDocument()
  })

  it('should render HEX labels', () => {
    render(<Colors />)
    expect(screen.getAllByText('HEX:').length).toBeGreaterThan(0)
  })

  it('should render RGB labels', () => {
    render(<Colors />)
    expect(screen.getAllByText('RGB:').length).toBeGreaterThan(0)
  })
})
