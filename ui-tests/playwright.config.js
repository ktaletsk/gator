/**
 * Configuration for Playwright using default from @jupyterlab/galata
 */
const baseConfig = require('@jupyterlab/galata/lib/playwright-config');

module.exports = {
  ...baseConfig,
  // Increase default timeout for conda operations (can be slow)
  timeout: 120000, // 2 minutes per test
  expect: {
    toMatchSnapshot: {
      // Allow small pixel differences between snapshots
      maxDiffPixelRatio: 0.01
    }
  },
  webServer: {
    command: 'jlpm start',
    url: 'http://localhost:8888/lab',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI
  }
};
