import { BaseComponent } from '../framework/component';
import { Page, Locator } from 'playwright';

export class Table extends BaseComponent {
  constructor(page: Page, selector: string) {
    super(page, selector);
  }

  // Get all the rows in the table
  private async getRows(): Promise<Locator[]> {
    return this.locator.locator('[data-component="TableRow"]').all();
  }

  async getNumberOfRows(): Promise<number> {
    return (await this.getRows()).length
  }
  async waitForNumberOfRows(expectedNumber: number, timeout: number = 10000): Promise<void> {
    const startTime = Date.now();

    while (Date.now() - startTime < timeout) {
      const currentNumberOfRows = await this.getNumberOfRows();
      if (currentNumberOfRows === expectedNumber) {
        return;
      }
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    throw new Error(`Timeout waiting for number of rows to be ${expectedNumber}. Current number of rows: ${await this.getNumberOfRows()}`);
  }
  async clickOnRow(rowNumber = 1) {
    let rows = await this.getRows();
    await rows[rowNumber -1].click()
  }

}
