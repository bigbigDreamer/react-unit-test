import React from 'react';
import { mount, ReactWrapper } from "enzyme";
import TodoList from "../index";

describe('Todo-List', () => {

    let wrapper: ReactWrapper;

    beforeEach(() => {
        wrapper = mount(<TodoList/>)
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('在输入框中输入内容回车后，应该新增一条todo-item', () => {
        const inputWrapper = wrapper.find('input')
        inputWrapper.simulate('input', { target: { value: '今天该休息了' } });
        inputWrapper.simulate('keyup', { key: 'Enter' });
        const todoLength = wrapper.find('li').length;

        expect(todoLength).toBe(1);
    });

    // it('在输入框中输入内容，点击按钮时，应该新增一条todo-item', () => {
    //
    // })
});