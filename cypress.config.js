const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c8w3pt',
  env: {
    username : 'xxx'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 680,
    pageLoadTimeout: 120000,
  },
});
