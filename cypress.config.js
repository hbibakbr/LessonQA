const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'c8w3pt',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
