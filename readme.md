# Project creation steps

```bash
ionic start noOneTrust blank --type=react
cd noOneTrust
ionic cap add andoid
npm install cordova-plugin-onetrust-cmp@202306.1.0
ionic cap sync android

# Add dummy code in src/pages/Home.tsx
```

Error in PWA mode: `Uncaught ReferenceError: OneTrust is not defined` (as expected)

Error in Android: `Failed to open file '/data/data/io.ionic.starter/code_cache/.overlay/base.apk/assets/public/plugins/cordova-plugin-onetrust-cmp/www/OneTrust.js': No such file or directory`
