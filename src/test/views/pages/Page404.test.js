import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page404 from '../../../views/pages/page404/Page404'

describe('Page404', () => {
  it('should render without crashing', () => {
    render(<Page404 />)
  })

  it('should render 404 heading', () => {
    render(<Page404 />)
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('should render lost message', () => {
    render(<Page404 />)
    expect(screen.getByText("Oops! You're lost.")).toBeInTheDocument()
  })

  it('should render page not found message', () => {
    render(<Page404 />)
    expect(screen.getByText('The page you are looking for was not found.')).toBeInTheDocument()
  })

  it('should render search input', () => {
    render(<Page404 />)
    expect(screen.getByPlaceholderText('What are you looking for?')).toBeInTheDocument()
  })

  it('should render search button', () => {
    render(<Page404 />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })
})
