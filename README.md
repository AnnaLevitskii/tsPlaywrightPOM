# tsPlaywrightPOM

`npx playwright test`
Runs the end-to-end tests.

`npx playwright test --headed`
Run tests with gui.

`npx playwright test --project chromium --headed`
Runs the tests only on Chrome with gui.

`npx playwright test --grep @fast`

<!-- test('test login page', {
  tag: '@fast',
}, async ({ page }) => {
  // ...
}); -->

Run tests that have a particular tag.

`npx playwright test --ui`
Starts the interactive UI mode.

`npx playwright show-report`
