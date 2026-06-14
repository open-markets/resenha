import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ContentPreview from '../ContentPreview.vue'

describe('ContentPreview', () => {
  it('renders properly', () => {
    const wrapper = mount(ContentPreview, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
