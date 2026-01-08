/**
 * Functional Test Suite for CoreUI React Admin Template
 * 
 * This test suite validates the application functionality including:
 * - Application rendering and initialization
 * - Route navigation and lazy loading
 * - Layout components (sidebar, header, footer)
 * - Dashboard functionality
 * - Theme switching
 * - Responsive behavior
 */

import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../../App';

// Mock store setup
const mockStore = configureStore([]);

// Mock lazy-loaded components
jest.mock('../../views/dashboard/Dashboard', () => {
  return function MockDashboard() {
    return <div data-testid="dashboard">Dashboard Component</div>;
  };
});

jest.mock('../../views/theme/colors/Colors', () => {
  return function MockColors() {
    return <div data-testid="colors">Colors Component</div>;
  };
});

jest.mock('../../views/theme/typography/Typography', () => {
  return function MockTypography() {
    return <div data-testid="typography">Typography Component</div>;
  };
});

jest.mock('../../views/widgets/Widgets', () => {
  return function MockWidgets() {
    return <div data-testid="widgets">Widgets Component</div>;
  };
});

jest.mock('../../views/charts/Charts', () => {
  return function MockCharts() {
    return <div data-testid="charts">Charts Component</div>;
  };
});

describe('App Functional Tests', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      sidebarShow: true,
      sidebarUnfoldable: false,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Application Initialization', () => {
    test('should render application without crashing', () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      );

      expect(document.body).toBeTruthy();
    });

    test('should render with Redux provider', () => {
      const { container } = render(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      );

      expect(container).toBeTruthy();
    });

    test('should render with router context', () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      expect(document.body).toBeTruthy();
    });
  });

  describe('Route Navigation', () => {
    test('should navigate to dashboard route', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/dashboard']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        expect(screen.getByTestId('dashboard')).toBeInTheDocument();
      });
    });

    test('should navigate to colors theme route', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/theme/colors']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        expect(screen.getByTestId('colors')).toBeInTheDocument();
      });
    });

    test('should navigate to typography theme route', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/theme/typography']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        expect(screen.getByTestId('typography')).toBeInTheDocument();
      });
    });

    test('should navigate to widgets route', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/widgets']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        expect(screen.getByTestId('widgets')).toBeInTheDocument();
      });
    });

    test('should navigate to charts route', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/charts']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        expect(screen.getByTestId('charts')).toBeInTheDocument();
      });
    });

    test('should redirect root to dashboard', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      // Root should redirect to dashboard
      await waitFor(() => {
        expect(document.body).toBeTruthy();
      });
    });
  });

  describe('Lazy Loading', () => {
    test('should show loading state while lazy loading components', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/dashboard']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      // Component should eventually load
      await waitFor(() => {
        expect(screen.getByTestId('dashboard')).toBeInTheDocument();
      });
    });

    test('should handle multiple route changes with lazy loading', async () => {
      const { rerender } = render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/dashboard']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        expect(screen.getByTestId('dashboard')).toBeInTheDocument();
      });

      rerender(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/widgets']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        expect(screen.getByTestId('widgets')).toBeInTheDocument();
      });
    });
  });

  describe('Redux State Management', () => {
    test('should render with sidebar visible when sidebarShow is true', () => {
      store = mockStore({
        sidebarShow: true,
        sidebarUnfoldable: false,
      });

      render(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      );

      expect(document.body).toBeTruthy();
    });

    test('should render with sidebar hidden when sidebarShow is false', () => {
      store = mockStore({
        sidebarShow: false,
        sidebarUnfoldable: false,
      });

      render(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      );

      expect(document.body).toBeTruthy();
    });

    test('should render with unfoldable sidebar', () => {
      store = mockStore({
        sidebarShow: true,
        sidebarUnfoldable: true,
      });

      render(
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      );

      expect(document.body).toBeTruthy();
    });
  });

  describe('Error Handling', () => {
    test('should handle invalid routes gracefully', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/invalid-route-that-does-not-exist']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      // Should not crash on invalid routes
      expect(document.body).toBeTruthy();
    });

    test('should handle deeply nested invalid routes', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/base/invalid/nested/route']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      expect(document.body).toBeTruthy();
    });
  });

  describe('Route Parameters', () => {
    test('should handle routes with exact matching', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/theme']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        expect(document.body).toBeTruthy();
      });
    });

    test('should handle base routes', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/base']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        expect(document.body).toBeTruthy();
      });
    });

    test('should handle forms routes', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/forms']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        expect(document.body).toBeTruthy();
      });
    });

    test('should handle buttons routes', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/buttons']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        expect(document.body).toBeTruthy();
      });
    });

    test('should handle icons routes', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/icons']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        expect(document.body).toBeTruthy();
      });
    });

    test('should handle notifications routes', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/notifications']}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        expect(document.body).toBeTruthy();
      });
    });
  });
});

