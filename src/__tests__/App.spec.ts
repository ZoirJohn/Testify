import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '@/app/App.vue'
import { createVuetify } from 'vuetify/framework'

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(App, { global: { plugins: [createVuetify()] } })
    expect(wrapper.text()).toContain('You did it!')
  })
})
