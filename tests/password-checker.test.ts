import { calculatePasswordStrength } from '../src/calculate-password-strength'

// Homework 8. Password checker
test('password strength very weak', () => {
    expect(calculatePasswordStrength('password')).toBe('Very Weak');
});

test('password strength weak', () => {
    expect(calculatePasswordStrength('password123')).toBe('Weak');
});

test('password strength moderate', () => {
    expect(calculatePasswordStrength('Password123')).toBe('Moderate');
});

test('password strength strong', () => {
    expect(calculatePasswordStrength('Password123@')).toBe('Strong');
});