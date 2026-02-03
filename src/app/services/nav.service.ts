import { Injectable } from '@angular/core';

export interface NavItem {
  name: string;
  url?: string;
  icon?: string;
  badge?: {
    color: string;
    text: string;
  };
  children?: NavItem[];
  title?: boolean;
  divider?: boolean;
  external?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavService {
  getNavItems(): NavItem[] {
    return [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'dashboard',
        badge: { color: 'accent', text: 'NEW' }
      },
      { name: 'Theme', title: true },
      {
        name: 'Colors',
        url: '/theme/colors',
        icon: 'palette'
      },
      {
        name: 'Typography',
        url: '/theme/typography',
        icon: 'text_fields'
      },
      { name: 'Components', title: true },
      {
        name: 'Base',
        icon: 'extension',
        children: [
          { name: 'Accordion', url: '/base/accordion' },
          { name: 'Breadcrumb', url: '/base/breadcrumbs' },
          { name: 'Cards', url: '/base/cards' },
          { name: 'Carousel', url: '/base/carousels' },
          { name: 'Collapse', url: '/base/collapses' },
          { name: 'List group', url: '/base/list-groups' },
          { name: 'Navs & Tabs', url: '/base/navs' },
          { name: 'Pagination', url: '/base/paginations' },
          { name: 'Placeholders', url: '/base/placeholders' },
          { name: 'Popovers', url: '/base/popovers' },
          { name: 'Progress', url: '/base/progress' },
          { name: 'Spinners', url: '/base/spinners' },
          { name: 'Tables', url: '/base/tables' },
          { name: 'Tabs', url: '/base/tabs' },
          { name: 'Tooltips', url: '/base/tooltips' }
        ]
      },
      {
        name: 'Buttons',
        icon: 'smart_button',
        children: [
          { name: 'Buttons', url: '/buttons/buttons' },
          { name: 'Button groups', url: '/buttons/button-groups' },
          { name: 'Dropdowns', url: '/buttons/dropdowns' }
        ]
      },
      {
        name: 'Forms',
        icon: 'edit_note',
        children: [
          { name: 'Checks & Radios', url: '/forms/checks-radios' },
          { name: 'Floating Labels', url: '/forms/floating-labels' },
          { name: 'Form Control', url: '/forms/form-control' },
          { name: 'Input Group', url: '/forms/input-group' },
          { name: 'Layout', url: '/forms/layout' },
          { name: 'Range', url: '/forms/range' },
          { name: 'Select', url: '/forms/select' },
          { name: 'Validation', url: '/forms/validation' }
        ]
      },
      {
        name: 'Charts',
        url: '/charts',
        icon: 'pie_chart'
      },
      {
        name: 'Icons',
        icon: 'star',
        children: [
          { name: 'Material Icons', url: '/icons/coreui-icons' },
          { name: 'Flags', url: '/icons/flags' },
          { name: 'Brands', url: '/icons/brands' }
        ]
      },
      {
        name: 'Notifications',
        icon: 'notifications',
        children: [
          { name: 'Alerts', url: '/notifications/alerts' },
          { name: 'Badges', url: '/notifications/badges' },
          { name: 'Modal', url: '/notifications/modals' },
          { name: 'Toasts', url: '/notifications/toasts' }
        ]
      },
      {
        name: 'Widgets',
        url: '/widgets',
        icon: 'widgets',
        badge: { color: 'accent', text: 'NEW' }
      },
      { name: 'Extras', title: true },
      {
        name: 'Pages',
        icon: 'article',
        children: [
          { name: 'Login', url: '/login' },
          { name: 'Register', url: '/register' },
          { name: 'Error 404', url: '/404' },
          { name: 'Error 500', url: '/500' }
        ]
      },
      {
        name: 'Docs',
        url: 'https://material.angular.io/',
        icon: 'description',
        external: true
      }
    ];
  }
}
