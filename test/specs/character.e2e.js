const Utils = require("../utils/utils.js");

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

describe("Search Character", () => {
  it("should show valid result when enter valid word on search text field", async () => {
    const searchTextField = await $(
      '//XCUIElementTypeTextField[@name="search_text_field"]'
    );
    await searchTextField.waitForDisplayed();
    await searchTextField.touchAction("tap");
    await searchTextField.setValue("Captain");

    const characterRow = await $(
      '(//XCUIElementTypeStaticText[@name="character_row"])[1]'
    );
    await characterRow.waitForDisplayed();
  });

  it("should go to detail page when tap to detail button", async () => {
    const goToWebViewButton = await $(
      '(//XCUIElementTypeButton[@name="go_to_webview_button"])[1]'
    );
    await goToWebViewButton.waitForDisplayed();
    await goToWebViewButton.click();
    const characterWebView = await $(
      '//XCUIElementTypeWebView[@name="character"]'
    );
    await characterWebView.waitForDisplayed();

    await driver.setTimeout({ pageLoad: 100000 });
    const detailViewComponent = await $(
      '//XCUIElementTypeLink[@name="open navigation"]'
    );
    await driver.setTimeout({ pageLoad: 100000 });
    await detailViewComponent.waitForDisplayed();

    await driver.execute("mobile: scroll", { direction: "down" });
  });

  it("should comeback to character page when tap back", async () => {
    const marvelButton = await $('//XCUIElementTypeButton[@name="Marvel"]');
    await marvelButton.waitForDisplayed();
    await marvelButton.click();

    const searchTextField = await $(
      '//XCUIElementTypeTextField[@name="search_text_field"]'
    );
    await searchTextField.waitForDisplayed();
  });

  it("should go to comic page when tap to comic button", async () => {
    const goToWebViewButton = await $(
      '(//XCUIElementTypeButton[@name="go_to_webview_button"])[3]'
    );
    await goToWebViewButton.waitForDisplayed();
    await goToWebViewButton.click();
    const characterWebView = await $(
      '//XCUIElementTypeWebView[@name="character"]'
    );

    await driver.setTimeout({ pageLoad: 20000 });
    const comicImageFinder = $(
      '(//XCUIElementTypeLink[@name="Captain America Epic Collection: The Captain (Trade Paperback)"])[1]'
    );
    await driver.setTimeout({ pageLoad: 20000 });
    await comicImageFinder.waitForDisplayed();
    comicImageFinder.click();
    await driver.execute("mobile: scroll", { direction: "down" });
  });

  it("should comeback to character page when tap back", async () => {
    const marvelButton = await $('//XCUIElementTypeButton[@name="Marvel"]');
    await marvelButton.waitForDisplayed();
    await marvelButton.click();

    const searchTextField = await $(
      '//XCUIElementTypeTextField[@name="search_text_field"]'
    );
    await searchTextField.waitForDisplayed();
  });

  it("should show invalid result when enter invalid word on search text field", async () => {
    const searchTextField = await $(
      '//XCUIElementTypeTextField[@name="search_text_field"]'
    );
    await searchTextField.waitForDisplayed();
    await searchTextField.touchAction("tap");
    const randomWord = Utils.prototype.makeRandomWord(10);
    console.log(randomWord);
    await searchTextField.setValue(randomWord);
    await driver.setTimeout({ pageLoad: 100000 });

    const notFoundText = await $(
      '//XCUIElementTypeStaticText[@name="No character found"]'
    );
    await notFoundText.waitForDisplayed();
    const notFoundTextValue = await notFoundText.getText();
    expect(notFoundTextValue).toBe("No character found");
    const returnButton = await $('//XCUIElementTypeButton[@name="Return"]');
    await returnButton.waitForDisplayed();
    await returnButton.click();
  });
});

// describe("Go to Comic Tab", () => {
//   it("should do to Comic when tap comic tap", async () => {
//     const comicTab = await $('//XCUIElementTypeButton[@name="Com"]');
//     await comicTab.waitForDisplayed();
//     await comicTab.click();
//     const comicTab1 = await $('//XCUIElementTypeButton[@name="Com"]');
//     await comicTab1.waitForDisplayed();
//     await comicTab1.click();
//     //click 2 to get
//     await driver.setTimeout({ pageLoad: 20000 });
//     const comicLabel = await $(
//       `//XCUIElementTypeStaticText[@name="Marvel's Comics"]`
//     );
//     try {
//       await comicLabel.waitForDisplayed();
//     } catch (error) {
//       await comicTab1.click();
//       await driver.setTimeout({ pageLoad: 20000 });
//     }
//     await comicLabel.waitForDisplayed();
//     const comicLabelValue = await comicLabel.getText();

//     expect(comicLabelValue).toBe("Marvel's Comics");
//   });

//   it("should go to detail page when tap to detail button", async () => {
//     const goToDetailButton = await $(
//       '(//XCUIElementTypeButton[@name="Detail"])[1]'
//     );
//     await goToDetailButton.waitForDisplayed();
//     await goToDetailButton.click();

//     await driver.setTimeout({ pageLoad: 100000 });
//     const webViewFinder = $("~comic_web_view");
//     await webViewFinder.waitForDisplayed();
//   });

//   it("should comeback to character page when tap back", async () => {
//     const marvelComicButton = await $(
//       `//XCUIElementTypeButton[@name="Marvel's Comics"]`
//     );
//     await marvelComicButton.waitForDisplayed();
//     await marvelComicButton.click();

//     const detailButtonFinder = await $(
//       '(//XCUIElementTypeButton[@name="Detail"])[1]'
//     );
//     await detailButtonFinder.waitForDisplayed();
//   });
// });
