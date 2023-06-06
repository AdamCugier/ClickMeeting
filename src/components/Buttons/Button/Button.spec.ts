import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Button from "@/components/Buttons/Button/Button.vue";

describe('Buttons', () => {
    it('renders properly', () => {
        const wrapper = mount(Button, { props: { label: 'Save' } })
        expect(wrapper.text()).toContain('Save')
    })
})
