
/**
 * @constant {Object} roman - The roman numeral object
 * @description - It contains the roman numeral values plus
 * those requiring subtraction to ensure code simplicity.
 */
const roman = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
};

/**
 * @function findLargestLessThan
 * @param {number} n - The number to find the largest value less than
 * @returns {number} - The largest value less than n
 */
const findLargestLessThan = (n) => {
    const arr = Object.keys(roman);
    for (let i = arr.length - 1; i >= 0; i--) {
        if (n >= arr[i]) {
            return arr[i];
        }
    }
};

/**
 * @function toRoman
 * @param {number} num - The number to convert to roman numeral
 * @returns {string} - The roman numeral
 */
export const toRoman = (num) => {
    /**
     * If the number is a key in the roman object,
     * just return the value.
     */
    if (roman[num] !== undefined) {
        return roman[num];
    }

    let result = '';
    while (num > 0) {
        // Find the largest value less than or equal to num
        const key = findLargestLessThan(num);

        // Subtract the largest value less from the num
        // to get the remainder.
        num -= key;
        // Add the roman numeral to the result
        result += roman[key];
    }

    return result;
}
