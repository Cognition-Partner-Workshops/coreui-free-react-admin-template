import store from '../store'

describe('Redux Store', () => {
  describe('Initial State', () => {
    test('has correct initial state', () => {
      const state = store.getState()
      expect(state).toEqual({
        sidebarShow: true,
        theme: 'light',
      })
    })

    test('sidebarShow is initially true', () => {
      const state = store.getState()
      expect(state.sidebarShow).toBe(true)
    })

    test('theme is initially light', () => {
      const state = store.getState()
      expect(state.theme).toBe('light')
    })
  })

  describe('changeState Reducer', () => {
    test('updates sidebarShow when dispatching set action', () => {
      store.dispatch({ type: 'set', sidebarShow: false })
      const state = store.getState()
      expect(state.sidebarShow).toBe(false)
    })

    test('updates theme when dispatching set action', () => {
      store.dispatch({ type: 'set', theme: 'dark' })
      const state = store.getState()
      expect(state.theme).toBe('dark')
    })

    test('updates multiple properties at once', () => {
      store.dispatch({ type: 'set', sidebarShow: true, theme: 'auto' })
      const state = store.getState()
      expect(state.sidebarShow).toBe(true)
      expect(state.theme).toBe('auto')
    })

    test('returns current state for unknown action types', () => {
      const stateBefore = store.getState()
      store.dispatch({ type: 'UNKNOWN_ACTION' })
      const stateAfter = store.getState()
      expect(stateAfter).toEqual(stateBefore)
    })

    test('preserves existing state when updating single property', () => {
      store.dispatch({ type: 'set', sidebarShow: true, theme: 'light' })
      store.dispatch({ type: 'set', sidebarShow: false })
      const state = store.getState()
      expect(state.sidebarShow).toBe(false)
      expect(state.theme).toBe('light')
    })
  })

  describe('Store Subscription', () => {
    test('notifies subscribers on state change', () => {
      const listener = jest.fn()
      const unsubscribe = store.subscribe(listener)
      
      store.dispatch({ type: 'set', sidebarShow: true })
      expect(listener).toHaveBeenCalled()
      
      unsubscribe()
    })

    test('unsubscribe stops notifications', () => {
      const listener = jest.fn()
      const unsubscribe = store.subscribe(listener)
      
      unsubscribe()
      store.dispatch({ type: 'set', sidebarShow: false })
      
      expect(listener).not.toHaveBeenCalled()
    })
  })
})
