# PayGreen-UI

A library of reusable [React](https://reactjs.org/) components powered by [styled-components](https://styled-components.com/).

> Test our components on [our live demo](https://paygreen.github.io/paygreen-ui/) or [read our Docusaurus documentation](https://paygreen.github.io/paygreen-ui-doc).

## Installation

PayGreen-UI is available as an [npm package](https://www.npmjs.com/package/@paygreen/paygreen-ui).

```sh
// with npm
npm install @paygreen/paygreen-ui

// with yarn
yarn add @paygreen/paygreen-ui
```

## Storybook

We use [Storybook](https://storybook.js.org/) during the development of our components to isolate them and get an organized and efficient display of our library. With Storybook, you can **manipulate** each component, **modify** the props it receives and **analyze** its behavior to fully understand how it works. But you can also take a look at the code to explore further more PayGreen-UI.

You can access the storybook of the latest version of PG-UI at our [GitHub Pages](https://paygreen.github.io/paygreen-ui/).

## Development process

To develop a new component for the library, create a sub-directory inside `src/lib/` with the following structure:

```none
.
+--_MyComponent
   +--_style
   |  +--_index.js
   +--_MyComponent.js
   +--_MyComponent.stories.js
   +--_MyComponent.test.js
```

- Files inside the sub-directory `style` is used to contains the definition of *a styled-component* that will be used to style the main component.
- The main file `MyComponent.js` must contains the definition of *the React component* with its PropTypes and defaultProps.
- The file `MyComponent.stories.js` contains the definition of *a story used by Storybook* to display an example of use of the component.
- The test file contains tests for the component. Tests are performed by [Jest](https://jestjs.io/).

## Deployment

The deployment of PayGreen-UI use the GitHub Actions to work on CI/CD. Each version of the library correspond to a tag pushed on the GitHub repository.
