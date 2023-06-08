import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import InputCM from "@/components/Input/InputCM.vue";

describe('InputCM unit tests', () => {
    it('Input renders correctly ', () => {
        const wrapper = mount(InputCM, {props: {label: 'test', id:'1', modelValue: 'testValue'}})
        const label = wrapper.find('label');
        const input = wrapper.find('input')
        expect(wrapper.classes()).toContain('cm-input--wrapper')
        expect(label.text()).toBe('test')
        expect(input.element.value).toBe('testValue')
        expect(input.attributes('id')).toBe('1')
    })
    it('Input emit event after change', async () => {
        const wrapper = mount(InputCM, {props: {label: 'test', id:'1', modelValue: 'testValue'}})
        const input = wrapper.find('input');
        expect(input.element.value).toBe('testValue')
        await input.trigger('change', {value: 'newTestValue'})
        expect(wrapper.emitted('change'))
        await wrapper.setProps({modelValue: 'newTestValue'})
        expect(input.element.value).toBe('newTestValue')
    })
})