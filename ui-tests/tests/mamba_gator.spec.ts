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

// IN PROGRESS: Click on environment (gator) and make sure a specific package (anyio) is present
test('test Python present in the test environment', async ({ page }) => {
  await page.goto('http://localhost:8888/lab');
  await page.getByRole('button', { name: 'Conda Packages Manager' }).click();

  await page.getByText('gator', { exact: true }).click();

  // check if python is present in the environment
  await expect(page.getByRole('link', { name: 'anyio', exact: true })).toBeVisible();
});