import _nav from '../_nav'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

describe('Navigation Configuration', () => {
  describe('Structure', () => {
    test('exports an array', () => {
      expect(Array.isArray(_nav)).toBe(true)
    })

    test('has navigation items', () => {
      expect(_nav.length).toBeGreaterThan(0)
    })

    test('all items have a component property', () => {
      const checkComponent = (items) => {
        items.forEach(item => {
          expect(item.component).toBeDefined()
          if (item.items) {
            checkComponent(item.items)
          }
        })
      }
      checkComponent(_nav)
    })

    test('all items have a name property', () => {
      const checkName = (items) => {
        items.forEach(item => {
          expect(item.name).toBeDefined()
        })
      }
      checkName(_nav)
    })
  })

  describe('Dashboard Item', () => {
    test('first item is Dashboard', () => {
      const dashboardItem = _nav[0]
      expect(dashboardItem.name).toBe('Dashboard')
    })

    test('Dashboard has correct path', () => {
      const dashboardItem = _nav[0]
      expect(dashboardItem.to).toBe('/dashboard')
    })

    test('Dashboard is a CNavItem', () => {
      const dashboardItem = _nav[0]
      expect(dashboardItem.component).toBe(CNavItem)
    })

    test('Dashboard has a badge', () => {
      const dashboardItem = _nav[0]
      expect(dashboardItem.badge).toBeDefined()
      expect(dashboardItem.badge.color).toBe('info')
      expect(dashboardItem.badge.text).toBe('NEW')
    })

    test('Dashboard has an icon', () => {
      const dashboardItem = _nav[0]
      expect(dashboardItem.icon).toBeDefined()
    })
  })

  describe('Theme Section', () => {
    test('has Theme title', () => {
      const themeTitle = _nav.find(item => item.name === 'Theme' && item.component === CNavTitle)
      expect(themeTitle).toBeDefined()
    })

    test('has Colors item', () => {
      const colorsItem = _nav.find(item => item.name === 'Colors')
      expect(colorsItem).toBeDefined()
      expect(colorsItem.to).toBe('/theme/colors')
    })

    test('has Typography item', () => {
      const typographyItem = _nav.find(item => item.name === 'Typography')
      expect(typographyItem).toBeDefined()
      expect(typographyItem.to).toBe('/theme/typography')
    })
  })

  describe('Components Section', () => {
    test('has Components title', () => {
      const componentsTitle = _nav.find(item => item.name === 'Components' && item.component === CNavTitle)
      expect(componentsTitle).toBeDefined()
    })

    test('has Base group', () => {
      const baseGroup = _nav.find(item => item.name === 'Base' && item.component === CNavGroup)
      expect(baseGroup).toBeDefined()
      expect(baseGroup.items).toBeDefined()
      expect(baseGroup.items.length).toBeGreaterThan(0)
    })

    test('Base group contains Accordion', () => {
      const baseGroup = _nav.find(item => item.name === 'Base' && item.component === CNavGroup)
      const accordionItem = baseGroup.items.find(item => item.name === 'Accordion')
      expect(accordionItem).toBeDefined()
      expect(accordionItem.to).toBe('/base/accordion')
    })

    test('Base group contains Cards', () => {
      const baseGroup = _nav.find(item => item.name === 'Base' && item.component === CNavGroup)
      const cardsItem = baseGroup.items.find(item => item.name === 'Cards')
      expect(cardsItem).toBeDefined()
      expect(cardsItem.to).toBe('/base/cards')
    })

    test('Base group contains Tables', () => {
      const baseGroup = _nav.find(item => item.name === 'Base' && item.component === CNavGroup)
      const tablesItem = baseGroup.items.find(item => item.name === 'Tables')
      expect(tablesItem).toBeDefined()
      expect(tablesItem.to).toBe('/base/tables')
    })
  })

  describe('Buttons Section', () => {
    test('has Buttons group', () => {
      const buttonsGroup = _nav.find(item => item.name === 'Buttons' && item.component === CNavGroup)
      expect(buttonsGroup).toBeDefined()
      expect(buttonsGroup.items).toBeDefined()
    })

    test('Buttons group contains Buttons item', () => {
      const buttonsGroup = _nav.find(item => item.name === 'Buttons' && item.component === CNavGroup)
      const buttonsItem = buttonsGroup.items.find(item => item.name === 'Buttons')
      expect(buttonsItem).toBeDefined()
      expect(buttonsItem.to).toBe('/buttons/buttons')
    })

    test('Buttons group contains Dropdowns', () => {
      const buttonsGroup = _nav.find(item => item.name === 'Buttons' && item.component === CNavGroup)
      const dropdownsItem = buttonsGroup.items.find(item => item.name === 'Dropdowns')
      expect(dropdownsItem).toBeDefined()
      expect(dropdownsItem.to).toBe('/buttons/dropdowns')
    })
  })

  describe('Forms Section', () => {
    test('has Forms group', () => {
      const formsGroup = _nav.find(item => item.name === 'Forms' && item.component === CNavGroup)
      expect(formsGroup).toBeDefined()
      expect(formsGroup.items).toBeDefined()
    })

    test('Forms group contains Form Control', () => {
      const formsGroup = _nav.find(item => item.name === 'Forms' && item.component === CNavGroup)
      const formControlItem = formsGroup.items.find(item => item.name === 'Form Control')
      expect(formControlItem).toBeDefined()
      expect(formControlItem.to).toBe('/forms/form-control')
    })

    test('Forms group contains Validation', () => {
      const formsGroup = _nav.find(item => item.name === 'Forms' && item.component === CNavGroup)
      const validationItem = formsGroup.items.find(item => item.name === 'Validation')
      expect(validationItem).toBeDefined()
      expect(validationItem.to).toBe('/forms/validation')
    })
  })

  describe('Charts Item', () => {
    test('has Charts item', () => {
      const chartsItem = _nav.find(item => item.name === 'Charts' && item.component === CNavItem)
      expect(chartsItem).toBeDefined()
      expect(chartsItem.to).toBe('/charts')
    })
  })

  describe('Icons Section', () => {
    test('has Icons group', () => {
      const iconsGroup = _nav.find(item => item.name === 'Icons' && item.component === CNavGroup)
      expect(iconsGroup).toBeDefined()
      expect(iconsGroup.items).toBeDefined()
    })

    test('Icons group contains CoreUI Free', () => {
      const iconsGroup = _nav.find(item => item.name === 'Icons' && item.component === CNavGroup)
      const coreUIItem = iconsGroup.items.find(item => item.name === 'CoreUI Free')
      expect(coreUIItem).toBeDefined()
      expect(coreUIItem.to).toBe('/icons/coreui-icons')
    })

    test('Icons group contains Flags', () => {
      const iconsGroup = _nav.find(item => item.name === 'Icons' && item.component === CNavGroup)
      const flagsItem = iconsGroup.items.find(item => item.name === 'CoreUI Flags')
      expect(flagsItem).toBeDefined()
      expect(flagsItem.to).toBe('/icons/flags')
    })
  })

  describe('Notifications Section', () => {
    test('has Notifications group', () => {
      const notificationsGroup = _nav.find(item => item.name === 'Notifications' && item.component === CNavGroup)
      expect(notificationsGroup).toBeDefined()
      expect(notificationsGroup.items).toBeDefined()
    })

    test('Notifications group contains Alerts', () => {
      const notificationsGroup = _nav.find(item => item.name === 'Notifications' && item.component === CNavGroup)
      const alertsItem = notificationsGroup.items.find(item => item.name === 'Alerts')
      expect(alertsItem).toBeDefined()
      expect(alertsItem.to).toBe('/notifications/alerts')
    })

    test('Notifications group contains Modal', () => {
      const notificationsGroup = _nav.find(item => item.name === 'Notifications' && item.component === CNavGroup)
      const modalItem = notificationsGroup.items.find(item => item.name === 'Modal')
      expect(modalItem).toBeDefined()
      expect(modalItem.to).toBe('/notifications/modals')
    })

    test('Notifications group contains Toasts', () => {
      const notificationsGroup = _nav.find(item => item.name === 'Notifications' && item.component === CNavGroup)
      const toastsItem = notificationsGroup.items.find(item => item.name === 'Toasts')
      expect(toastsItem).toBeDefined()
      expect(toastsItem.to).toBe('/notifications/toasts')
    })
  })

  describe('Widgets Item', () => {
    test('has Widgets item', () => {
      const widgetsItem = _nav.find(item => item.name === 'Widgets' && item.component === CNavItem)
      expect(widgetsItem).toBeDefined()
      expect(widgetsItem.to).toBe('/widgets')
    })

    test('Widgets has a badge', () => {
      const widgetsItem = _nav.find(item => item.name === 'Widgets' && item.component === CNavItem)
      expect(widgetsItem.badge).toBeDefined()
      expect(widgetsItem.badge.color).toBe('info')
      expect(widgetsItem.badge.text).toBe('NEW')
    })
  })

  describe('Extras Section', () => {
    test('has Extras title', () => {
      const extrasTitle = _nav.find(item => item.name === 'Extras' && item.component === CNavTitle)
      expect(extrasTitle).toBeDefined()
    })

    test('has Pages group', () => {
      const pagesGroup = _nav.find(item => item.name === 'Pages' && item.component === CNavGroup)
      expect(pagesGroup).toBeDefined()
      expect(pagesGroup.items).toBeDefined()
    })

    test('Pages group contains Login', () => {
      const pagesGroup = _nav.find(item => item.name === 'Pages' && item.component === CNavGroup)
      const loginItem = pagesGroup.items.find(item => item.name === 'Login')
      expect(loginItem).toBeDefined()
      expect(loginItem.to).toBe('/login')
    })

    test('Pages group contains Register', () => {
      const pagesGroup = _nav.find(item => item.name === 'Pages' && item.component === CNavGroup)
      const registerItem = pagesGroup.items.find(item => item.name === 'Register')
      expect(registerItem).toBeDefined()
      expect(registerItem.to).toBe('/register')
    })

    test('Pages group contains Error 404', () => {
      const pagesGroup = _nav.find(item => item.name === 'Pages' && item.component === CNavGroup)
      const error404Item = pagesGroup.items.find(item => item.name === 'Error 404')
      expect(error404Item).toBeDefined()
      expect(error404Item.to).toBe('/404')
    })

    test('Pages group contains Error 500', () => {
      const pagesGroup = _nav.find(item => item.name === 'Pages' && item.component === CNavGroup)
      const error500Item = pagesGroup.items.find(item => item.name === 'Error 500')
      expect(error500Item).toBeDefined()
      expect(error500Item.to).toBe('/500')
    })
  })

  describe('Docs Item', () => {
    test('has Docs item', () => {
      const docsItem = _nav.find(item => item.name === 'Docs' && item.component === CNavItem)
      expect(docsItem).toBeDefined()
    })

    test('Docs has external href', () => {
      const docsItem = _nav.find(item => item.name === 'Docs' && item.component === CNavItem)
      expect(docsItem.href).toBe('https://coreui.io/react/docs/templates/installation/')
    })
  })

  describe('PRO Items', () => {
    test('has PRO badge items', () => {
      const findProItems = (items) => {
        let proItems = []
        items.forEach(item => {
          if (item.badge && item.badge.text === 'PRO') {
            proItems.push(item)
          }
          if (item.items) {
            proItems = proItems.concat(findProItems(item.items))
          }
        })
        return proItems
      }
      const proItems = findProItems(_nav)
      expect(proItems.length).toBeGreaterThan(0)
    })

    test('PRO items have danger color badge', () => {
      const findProItems = (items) => {
        let proItems = []
        items.forEach(item => {
          if (item.badge && item.badge.text === 'PRO') {
            proItems.push(item)
          }
          if (item.items) {
            proItems = proItems.concat(findProItems(item.items))
          }
        })
        return proItems
      }
      const proItems = findProItems(_nav)
      proItems.forEach(item => {
        expect(item.badge.color).toBe('danger')
      })
    })
  })
})
