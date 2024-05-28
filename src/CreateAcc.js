export function divide(a, b) {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
}

export function isEven(num) {
    return num % 2 === 0;
}

export function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}