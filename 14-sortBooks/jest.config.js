// jest.config.js (om du använder type: "module" i package.json kan du skriva export default)
export default {
    testEnvironment: 'node',
    transform: {},  // Inga transformeringar, förutsatt att koden redan är giltig ESM
    extensionsToTreatAsEsm: ['.js'] // Behandla .js-filer som ESM
  }
  