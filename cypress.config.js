const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1/',
    setupNodeEvents(on, config) {
      // eventos personalizados si necesitas
    },
  },
});