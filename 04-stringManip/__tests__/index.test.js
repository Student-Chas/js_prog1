import { spawnSync } from 'child_process';

test("Skriver ut längd och versaler", () => {
    const result = spawnSync('node', ['index.js'], {encoding: 'utf8'});
    const lines = result.stdout.trim().split('\n');
    expect(lines.length).toBe(2);
    expect(Number(lines[0])).toBe(titelLength()); 
    expect(lines[1]).toBe("JAVASCRIPT FOR BEGINNERS");

    function titelLength() {
        return "JavaScript for Beginners".length;
    }
});
