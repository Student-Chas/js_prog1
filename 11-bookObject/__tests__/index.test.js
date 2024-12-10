import { spawnSync } from 'child_process';

test("Skriver ut info om bokobjektet", () => {
    const result = spawnSync('node', ['index.js'], {encoding: 'utf8'});
    expect(result.stdout.trim()).toMatch(/Boken "En bra bok" av A. Författare kostar 200 kr./);
});
