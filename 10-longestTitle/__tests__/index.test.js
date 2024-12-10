import { spawnSync } from 'child_process';

test("Hittar längsta titel", () => {
    const result = spawnSync('node', ['index.js'], {encoding: 'utf8'});
    expect(result.stdout.trim()).toBe("En väldigt väldigt lång titel");
});