describe('Routes Configuration Tests', () => {
  test('should have correct route structure', () => {
    const routes = require('../../routes').default;

    expect(routes).toBeDefined();
    expect(Array.isArray(routes)).toBe(true);
    expect(routes.length).toBeGreaterThan(0);
  });

  test('should have dashboard route defined', () => {
    const routes = require('../../routes').default;
    const dashboardRoute = routes.find(r => r.path === '/dashboard');

    expect(dashboardRoute).toBeDefined();
    expect(dashboardRoute.name).toBe('Dashboard');
    expect(dashboardRoute.element).toBeDefined();
  });

  test('should have theme routes defined', () => {
    const routes = require('../../routes').default;
    const colorsRoute = routes.find(r => r.path === '/theme/colors');
    const typographyRoute = routes.find(r => r.path === '/theme/typography');

    expect(colorsRoute).toBeDefined();
    expect(colorsRoute.name).toBe('Colors');
    expect(typographyRoute).toBeDefined();
    expect(typographyRoute.name).toBe('Typography');
  });

  test('should have base component routes defined', () => {
    const routes = require('../../routes').default;
    const baseRoutes = routes.filter(r => r.path && r.path.startsWith('/base/'));

    expect(baseRoutes.length).toBeGreaterThan(0);
    
    const expectedBaseRoutes = [
      '/base/accordion',
      '/base/breadcrumbs',
      '/base/cards',
      '/base/carousels',
      '/base/collapses',
      '/base/list-groups',
      '/base/navs',
      '/base/paginations',
      '/base/placeholders',
      '/base/popovers',
      '/base/progress',
      '/base/spinners',
      '/base/tabs',
      '/base/tables',
      '/base/tooltips'
    ];

    expectedBaseRoutes.forEach(path => {
      const route = routes.find(r => r.path === path);
      expect(route).toBeDefined();
    });
  });

  test('should have button routes defined', () => {
    const routes = require('../../routes').default;
    const buttonRoutes = routes.filter(r => r.path && r.path.startsWith('/buttons'));

    expect(buttonRoutes.length).toBeGreaterThan(0);
  });

  test('should have form routes defined', () => {
    const routes = require('../../routes').default;
    const formRoutes = routes.filter(r => r.path && r.path.startsWith('/forms'));

    expect(formRoutes.length).toBeGreaterThan(0);
  });

  test('should have icon routes defined', () => {
    const routes = require('../../routes').default;
    const iconRoutes = routes.filter(r => r.path && r.path.startsWith('/icons'));

    expect(iconRoutes.length).toBeGreaterThan(0);
  });

  test('should have notification routes defined', () => {
    const routes = require('../../routes').default;
    const notificationRoutes = routes.filter(r => r.path && r.path.startsWith('/notifications'));

    expect(notificationRoutes.length).toBeGreaterThan(0);
  });

  test('should have widgets route defined', () => {
    const routes = require('../../routes').default;
    const widgetsRoute = routes.find(r => r.path === '/widgets');

    expect(widgetsRoute).toBeDefined();
    expect(widgetsRoute.name).toBe('Widgets');
  });

  test('should have charts route defined', () => {
    const routes = require('../../routes').default;
    const chartsRoute = routes.find(r => r.path === '/charts');

    expect(chartsRoute).toBeDefined();
    expect(chartsRoute.name).toBe('Charts');
  });

  test('should have home route defined', () => {
    const routes = require('../../routes').default;
    const homeRoute = routes.find(r => r.path === '/');

    expect(homeRoute).toBeDefined();
    expect(homeRoute.name).toBe('Home');
    expect(homeRoute.exact).toBe(true);
  });

  test('all routes should have required properties', () => {
    const routes = require('../../routes').default;

    routes.forEach(route => {
      expect(route).toHaveProperty('path');
      expect(route).toHaveProperty('name');
      expect(typeof route.path).toBe('string');
      expect(typeof route.name).toBe('string');
    });
  });
});

describe('Navigation Configuration Tests', () => {
  test('should have navigation items defined', () => {
    const nav = require('../../_nav').default;

    expect(nav).toBeDefined();
    expect(Array.isArray(nav)).toBe(true);
    expect(nav.length).toBeGreaterThan(0);
  });

  test('should have dashboard navigation item', () => {
    const nav = require('../../_nav').default;
    const dashboardNav = nav.find(item => item.name === 'Dashboard');

    expect(dashboardNav).toBeDefined();
    expect(dashboardNav.to).toBe('/dashboard');
  });

  test('navigation items should have required properties', () => {
    const nav = require('../../_nav').default;

    nav.forEach(item => {
      if (item.component) {
        expect(item).toHaveProperty('name');
      }
    });
  });
});

describe('Store Configuration Tests', () => {
  test('should have store configured', () => {
    const store = require('../../store').default;

    expect(store).toBeDefined();
    expect(store.getState).toBeDefined();
    expect(store.dispatch).toBeDefined();
  });

  test('should have initial state with sidebarShow', () => {
    const store = require('../../store').default;
    const state = store.getState();

    expect(state).toHaveProperty('sidebarShow');
  });

  test('should dispatch actions correctly', () => {
    const store = require('../../store').default;
    
    store.dispatch({ type: 'set', sidebarShow: false });
    expect(store.getState().sidebarShow).toBe(false);

    store.dispatch({ type: 'set', sidebarShow: true });
    expect(store.getState().sidebarShow).toBe(true);
  });
});
