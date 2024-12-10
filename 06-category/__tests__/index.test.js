import { spawnSync } from 'child_process';

test("Korrekt kategoriutskrift för deckare", () => {
    const result = spawnSync('node', ['index.js'], {encoding: 'utf8'});
    expect(result.stdout.trim()).toBe("Spännande val!");
});
