/**
 * @desc 功能点
 * 1. 输入内容后，回车调用外层的 dispatch，
 * 2. 输入内容后，点击按钮调用外层 dispatch
 * 3. input 内容为空时，回车不做任何反应
 * 4. input 内容为空时，点击按钮不做任何反应
 * 5. 输入内容后，什么都不做 | 不回车，不会触发 dispatch （可以分两条测试用例）
 */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import OperatePanel from "../operate-panel";

describe('Operate-Panel', (): void => {

    let wrapper: ShallowWrapper;
    const dispatch = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<OperatePanel dispatch={dispatch}/>)
    });
    afterEach(() => {
       wrapper.unmount();
       jest.clearAllMocks();
    });

   test('输入内容后，回车调用外层的 dispatch', () => {
        const todoContent = '今天需要读书';
        wrapper.find('input').simulate('input', { target: { value: todoContent } });
        wrapper.find('input').simulate('keyup', { key: 'Enter' });
        expect(dispatch).toBeCalledTimes(1);
        // expect(dispatch).toHaveBeenCalledWith(todoContent);
   });

   test('input 内容为空时，什么都不做，不触发 dispatch', () => {
       const todoContent = '今天需要读书';
       wrapper.find('input').simulate('input', { target: { value: todoContent } });
       expect(dispatch).toBeCalledTimes(0);
   });

    test('输入内容后，不回车，不会触发 dispatch', () => {
        const todoContent = '今天需要读书';
        wrapper.find('input').simulate('input', { target: { value: todoContent } });
        wrapper.find('input').simulate('keyup', { key: 'Tab' });
        expect(dispatch).toBeCalledTimes(0);
    });

});

