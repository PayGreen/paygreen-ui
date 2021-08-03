# PayGreen-UI

A library of reusable [React](https://reactjs.org/) UI components powered by [styled-components](https://styled-components.com/).

> Test our components on [our live demo](https://paygreen.github.io/paygreen-ui/) or [read our Docusaurus documentation](https://paygreen.github.io/paygreen-ui-doc).

## Installation

PayGreen-UI is available as an [npm package](https://www.npmjs.com/package/@paygreen/paygreen-ui).

### With NPM

```sh
npm install @paygreen/paygreen-ui
```

### With Yarn

```sh
yarn add @paygreen/paygreen-ui
```

> Please read [our Docusaurus documentation](https://paygreen.github.io/paygreen-ui-doc) for more information.

## Storybook

We use [Storybook](https://storybook.js.org/) during the development of our components to isolate them and get an organized and efficient display of our library. With Storybook, you can **manipulate** each component, **modify** the props it receives and **analyze** its behavior to fully understand how it works. But you can also take a look at the code to explore further more PayGreen-UI.

You can access the storybook of the latest version of PG-UI at our [GitHub Pages](https://paygreen.github.io/paygreen-ui/).

## Development process

Pour développer directement sur la lib, veuillez consulter la documentation ci-dessous.

### Use Storybook

```sh
git clone git@github.com:PayGreen/paygreen-ui.git
```

```sh
yarn install
```

```sh
yarn start
```

Storybook se lance automatiquement et se rafraîchit à chaque sauvegarde d'un fichier de la lib. Notez que pour les fichiers du dossier `theme`, un rafraîchissement manuel est requis pour appliquer les modifications.

### Theme files

Les fichiers de thème sont des fichiers transversaux, utilisés dans tous les composants, qui contiennent les tailles, couleurs, niveaux d'opacité et plein d'autres constantes qui permettent de conserver un style uniforme et facilement modifiable sur l'ensemble des composants de la librairie.

- Le `theme.base.js` contient toutes les constantes communes au thème par défaut et au thème sombre&nbsp;: il s'agit de tout, sauf les couleurs et les images.
- Le `theme.default.js` inclut le `theme.base.js` et les couleurs et images propres au thème par défaut (thème light).
- Le `theme.dark.js` inclut le `theme.base.js` et les couleurs et images propres au thème sombre.

> N'hésitez pas à consulter ces fichiers avant de faire du CSS&nbsp;: la majorité des valeurs que vous pourriez vouloir renseigner ou ajouter sont déjà présentes dans le thème&nbsp;!

### Shared files

Les fichiers du dossier `shared` sont des utilitaires appelés par les composants ou leurs stories. Il contient également le style global appelé par les stories.

- `constants.js` définit les valeurs acceptées dans certaines props des composants&nbsp;: elles sont utilisées dans leurs PropTypes, leurs styles et leurs stories.
- `global.js` contient le style global appliqué aux stories.
- `labels.js` contient les labels réutilisés plusieurs fois dans les stories, ce qui permet d'uniformiser le texte affiché en fonction des props désignées.
- `spaces.js` contient des fonctions permettant de générer des espaces responsives (globalement parce que les propriétés CSS `padding` et `margin` sont vraiment pas très bien gérées pour le responsive, donc on est obligés d'avoir des fonctions pour ça).
- `tools.js` contient des outils (actuellement, juste de quoi faire des arrondis sur des nombres avec trop de chiffres dedans).
- Le dossier `hook` contient, comme son nom l'indique, des hooks utiles dans certains composants (du debounce, de quoi détecter un clic à l'extérieur d'un composant donné, et la détection de la taille de l'écran).

### Add a new icon

Les icons sont des composants particuliers&nbsp;: leur création doit respecter les règles de [Queen](https://gitlab.com/Paygreen-website/queen). 

Avant d'ajouter un nouvel icon à la lib, vérifiez qu'il respecte la charte graphique, les règles de nommage, qu'il a été ajouté au Figma et au Google Drive, et qu'il ne s'agit pas d'un doublon.

Une fois toutes ces vérifications effectuées, vous pouvez ajouter votre icon à la lib en suivant les étapes suivantes (considérons que votre icon s'appelle `horse.svg`)&nbsp;:

1. Dans `lib/Icon/components`, créez un nouveau fichier `Horse.js` (`HorseBold.js` s'il s'agissait d'un icon bold).
2. Ajoutez vos `<path>` SVG dans la structure ci-dessous&nbsp;:

```javascript
import React from "react";

const SvgHorse = props => (
  <svg viewBox="0 0 143 143" {...props}>
    <path d="your-path" />
    <path d="your-path-2" />
  </svg>
);

export default SvgHorse;
```

3. Dans `lib/Icon/Icon.js`, importez `Horse` et exportez-le en tant que `HorseIcon` en suivant le modèle des autres icons (dans l'ordre alphabétique pour qu'on s'y retrouve).
4. Dans `lib/Icon/Icon.stories.js`, ajoutez `HorseIcon` à la première storie en suivant le modèle des autres icons (toujours dans l'ordre alphabétique - ou presque, les flèches ont été regroupées pour plus de facilité - sinon c'est le bazar). Inutile de l'importer&nbsp;: il l'est déjà&nbsp;! Vous pouvez admirer votre icon dans son milieu naturel avec tous ses petits copains.
5. Dans `lib/index.js`, importez et exportez `HorseIcon` (toujours dans l'ordre alphabétique, sinon vous aurez bien compris qu'on vous arrachera la tête).

Et voilà, votre icon est ajouté et votre tête toujours en place, félicitations&nbsp;!

### Create a new component

To develop a new component for the library, create a sub-directory inside `src/lib/` with the following structure:

```
/MyComponent
   /style
   |  base.js (optional)
   |  constants.js (optional)
   |  index.js
   MyComponent.js
   MyComponent.stories.js
   MyComponent.test.js
```

- Files inside the sub-directory `style` are used to contains the definition of a *styled-component* that will be used to style the main component. `index.js` is the main style file, `base.js` is used for conditionnal or reusable styles, and `constants.js` defines specific constants for the component.
- The main file `MyComponent.js` must contains the definition of the *React component* with its PropTypes and defaultProps.
- The file `MyComponent.stories.js` contains the definition of a *story used by Storybook* to display an example of use of the component.
- The file `MyComponent.test.js` contains tests for the component. Tests are performed by [Jest](https://jestjs.io/).

> Don't forget to import and export your new component inside `src/lib/index.js`!

### Create, update and run tests

Actuellement, les tests, c'est pas trop ça, mais on essaie au moins de créer un test de base pour chaque composant (comprendre&nbsp;: "est-ce que ce composant pète totalement, ou est-ce que ça va").

Pour lancer les tests sans modifier les snapshots, utiliser la commande suivante&nbsp;:

```sh
yarn test
```

Le plus utile actuellement reste tout de même de lancer les tests en leur permettant d'être mis à jour s'il y a eu un changement dans le composant&nbsp;:

```sh
yarn test-update
```

Les snapshots modifiés doivent être vérifiés et commités.

### Create and update documentation

Développer un composant, c'est bien, mais le documenter, c'est encore mieux&nbsp;! Pensez donc, pour tout nouveau composant OU pour un composant refondu, à créer la documentation sur le repo [PayGreen/paygreen-ui-doc](https://github.com/PayGreen/paygreen-ui-doc) en suivant les instructions du README.

> Pensez également à mettre à jour la doc existante pour les composants et éléments du thème que vous modifiez&nbsp;!

## Deployment

The deployment of PayGreen-UI use the GitHub Actions to work on CI/CD. Each version of the library correspond to a tag pushed on the GitHub repository.
