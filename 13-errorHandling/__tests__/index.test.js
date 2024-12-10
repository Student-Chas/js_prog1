import { spawnSync } from 'child_process';

test("Hanterar felaktigt index", () => {
    const result = spawnSync('node', ['index.js'], {encoding: 'utf8'});
    const lines = result.stdout.trim().split('\n');
    expect(lines[0]).toBe("Bok1");
    expect(lines[1]).toBe("Fel: Ogiltigt index");
});
