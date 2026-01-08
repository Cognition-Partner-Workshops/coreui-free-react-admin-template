import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Login from '../../../views/pages/login/Login'

const renderWithRouter = (component) => {
  return render(<MemoryRouter>{component}</MemoryRouter>)
}

describe('Login Page', () => {
  it('should render without crashing', () => {
    renderWithRouter(<Login />)
  })

  it('should render Login heading', () => {
    renderWithRouter(<Login />)
    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
  })

  it('should render Sign In text', () => {
    renderWithRouter(<Login />)
    expect(screen.getByText('Sign In to your account')).toBeInTheDocument()
  })

  it('should render Username input', () => {
    renderWithRouter(<Login />)
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
  })

  it('should render Password input', () => {
    renderWithRouter(<Login />)
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  it('should render Login button', () => {
    renderWithRouter(<Login />)
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })

  it('should render Forgot password link', () => {
    renderWithRouter(<Login />)
    expect(screen.getByText('Forgot password?')).toBeInTheDocument()
  })

  it('should render Sign up heading', () => {
    renderWithRouter(<Login />)
    expect(screen.getByRole('heading', { name: 'Sign up' })).toBeInTheDocument()
  })

  it('should render Register Now button', () => {
    renderWithRouter(<Login />)
    expect(screen.getByRole('button', { name: 'Register Now!' })).toBeInTheDocument()
  })
})
