import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import LoginHeader from "@/components/Login/LoginHeader/LoginHeader.vue";

describe('LoginHeader unit tests', () => {
    it('LoginHeader renders correctly ', () => {
        const wrapper = mount(LoginHeader)
        expect(wrapper.classes()).toContain('cm-login-header')
    })
})