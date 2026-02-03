import { describe, it, expect } from 'vitest'
import store from './store'

describe('Redux Store', () => {
  it('has correct initial state', () => {
    const state = store.getState()
    expect(state).toEqual({
      sidebarShow: true,
      theme: 'light',
    })
  })

  it('handles set action to update sidebarShow', () => {
    store.dispatch({ type: 'set', sidebarShow: false })
    const state = store.getState()
    expect(state.sidebarShow).toBe(false)
  })

  it('handles set action to update theme', () => {
    store.dispatch({ type: 'set', theme: 'dark' })
    const state = store.getState()
    expect(state.theme).toBe('dark')
  })

  it('handles set action with multiple properties', () => {
    store.dispatch({ type: 'set', sidebarShow: true, theme: 'light' })
    const state = store.getState()
    expect(state.sidebarShow).toBe(true)
    expect(state.theme).toBe('light')
  })

  it('returns current state for unknown action types', () => {
    const stateBefore = store.getState()
    store.dispatch({ type: 'UNKNOWN_ACTION' })
    const stateAfter = store.getState()
    expect(stateAfter).toEqual(stateBefore)
  })
})
