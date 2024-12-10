import { spawnSync } from 'child_process';

test("Beräknar moms korrekt", () => {
    const result = spawnSync('node', ['index.js'], {encoding: 'utf8'});
    expect(result.stdout.trim()).toBe("125");
});
