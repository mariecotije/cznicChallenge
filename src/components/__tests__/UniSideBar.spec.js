import { mount } from '@vue/test-utils'
import { test } from 'vitest'
import assert from 'assert'
import UniSideBar from '../UniSideBar.vue'

test('UniSideBar renders correctly', () => {
    const wrapper = mount(UniSideBar)
    assert.strictEqual(wrapper.find('.sidebar').exists(), true)
})

test('UniSideBar displays the correct title', () => {
    const wrapper = mount(UniSideBar)
    const title = wrapper.find('h2')
    assert.strictEqual(title.text(), 'Applications')
})

test('UniSideBar has a menu item with correct text', () => {
    const wrapper = mount(UniSideBar)
    const menuItem = wrapper.find('.menu-item p')
    assert.strictEqual(menuItem.text(), 'Registry')
})