// import { expect } from 'chai';
import { bar, barAsync } from '../foo';

describe('bar', () => {
    // test('adds 1 + 2 to equal 3', () => {
    //     expect(sum(1, 2)).toBe(3);
    //   });
    test('sync function returns true', () => {
        const result = bar();
        expect(result).toBe(true);
    });

    test('async function returns true', async () => {
        const result = await barAsync();
        expect(result).toBe(true);
    });
});
