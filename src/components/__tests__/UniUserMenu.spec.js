import { test } from 'vitest'
import { mount } from '@vue/test-utils'
import { assert } from 'chai'
import UniUserMenu from '../UniUserMenu.vue'

test('renders the user name and role', () => {
    const wrapper = mount(UniUserMenu)
    assert.strictEqual(wrapper.find('.user-detail__info p').text(), 'Jan Musílek')
    assert.strictEqual(wrapper.find('.user-detail__info .role').text(), 'admin')
})

test('renders the logout button', () => {
    const wrapper = mount(UniUserMenu)
    assert.strictEqual(wrapper.find('.logout-btn p').text(), 'Logout')
})