import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppSidebarNav } from '../../components/AppSidebarNav'
import { CNavItem, CNavGroup, CNavTitle } from '@coreui/react'

const renderWithRouter = (component) => {
  return render(<MemoryRouter>{component}</MemoryRouter>)
}

describe('AppSidebarNav', () => {
  it('should render empty nav when items is empty', () => {
    renderWithRouter(<AppSidebarNav items={[]} />)
  })

  it('should render nav items', () => {
    const items = [
      {
        component: CNavItem,
        name: 'Dashboard',
        to: '/dashboard',
      },
    ]
    renderWithRouter(<AppSidebarNav items={items} />)
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })

  it('should render nav title', () => {
    const items = [
      {
        component: CNavTitle,
        name: 'Section Title',
      },
    ]
    renderWithRouter(<AppSidebarNav items={items} />)
    expect(screen.getByText('Section Title')).toBeInTheDocument()
  })

  it('should render nav group with items', () => {
    const items = [
      {
        component: CNavGroup,
        name: 'Group',
        items: [
          {
            component: CNavItem,
            name: 'Sub Item',
            to: '/sub-item',
          },
        ],
      },
    ]
    renderWithRouter(<AppSidebarNav items={items} />)
    expect(screen.getByText('Group')).toBeInTheDocument()
  })

  it('should render nav item with badge', () => {
    const items = [
      {
        component: CNavItem,
        name: 'With Badge',
        to: '/badge',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
    ]
    renderWithRouter(<AppSidebarNav items={items} />)
    expect(screen.getByText('With Badge')).toBeInTheDocument()
    expect(screen.getByText('NEW')).toBeInTheDocument()
  })

  it('should render nav item with external href', () => {
    const items = [
      {
        component: CNavItem,
        name: 'External Link',
        href: 'https://example.com',
      },
    ]
    renderWithRouter(<AppSidebarNav items={items} />)
    expect(screen.getByText('External Link')).toBeInTheDocument()
  })

  it('should render nested nav groups', () => {
    const items = [
      {
        component: CNavGroup,
        name: 'Parent Group',
        items: [
          {
            component: CNavGroup,
            name: 'Child Group',
            items: [
              {
                component: CNavItem,
                name: 'Nested Item',
                to: '/nested',
              },
            ],
          },
        ],
      },
    ]
    renderWithRouter(<AppSidebarNav items={items} />)
    expect(screen.getByText('Parent Group')).toBeInTheDocument()
  })
})
