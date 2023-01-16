const { reloadApp } = require('detox-expo-helpers');

describe('Example', () => {
  beforeEach(async () => {
    await reloadApp();
    await sleep(4000);
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Open up App.tsx to start working on your app!'))).toBeVisible();
  });
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}