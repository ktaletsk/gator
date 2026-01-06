import { IJupyterLabPageFixture } from '@jupyterlab/galata';

/**
 * Helper class for interacting with Mamba Gator UI in tests.
 * Provides reusable selectors and common actions.
 */
export class GatorHelper {
  constructor(private page: IJupyterLabPageFixture) {}

  // ===== Selectors =====
  
  /** The launcher card button to open the Conda Packages Manager */
  get launcherCard() {
    return this.page.getByRole('button', { name: 'Conda Packages Manager' });
  }

  /** The main Gator widget panel */
  get panel() {
    return this.page.locator('.jp-NbConda');
  }

  /** The environment list container */
  get envList() {
    return this.page.locator('#jp-NbConda-environment');
  }

  /** The package list container */
  get pkgList() {
    return this.page.locator('#jp-NbConda-packages');
  }

  /** The create new environment button */
  get createEnvButton() {
    return this.page.getByRole('button', { name: 'New Environment' });
  }

  /** The search input for filtering packages */
  get searchInput() {
    return this.page.getByPlaceholder('Search Packages');
  }

  // ===== Actions =====

  /**
   * Opens the Conda Packages Manager from the launcher.
   * Waits for the widget to be visible.
   */
  async openManager() {
    await this.launcherCard.click();
    await this.page.waitForTimeout(1000); // Give it a moment to load
  }

  /**
   * Selects an environment by name.
   * @param name - The exact name of the environment to select
   */
  async selectEnvironment(name: string) {
    await this.page.getByText(name, { exact: true }).click();
    await this.page.waitForTimeout(1000); // Wait for packages to load
  }

  /**
   * Types a search query into the package search box.
   * @param query - The search text
   */
  async searchPackage(query: string) {
    await this.searchInput.fill(query);
    await this.page.waitForTimeout(500); // Wait for filtering
  }

  /**
   * Clears the package search box.
   */
  async clearSearch() {
    await this.searchInput.clear();
  }

  /**
   * Waits for a notification message to appear.
   * @param text - The notification text to wait for
   * @param timeout - Maximum time to wait (default 30s)
   */
  async waitForNotification(text: string, timeout = 30000) {
    await this.page.waitForSelector(`text=${text}`, { timeout });
  }
}

