import { filterPort } from '../../../utils';
import assert from 'assert';

describe('Util', (): void => {

    it('当调用工具函数后，且传入正确的 url 并且匹配到正确结果', (): void => {
        const url: string = 'http://localhost:8080';
        const res = filterPort(url);

        assert(res === '8080');
    });

    it('当调用工具函数后，且传入正确的 url，但没有匹配到结果应该返回null', (): void => {
        const url: string = 'http://localhost';
        const res = filterPort(url);

        assert(res === null);
    });

    it('当调用工具函数后，接收入参为null的情况下，程序应该反馈出正确的信息', (): void => {
        const url = '';
        try {
            filterPort(url);
        } catch (e) {
            assert(e.toString().length > 1);
        }
    });

    it('当调用工具函数后，接收参数超过一个的时候，只匹配第一个参数的结果，并且程序应该给出warning提示', (): void => {
        const url: string = 'http://localhost:8080';
        global.console.warn = jest.fn();
        const res = filterPort(url, url);
        assert(res === '8080');
        expect(global.console.warn).toBeCalledTimes(1);
    });
});


