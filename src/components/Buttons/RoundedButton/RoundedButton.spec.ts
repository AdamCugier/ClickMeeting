import {describe, it, expect} from 'vitest'

import {mount} from '@vue/test-utils'
import RoundedButton from "@/components/Buttons/RoundedButton/RoundedButton.vue";

describe('RoundedButton unit tests', () => {
    it('RoundedButton render correctly', () => {
        const wrapper = mount(RoundedButton, {})
        expect(wrapper.classes()).toContain('cm-rounded-btn')
    })
    it('Primary prop, generate primary styled button', () => {
        const wrapper = mount(RoundedButton, {props: {primary: true}})
        expect(wrapper.classes()).toContain('cm-rounded-btn--primary')
        expect(wrapper.classes('cm-rounded-btn--secondary')).toBeFalsy()
    })
    it('Secondary styled button, without', () => {
        const wrapper = mount(RoundedButton, {props: {}})
        expect(wrapper.classes()).toContain('cm-rounded-btn--secondary')
        expect(wrapper.classes('cm-rounded-btn--primary')).toBeFalsy()
    })
    it('Disable prop true, disable button', () => {
        const wrapper = mount(RoundedButton, {props: {disabled: true}})
        expect(wrapper.classes()).toContain('cm-rounded-btn--disabled')
    })
    it('Enable button without disable prop', () => {
        const wrapper = mount(RoundedButton, {props: {}})
        expect(wrapper.classes()).not.toContain('cm-rounded-btn--disabled')
    })
    it('size prop sm, generate small button', () => {
        const wrapper = mount(RoundedButton, {props: {size: 'sm'}})
        expect(wrapper.classes()).toContain('cm-rounded-btn--sm')
        expect(wrapper.classes('cm-rounded-btn--md')).toBeFalsy()
        expect(wrapper.classes('cm-rounded-btn--lg')).toBeFalsy()
    })
    it('size prop md, generate small button', () => {
        const wrapper = mount(RoundedButton, {props: {size: 'md'}})
        expect(wrapper.classes('cm-rounded-btn--sm')).toBeFalsy()
        expect(wrapper.classes()).toContain('cm-rounded-btn--md')
        expect(wrapper.classes('cm-rounded-btn--lg')).toBeFalsy()
    })
    it('size prop lg, generate small button', () => {
        const wrapper = mount(RoundedButton, {props: {size: 'lg'}})
        expect(wrapper.classes('cm-rounded-btn--sm')).toBeFalsy()
        expect(wrapper.classes('cm-rounded-btn--md')).toBeFalsy()
        expect(wrapper.classes()).toContain('cm-rounded-btn--lg')
    })
    it('Click on button emit event', async () => {
        const wrapper = mount(RoundedButton, {props: {icon: 'fa-solid fa-message'}})
        await wrapper.find('.cm-rounded-btn').trigger('click')
        expect(wrapper.emitted('click')).toBeTruthy()
    })
})