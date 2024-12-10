import { spawnSync } from 'child_process';

test("Skriver bara ut långa titlar", () => {
    const result = spawnSync('node', ['index.js'], {encoding: 'utf8'});
    const lines = result.stdout.trim().split('\n');
    for (const line of lines) {
        expect(line.length).toBeGreaterThan(10);
    }
});
