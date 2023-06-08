import {describe, it, expect} from 'vitest'

import {mount} from '@vue/test-utils'
import TextWithLabel from "@/components/TextWithLabel/TextWithLabel.vue";

describe('TextWithLabel unit tests', () => {
    it('TextWithLabel renders correctly', () => {
        const wrapper = mount(TextWithLabel, {props: {label: 'Test', text: 'lorem Ipsum'}})
        expect(wrapper.classes('cm-labeled-text--wrapper')).toBeTruthy();
        expect(wrapper.find('.cm-labeled-text--label').text()).toBe('Test');
        expect(wrapper.find('.cm-labeled-text--text').text()).toBe('lorem Ipsum');
    })
    it('Position on left', () => {
        const wrapper = mount(TextWithLabel, {props: {label: 'Test', text: 'lorem Ipsum', position: 'left'}})
        expect(wrapper.classes('cm-labeled-text--left')).toBeTruthy();
        expect(wrapper.classes('cm-labeled-text--center')).toBeFalsy();
        expect(wrapper.classes('cm-labeled-text--right')).toBeFalsy();
    })
    it('Position on center', () => {
        const wrapper = mount(TextWithLabel, {props: {label: 'Test', text: 'lorem Ipsum', position: 'center'}})
        expect(wrapper.classes('cm-labeled-text--left')).toBeFalsy();
        expect(wrapper.classes('cm-labeled-text--center')).toBeTruthy();
        expect(wrapper.classes('cm-labeled-text--right')).toBeFalsy();
    })
    it('Position on right', () => {
        const wrapper = mount(TextWithLabel, {props: {label: 'Test', text: 'lorem Ipsum', position: 'right'}})
        expect(wrapper.classes('cm-labeled-text--left')).toBeFalsy()
        expect(wrapper.classes('cm-labeled-text--center')).toBeFalsy()
        expect(wrapper.classes('cm-labeled-text--right')).toBeTruthy()
    })
})
