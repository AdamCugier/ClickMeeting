import {describe, it, expect} from 'vitest'

import {mount} from '@vue/test-utils'
import Button from "@/components/Buttons/Button/Button.vue";

describe('Button unit tests', () => {
    it('renders string label', () => {
        const wrapper = mount(Button, {props: {label: 'Save'}})
        expect(wrapper.text()).toContain('Save')
    })
    it('Primary prop, generate primary styled button', () => {
        const wrapper = mount(Button, {props: {label: 'Save', primary: true}})
        expect(wrapper.classes()).toContain('cm-btn--primary')
        expect(wrapper.classes('cm-btn--secondary')).toBeFalsy()
    })
    it('Secondary styled button, without', () => {
        const wrapper = mount(Button, {props: {label: 'Save'}})
        expect(wrapper.classes()).toContain('cm-btn--secondary')
        expect(wrapper.classes('cm-btn--primary')).toBeFalsy()
    })
    it('Disable prop true, disable button', () => {
        const wrapper = mount(Button, {props: {label: 'Save', disable: true}})
        expect(wrapper.attributes('disable')).toBeTruthy()
    })
    it('Enable button without disable prop', () => {
        const wrapper = mount(Button, {props: {label: 'Save'}})
        expect(wrapper.attributes('disable')).toBeFalsy()
    })
    it('size prop sm, generate small button', () => {
        const wrapper = mount(Button, {props: {label: 'Save', size: 'sm'}})
        expect(wrapper.classes()).toContain('cm-btn--sm')
        expect(wrapper.classes('cm-btn--md')).toBeFalsy()
        expect(wrapper.classes('cm-btn--lg')).toBeFalsy()
    })
    it('size prop md, generate small button', () => {
        const wrapper = mount(Button, {props: {label: 'Save', size: 'md'}})
        expect(wrapper.classes('cm-btn--sm')).toBeFalsy()
        expect(wrapper.classes()).toContain('cm-btn--md')
        expect(wrapper.classes('cm-btn--lg')).toBeFalsy()
    })
    it('size prop lg, generate small button', () => {
        const wrapper = mount(Button, {props: {label: 'Save', size: 'lg'}})
        expect(wrapper.classes('cm-btn--sm')).toBeFalsy()
        expect(wrapper.classes('cm-btn--md')).toBeFalsy()
        expect(wrapper.classes()).toContain('cm-btn--lg')
    })
    it('Click on button emit event', async () => {
        const wrapper = mount(Button, {props: {label: 'Save'}})
        await wrapper.find('button').trigger('click')
        expect(wrapper.emitted('click')).toBeTruthy()
    })
})
