
const { expect } = require('@jest/globals');
const isAnagram = require('./anagram');


test('check word hello', () => {
    expect(isAnagram('Hello', 'olleh')).toBeTruthy();
});

test('check error message', () => {
    expect(isAnagram('Aloha', 'Lyoha')).toBeFalsy();
})