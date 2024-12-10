import { spawnSync } from 'child_process';

test("Ger rabatt vid fler än 2 böcker", () => {
    const result = spawnSync('node', ['index.js'], {encoding: 'utf8'});
    const output = result.stdout.trim();
    expect(output).toMatch(/Pris efter ev rabatt: 270 kr/);
});
