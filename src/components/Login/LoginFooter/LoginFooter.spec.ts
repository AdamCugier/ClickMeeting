import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import LoginFooter from "@/components/Login/LoginFooter/LoginFooter.vue";

describe('LoginFooter unit tests', () => {
    it('LoginFooter renders correctly ', () => {
        const wrapper = mount(LoginFooter)
        expect(wrapper.classes()).toContain('cm-login-footer')
    })
})