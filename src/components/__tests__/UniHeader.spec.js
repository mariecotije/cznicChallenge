import { describe, it, expect } from 'vitest';
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import UniHeader from '../UniHeader.vue'

describe('UniHeader.vue', () => {
    it('mounts and renders', () => {
        const wrapper = mount(UniHeader)
        expect(wrapper.html()).toBeTruthy()
    })

    it('toggles user menu on click', async () => {
        const wrapper = mount(UniHeader)
        expect(wrapper.vm.isMenuOpen).toBe(false)
        await wrapper.find('.nav-container__user-menu').trigger('click')
        await nextTick()
        expect(wrapper.vm.isMenuOpen).toBe(true)
    })
})
