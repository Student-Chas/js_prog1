import { spawnSync } from 'child_process';

test("Skriver ut alla boktitlar", () => {
    const result = spawnSync('node', ['index.js'], {encoding: 'utf8'});
    const lines = result.stdout.trim().split('\n');
    expect(lines.length).toBeGreaterThanOrEqual(5);
});
