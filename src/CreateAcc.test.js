// utils.test.js
import { divide, isEven, capitalize } from './CreateAcc';

describe('Utils functions', () => {
    test('divide function should correctly divide two numbers', () => {
        expect(divide(6, 3)).toBe(2);
        expect(divide(10, 2)).toBe(5)
        expect(divide(40, 2)).toBe(20);
    });

    test('isEven function should correctly check if a number is even', () => {
        expect(isEven(4)).toBe(true);
        expect(isEven(7)).toBe(false);
        expect(isEven(0)).toBe(true);
    });

    test('capitalize function should correctly capitalize the first letter of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('world')).toBe('World');
        expect(capitalize('')).toBe('');
        expect(capitalize(123)).toBe('');
    });
});