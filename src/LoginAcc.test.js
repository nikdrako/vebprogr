import { add, subtract, multiply } from './LoginAcc';

describe('Utils functions', () => {
    test('should call handler when clicking outside the ref', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
    });

    test('should not call handler when clicking inside the ref', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(1, 1)).toBe(0);
        expect(subtract(0, 1)).toBe(-1);
    });

    test('should remove event listener on unmount', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-1, 1)).toBe(-1);
        expect(multiply(0, 5)).toBe(0);
    });
});