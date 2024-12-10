import { spawnSync } from 'child_process';

test("Skriver ut 'Hej, världen!'", () => {
    const result = spawnSync('node', ['index.js'], {encoding: 'utf8'});
    expect(result.stdout.trim()).toBe("Hej, världen!");
});
