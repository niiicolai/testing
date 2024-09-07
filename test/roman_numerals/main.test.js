import { toRoman } from './src/roman_numerals/main.js';
import { expect, test } from 'vitest'

test.each([
    [1, 3, 'I'],
    [4, 4, 'IV'],  
    [5, 8, 'V'],  
    [9, 9, 'IX'],
    [10, 39, 'X'],  
    [40, 49, 'XL'], 
    [50, 89, 'L'], 
    [90, 99, 'XC'], 
    [100, 399, 'C'], 
    [400, 499, 'CD'], 
    [500, 899, 'D'],  
    [900, 999, 'CM'], 
    [1000, 3999, 'M'],
])('test range from %i to %i', (start, end, contains) => {
    for (let i = start; i <= end; i++) {
        expect(toRoman(i)).toContain(contains);
    }
});
