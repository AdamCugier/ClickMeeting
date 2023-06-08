import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import LoginForm from "@/components/Login/LoginForm/LoginForm.vue";

describe('LoginForm unit tests', () => {
    it('LoginForm renders correctly ', () => {
        const wrapper = mount(LoginForm)
        expect(wrapper.classes()).toContain('cm-login-form')
    })
    it('Click on Login Button emit Event', async () => {
        const wrapper = mount(LoginForm)
        await wrapper.find('button').trigger('click')
        expect(wrapper.emitted('click')).toBeTruthy()
    })
})