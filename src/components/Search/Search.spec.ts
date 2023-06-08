import {describe, it, expect} from 'vitest'

import {mount} from '@vue/test-utils'
import Search from "@/components/Search/Search.vue";

describe('Search unit tests', () => {
    it('Search renders correctly ', () => {
        const wrapper = mount(Search, {props: {value: ''}})
        expect(wrapper.classes()).toContain('cm-search')
    })
    it('Search prop value, pass correctly', () => {
        const wrapper = mount(Search, {props: {value: 'test'}})
        expect(wrapper.find('input').element.value).toBe('test')
    })
    it('Search emit event after change', async () => {
        const wrapper = mount(Search, {props: {value: 'test'}})
        const input = wrapper.find('input');
        expect(input.element.value).toBe('test')
        await input.trigger('input',{value: 'newTest'})
        expect(wrapper.emitted('onChange'))
        await wrapper.setProps({value: 'newTest'})
        expect(input.element.value).toBe('newTest')
    })
})