import { spawnSync } from 'child_process';

test("Skriver ut namnet", () => {
    const result = spawnSync('node', ['index.js'], {encoding: 'utf8'});
    expect(result.stdout.trim()).toMatch(/^Ditt namn är .+/);
});
