# Appium Example
This is an e2e test using appium.

## HOW TO USE
### Clone repos
Choose a folder project in your system and switch in cd [folder path]

Clone the target project into your folder `git clone https://github.com/huongtravo0910/MarvelAPIExample.git`

Clone the appitum test into your folder `git clone https://github.com/huongtravo0910/appinum_example.git`

### Setup app
##### * Create an dev account on Marvel web if you haven't had one yet
Sign up an account on `https://developer.marvel.com` .
Since you sign up successfully, you will be provided a public key and a private key. Go to my developer account page to get the keys. Then put the them into swift project code. 

FYR: You can create a Credential.swift file in the swift project, then add:
```
let privateKey = [YOUR_PRIVATE_KEY]
let publicKey = [YOUR_PUBLIC_KEY]
```
Try to build the app. If your keys are right, the app can be built successfully.

Then back to appium test.
##### * Build app
In package.json file, on "test:build" line, replace `../MarvelAPIExample/Marvel_API_Ex_App.xcodeproj` with your correct path to the swift project.

Then run:
```
npm install
```
to install packages,
```
npm run test:build
```
to build the app.
### Run E2E test
After setup, run this command to start E2E test
```
npm run test:run
```
* For a each separate test, run:
```
npx wdio wdio.conf.js --spec comic.e2e.js
```

* or
```
npx wdio wdio.conf.js --spec character.e2e.js
```
