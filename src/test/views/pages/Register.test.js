import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Register from '../../../views/pages/register/Register'

describe('Register Page', () => {
  it('should render without crashing', () => {
    render(<Register />)
  })

  it('should render Register heading', () => {
    render(<Register />)
    expect(screen.getByRole('heading', { name: 'Register' })).toBeInTheDocument()
  })

  it('should render Create your account text', () => {
    render(<Register />)
    expect(screen.getByText('Create your account')).toBeInTheDocument()
  })

  it('should render Username input', () => {
    render(<Register />)
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument()
  })

  it('should render Email input', () => {
    render(<Register />)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  })

  it('should render Password input', () => {
    render(<Register />)
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })

  it('should render Repeat password input', () => {
    render(<Register />)
    expect(screen.getByPlaceholderText('Repeat password')).toBeInTheDocument()
  })

  it('should render Create Account button', () => {
    render(<Register />)
    expect(screen.getByRole('button', { name: 'Create Account' })).toBeInTheDocument()
  })

  it('should render @ symbol for email input', () => {
    render(<Register />)
    expect(screen.getByText('@')).toBeInTheDocument()
  })
})
