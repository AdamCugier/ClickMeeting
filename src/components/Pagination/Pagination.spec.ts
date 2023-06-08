import {describe, it, expect} from 'vitest'

import {mount} from '@vue/test-utils'
import Pagination from "@/components/Pagination/Pagination.vue";

describe('Pagination unit tests', () => {
    it('pagination renders correctly ', () => {
        const wrapper = mount(Pagination, {props: {activePage: 1, lastPage: 3}})
        expect(wrapper.find('.cm-pagination')).toBeTruthy();
        expect(wrapper.find('.cm-pagination--btn-active').text()).toBe('1');
    })
    it('Pagination hide if last page < 2 ', () => {
        const wrapper = mount(Pagination, {props: {activePage: 1, lastPage: 1}})
        expect(wrapper.find('.cm-pagination').exists()).toBeFalsy();
    })
    it('Pagination "First" Button is hide on first page ', async () => {
        const wrapper = mount(Pagination, {props: {activePage: 1, lastPage: 5}})
        expect(wrapper.find('.cm-pagination--btn-first').exists()).toBeFalsy();
        await wrapper.setProps({activePage: 2, lastPage: 5})
        expect(wrapper.find('.cm-pagination--btn-first').exists()).toBeTruthy();
    })
    it('Pagination "Prev" Button is hide on first and second page ', async () => {
        const wrapper = mount(Pagination, {props: {activePage: 1, lastPage: 5}})
        expect(wrapper.find('.cm-pagination--btn-prev').exists()).toBeFalsy();
        await wrapper.setProps({activePage: 2, lastPage: 5})
        expect(wrapper.find('.cm-pagination--btn-prev').exists()).toBeFalsy();
        await wrapper.setProps({activePage: 3, lastPage: 5})
        expect(wrapper.find('.cm-pagination--btn-prev').exists()).toBeTruthy();
    })
    it('Pagination "Next" Button is hide on last two pages ', async () => {
        const wrapper = mount(Pagination, {props: {activePage: 3, lastPage: 5}})
        expect(wrapper.find('.cm-pagination--btn-next').exists()).toBeTruthy();
        await wrapper.setProps({activePage: 4, lastPage: 5})
        expect(wrapper.find('.cm-pagination--btn-next').exists()).toBeFalsy();
        await wrapper.setProps({activePage: 5, lastPage: 5})
        expect(wrapper.find('.cm-pagination--btn-next').exists()).toBeFalsy();
    })
    it('Pagination "Last" Button is hide on last page ', async () => {
        const wrapper = mount(Pagination, {props: {activePage: 4, lastPage: 5}})
        expect(wrapper.find('.cm-pagination--btn-last').exists()).toBeTruthy();
        await wrapper.setProps({activePage: 5, lastPage: 5})
        expect(wrapper.find('.cm-pagination--btn-last').exists()).toBeFalsy();
    })
    it('Click on "First" button emit event ', async () => {
        const wrapper = mount(Pagination, {props: {activePage: 3, lastPage: 5}})
        await wrapper.find('.cm-pagination--btn-first').trigger('click')
        expect(wrapper.emitted('changePage')).toBeTruthy()
    })
    it('Click on "Prev" button emit event ', async () => {
        const wrapper = mount(Pagination, {props: {activePage: 3, lastPage: 5}})
        await wrapper.find('.cm-pagination--btn-prev').trigger('click')
        expect(wrapper.emitted('changePage')).toBeTruthy()
    })
    it('Click on "Next" button emit event ', async () => {
        const wrapper = mount(Pagination, {props: {activePage: 3, lastPage: 5}})
        await wrapper.find('.cm-pagination--btn-next').trigger('click')
        expect(wrapper.emitted('changePage')).toBeTruthy()
    })
    it('Click on "Last" button emit event ', async () => {
        const wrapper = mount(Pagination, {props: {activePage: 3, lastPage: 5}})
        await wrapper.find('.cm-pagination--btn-last').trigger('click')
        expect(wrapper.emitted('changePage')).toBeTruthy()
    })
})