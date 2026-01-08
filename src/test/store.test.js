import { describe, it, expect } from 'vitest'
import store from '../store'

describe('Redux Store', () => {
  it('should have initial state with sidebarShow true and theme light', () => {
    const state = store.getState()
    expect(state.sidebarShow).toBe(true)
    expect(state.theme).toBe('light')
  })

  it('should update state when dispatching set action', () => {
    store.dispatch({ type: 'set', sidebarShow: false })
    const state = store.getState()
    expect(state.sidebarShow).toBe(false)
  })

  it('should update theme when dispatching set action', () => {
    store.dispatch({ type: 'set', theme: 'dark' })
    const state = store.getState()
    expect(state.theme).toBe('dark')
  })

  it('should handle unknown action type by returning current state', () => {
    const stateBefore = store.getState()
    store.dispatch({ type: 'unknown' })
    const stateAfter = store.getState()
    expect(stateAfter).toEqual(stateBefore)
  })

  it('should update multiple properties at once', () => {
    store.dispatch({ type: 'set', sidebarShow: true, theme: 'light' })
    const state = store.getState()
    expect(state.sidebarShow).toBe(true)
    expect(state.theme).toBe('light')
  })
})
