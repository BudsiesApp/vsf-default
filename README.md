## vsf-default
Vue Storefront Default theme (please consider vsf-capybara instead)

**🎉  Current status: Production ready**

## The design

The application is prepared to be fully customized in design through the theming system.
With the current version we work on raw, basic template of typical eCommerce for a fashion industry.
In the project we used [Material Icons](https://github.com/google/material-design-icons).

<img width="880" alt="Vue Storefront - Annimations in sidebar menu" src="https://user-images.githubusercontent.com/18116406/33559404-ed674bcc-d90c-11e7-864a-91e42d1c92cd.gif">

<img width="880" alt="Vue Storefront - Annimations in featured products box" src="https://user-images.githubusercontent.com/18116406/33559277-920deb00-d90c-11e7-95e6-ffd55a36a5c6.gif">

Here you can read more about the process of [designing PWA for eCommerce](https://www.linkedin.com/pulse/designing-pwa-ecommerce-karl-bzik/).

The design is available in open source in the Figma file format under the URL https://www.figma.com/file/VKyqbHFI55TKIKcQlFLiVpVF/Vue-Storefront-Open-Source.

## Browser Compatibility

* last 2 Chrome versions
* last 2 Firefox versions
* last 2 Edge versions
* modern browsers

## 🔌  Installation
To be able to use new Default theme in your Vue Storefront installation, you need to:

1. Install `lerna` globally:

   ```
   npm install -g lerna
   ```

   or

   ```
   yarn global add lerna
   ```

1. Configure `vsf-default` repository as a git submodule in theme path of your Vue Storefront workspace, and then track `master` branch:

   ```
   git submodule add -b master git@github.com:DivanteLtd/vsf-default.git src/themes/default
   ```

1. Fetch all the data:

   ```
   git submodule update --init --remote
   ```

1. Update Vue Storefront configuration by copying `local.json` file from `vsf-default` to root `config` directory.
1. Update TypeScript compiler option in `tsconfig.json` in root directory: change value for `compilerOptions`**.**`paths`**.**`theme/*` from default theme `["src/themes/default/*"]` to brand new Default theme: `["src/themes/default/*"]`.
1. Download all dependencies and start development server:

   ```
   lerna bootstrap && yarn dev
   ```

1. That’s all! Now after opening your development server (http://localhost:3000 by default) you should see Vue Storefront with Default theme!  🎉

## The screenshots

<img width="880" alt="Vue Storefront - Annimations in the sidebar cart" src="https://user-images.githubusercontent.com/18116406/33559769-2840fb70-d90e-11e7-8f2b-298f35d1b412.gif">

<img width="880" alt="Vue Storefront - Annimations on producy card" src="https://user-images.githubusercontent.com/18116406/33560504-3105dac6-d910-11e7-847d-70ef8e944321.gif">
