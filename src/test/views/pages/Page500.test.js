import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page500 from '../../../views/pages/page500/Page500'

describe('Page500', () => {
  it('should render without crashing', () => {
    render(<Page500 />)
  })

  it('should render 500 heading', () => {
    render(<Page500 />)
    expect(screen.getByText('500')).toBeInTheDocument()
  })

  it('should render problem message', () => {
    render(<Page500 />)
    expect(screen.getByText('Houston, we have a problem!')).toBeInTheDocument()
  })

  it('should render unavailable message', () => {
    render(<Page500 />)
    expect(
      screen.getByText('The page you are looking for is temporarily unavailable.'),
    ).toBeInTheDocument()
  })

  it('should render search input', () => {
    render(<Page500 />)
    expect(screen.getByPlaceholderText('What are you looking for?')).toBeInTheDocument()
  })

  it('should render search button', () => {
    render(<Page500 />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })
})
