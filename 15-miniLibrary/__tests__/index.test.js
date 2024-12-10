import { spawnSync } from 'child_process';

test("Kör mini-bibliotekets funktioner", () => {
    const result = spawnSync('node', ['index.js'], {encoding: 'utf8'});
    const output = result.stdout.trim();

    expect(output).toMatch(/JavaScript för nybörjare - 200 kr/);
    expect(output).toMatch(/Avancerad CSS - 150 kr/);
    expect(output).toMatch(/HTML grunder - 100 kr/);

    // Kolla filtrering
    expect(output).toMatch(/Böcker under 150 kr:\s*HTML grunder - 100 kr/);

    // Kolla sortering (alfabetisk)
    // Alfabetiskt: Avancerad CSS, HTML grunder, JavaScript för nybörjare
    const afterSort = output.split("Böcker sorterade efter titel:")[1].trim();
    const lines = afterSort.split('\n').map(l => l.trim());
    expect(lines[0]).toBe("Avancerad CSS - 150 kr");
    expect(lines[1]).toBe("HTML grunder - 100 kr");
    expect(lines[2]).toBe("JavaScript för nybörjare - 200 kr");
});
