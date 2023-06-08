import {describe, it, expect} from 'vitest'

import {mount} from '@vue/test-utils'
import Tooltip from "@/components/Tooltip/Tooltip.vue";

describe('Tooltip unit tests', () => {
    it('Tooltip renders correctly', () => {
        //@ts-ignore
        const wrapper = mount(Tooltip, {props: {text: 'test', position: 'left'}})
        expect(wrapper.find('.cm-tooltip').text()).toBe('test');
    })
    it('Tooltip position on the left', () => {
        //@ts-ignore
        const wrapper = mount(Tooltip, {props: {text: 'test', position: 'left'}}).find('.cm-tooltip')
        expect(wrapper.classes('cm-tooltip--left')).toBeTruthy();
        expect(wrapper.classes('cm-tooltip--right')).toBeFalsy();
        expect(wrapper.classes('cm-tooltip--top')).toBeFalsy();
        expect(wrapper.classes('cm-tooltip--bottom')).toBeFalsy();
    })
    it('Tooltip position on the right', () => {
        //@ts-ignore
        const wrapper = mount(Tooltip, {props: {text: 'test', position: 'right'}}).find('.cm-tooltip')
        expect(wrapper.classes('cm-tooltip--left')).toBeFalsy();
        expect(wrapper.classes('cm-tooltip--right')).toBeTruthy();
        expect(wrapper.classes('cm-tooltip--top')).toBeFalsy();
        expect(wrapper.classes('cm-tooltip--bottom')).toBeFalsy();
    })
    it('Tooltip position on the top', () => {
        //@ts-ignore
        const wrapper = mount(Tooltip, {props: {text: 'test', position: 'top'}}).find('.cm-tooltip')
        expect(wrapper.classes('cm-tooltip--left')).toBeFalsy();
        expect(wrapper.classes('cm-tooltip--right')).toBeFalsy();
        expect(wrapper.classes('cm-tooltip--top')).toBeTruthy();
        expect(wrapper.classes('cm-tooltip--bottom')).toBeFalsy();
    })
    it('Tooltip position on the top', () => {
        //@ts-ignore
        const wrapper = mount(Tooltip, {props: {text: 'test', position: 'bottom'}}).find('.cm-tooltip')
        expect(wrapper.classes('cm-tooltip--left')).toBeFalsy();
        expect(wrapper.classes('cm-tooltip--right')).toBeFalsy();
        expect(wrapper.classes('cm-tooltip--top')).toBeFalsy();
        expect(wrapper.classes('cm-tooltip--bottom')).toBeTruthy();
    })
})
