# ClickMeeting

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
## Required
```
required node version 16+
```
```
recomended node v19.8.1
```
## Get started

### 1) Install Packages
```sh
npm install
```

### 2) Run JSON-Server to mock API with messages

```sh
npm run db 
```

### 3) Run Storybook

```sh
npm run storybook 
```

### 4) Compile and Hot-Reload for Development

```sh
npm run dev
```
### 5) Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
## USER to login_app
!IMPORTANT! JSON-server doesn't have auth service so authorization is mocked and based on filters by login and password 
````
login: click_user
passowrd: qwerty

or

login: click_adam
passowrd: qwerty

or

you can add your own user in src/database/generateData.js
````
## Production builds

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
### Storybook production build

```sh
npm run build-storybook
```


