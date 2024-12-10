import { spawnSync } from 'child_process';

test("Sorterar böcker i stigande ordning efter pris", () => {
    const result = spawnSync('node', ['index.js'], {encoding: 'utf8'});
    const lines = result.stdout.trim().split('\n');
    expect(lines[0]).toMatch(/Billig bok: 50/);
    expect(lines[1]).toMatch(/Mellanpris bok: 150/);
    expect(lines[2]).toMatch(/Dyr bok: 300/);
});
