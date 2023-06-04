import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Button from "@/components/Button/Button.vue";

describe('Button', () => {
    it('renders properly', () => {
        const wrapper = mount(Button, { props: { label: 'Save' } })
        expect(wrapper.text()).toContain('Save')
    })
})
