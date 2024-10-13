import { calculatePasswordStrength } from '../src/calculate-password-strength'

// Homework 8. Password checker
test('should return password strength very weak, as fulfills only length requirements', () => {
    expect(calculatePasswordStrength('password')).toBe('Very Weak');
});

test('should return password strength weak, as fulfills  length and digits requirements', () => {
    expect(calculatePasswordStrength('password123')).toBe('Weak');
});

test('should return password strength moderate, as fulfills length, upper case and digits requirements', () => {
    expect(calculatePasswordStrength('Password123')).toBe('Moderate');
});

test('shoul return password strength strong, as fulfills all mandatory requirements for strong password', () => {
    expect(calculatePasswordStrength('Password123@')).toBe('Strong');
});