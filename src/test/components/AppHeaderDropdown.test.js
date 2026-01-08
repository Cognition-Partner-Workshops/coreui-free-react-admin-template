import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import AppHeaderDropdown from '../../components/header/AppHeaderDropdown'

describe('AppHeaderDropdown', () => {
  it('should render without crashing', () => {
    render(<AppHeaderDropdown />)
  })

  it('should render avatar image', () => {
    render(<AppHeaderDropdown />)
    const avatar = document.querySelector('.avatar')
    expect(avatar).toBeInTheDocument()
  })

  it('should render Account header', () => {
    render(<AppHeaderDropdown />)
    expect(screen.getByText('Account')).toBeInTheDocument()
  })

  it('should render Settings header', () => {
    render(<AppHeaderDropdown />)
    expect(screen.getAllByText('Settings').length).toBeGreaterThan(0)
  })

  it('should render Updates menu item', () => {
    render(<AppHeaderDropdown />)
    expect(screen.getByText('Updates')).toBeInTheDocument()
  })

  it('should render Messages menu item', () => {
    render(<AppHeaderDropdown />)
    expect(screen.getByText('Messages')).toBeInTheDocument()
  })

  it('should render Tasks menu item', () => {
    render(<AppHeaderDropdown />)
    expect(screen.getByText('Tasks')).toBeInTheDocument()
  })

  it('should render Comments menu item', () => {
    render(<AppHeaderDropdown />)
    expect(screen.getByText('Comments')).toBeInTheDocument()
  })

  it('should render Profile menu item', () => {
    render(<AppHeaderDropdown />)
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })

  it('should render Payments menu item', () => {
    render(<AppHeaderDropdown />)
    expect(screen.getByText('Payments')).toBeInTheDocument()
  })

  it('should render Projects menu item', () => {
    render(<AppHeaderDropdown />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })

  it('should render Lock Account menu item', () => {
    render(<AppHeaderDropdown />)
    expect(screen.getByText('Lock Account')).toBeInTheDocument()
  })

  it('should render badges with count 42', () => {
    render(<AppHeaderDropdown />)
    const badges = screen.getAllByText('42')
    expect(badges.length).toBeGreaterThan(0)
  })
})
