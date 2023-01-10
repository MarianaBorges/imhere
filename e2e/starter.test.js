const { reloadApp } = require('detox-expo-helpers');

describe('Example', () => {
  beforeEach(async () => {
    await reloadApp();
    const text = element(by.text('Open up App.tsx to start working on your app!'))
    await waitFor(text).toBeVisible().withTimeout(10000);
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Open up App.tsx to start working on your app!'))).toBeVisible();
  });
});
