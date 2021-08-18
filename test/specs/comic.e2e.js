describe("Go to main page", () => {
  it("should go to main page when click to welcome button", async () => {
    const elem = await $("~welcome_button");
    await elem.waitForDisplayed();
    await elem.touchAction("tap");
    const mavelLabel = await $('//XCUIElementTypeStaticText[@name="Marvel"]');
    await mavelLabel.waitForDisplayed();
    const value = await mavelLabel.getText();

    expect(value).toBe("Marvel");
  });
});

describe("Go to Comic Tab", () => {
  it("should do to Comic when tap comic tap", async () => {
    const comicTab = await $('//XCUIElementTypeButton[@name="Com"]');
    await comicTab.waitForDisplayed();
    await comicTab.click();
    const comicTab1 = await $('//XCUIElementTypeButton[@name="Com"]');
    await comicTab1.waitForDisplayed();
    await comicTab1.click();
    //click 2 to get
    await driver.setTimeout({ pageLoad: 20000 });
    const comicLabel = await $(
      `//XCUIElementTypeStaticText[@name="Marvel's Comics"]`
    );
    try {
      await comicLabel.waitForDisplayed();
    } catch (error) {
      await comicTab1.click();
      await driver.setTimeout({ pageLoad: 20000 });
    }
    await comicLabel.waitForDisplayed();
    const comicLabelValue = await comicLabel.getText();

    expect(comicLabelValue).toBe("Marvel's Comics");
  });

  it("should go to detail page when tap to detail button", async () => {
    const goToDetailButton = await $(
      '(//XCUIElementTypeButton[@name="Detail"])[1]'
    );
    await goToDetailButton.waitForDisplayed();
    await goToDetailButton.click();

    await driver.setTimeout({ pageLoad: 100000 });
    const webViewFinder = $("~comic_web_view");
    await webViewFinder.waitForDisplayed();
  });

  it("should comeback to character page when tap back", async () => {
    const marvelComicButton = await $(
      `//XCUIElementTypeButton[@name="Marvel's Comics"]`
    );
    await marvelComicButton.waitForDisplayed();
    await marvelComicButton.click();

    const detailButtonFinder = await $(
      '(//XCUIElementTypeButton[@name="Detail"])[1]'
    );
    await detailButtonFinder.waitForDisplayed();
  });
});
