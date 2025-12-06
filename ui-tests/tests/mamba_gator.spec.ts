import { expect, test } from '@jupyterlab/galata';

/**
 * Don't load JupyterLab webpage before running the tests.
 * This is required to ensure we capture all log messages.
 */
test.use({ autoGoto: false });

test('test gator icon is visible in the launcher', async ({ page }) => {
  await page.goto('http://localhost:8888/lab');
  await expect(page.getByRole('button', { name: 'Conda Packages Manager' })).toBeVisible();
});