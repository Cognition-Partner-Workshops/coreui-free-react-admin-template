import { describe, it, expect } from 'vitest'
import store from '../store'

describe('Redux Store', () => {
  it('should have initial state with sidebarShow true and theme light', () => {
    const state = store.getState()
    expect(state.sidebarShow).toBe(true)
    expect(state.theme).toBe('light')
  })

  it('should update sidebarShow when dispatching set action', () => {
    store.dispatch({ type: 'set', sidebarShow: false })
    const state = store.getState()
    expect(state.sidebarShow).toBe(false)
  })

  it('should update theme when dispatching set action', () => {
    store.dispatch({ type: 'set', theme: 'dark' })
    const state = store.getState()
    expect(state.theme).toBe('dark')
  })

  it('should handle multiple properties in set action', () => {
    store.dispatch({ type: 'set', sidebarShow: true, theme: 'light' })
    const state = store.getState()
    expect(state.sidebarShow).toBe(true)
    expect(state.theme).toBe('light')
  })

  it('should return current state for unknown action types', () => {
    const stateBefore = store.getState()
    store.dispatch({ type: 'UNKNOWN_ACTION' })
    const stateAfter = store.getState()
    expect(stateAfter).toEqual(stateBefore)
  })
})
