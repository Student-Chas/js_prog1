import { spawnSync } from 'child_process';

test("Räknar ut totalpris", () => {
    const result = spawnSync('node', ['index.js'], {encoding: 'utf8'});
    expect(result.stdout.trim()).toBe("Totalt: 300 kr");
});
