import { expect, test } from '@jupyterlab/galata';
import { GatorHelper } from './helpers/GatorHelper';

/**
 * Visual regression tests for Mamba Gator UI.
 * These tests capture screenshots and compare them against baseline snapshots.
 */

// Don't load JupyterLab webpage before running the tests
test.use({ autoGoto: false });

test.describe('Visual Regression', () => {
  let gator: GatorHelper;

  test.beforeEach(async ({ page }) => {
    gator = new GatorHelper(page);
    await page.goto('http://localhost:8888/lab');
  });

  test('main panel appearance after opening', async ({ page }) => {
    // Open the Gator manager
    await gator.openManager();
    
    // Wait a bit more for everything to settle
    await page.waitForTimeout(2000);

    // Take a screenshot of the main panel
    await expect(gator.panel).toHaveScreenshot('main-panel-initial.png');
  });
});

