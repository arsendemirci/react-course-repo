### :eyes: Overview

The purpose of the project is to serve as a base for all the exercise and assignments during the whole react course.
There will be different sections for different subjects and projects for each section will be in the corresponding branch derived from the master branch. Details about each section will be in its branch

There will be common features and basic functionalities generically implemented here that many react applications can utilize.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and rewired with [React-App-Rewired](https://www.npmjs.com/package/react-app-rewired)
Modules are configured with [customize-cra](https://www.npmjs.com/package/customize-cra) and **.babelrc** and **config-ovverrides.js** files are added to ovverride webpack configuration.

### :rocket: Installation

run **npm install** in the terminal after cloning the repository.

### :scroll: Table of Contents

- [:eyes: Overview](#eyes-overview)
- [:scroll: Table of Contents](#scroll-table-of-contents)
- [:file_folder: Folder Structure](#file_folder-folder-structure)
- [:gift: Module Bundling](#gift-module-bundling)
  - [:hammer: Customizing create-react-app](#hammer-customizing-create-react-app)
- [:traffic_light: Api Services](#api-services)
- :baby_bottle: Common UI components
- :electric_plug: Custom Hooks

### :file_folder: Folder Structure

After creating the project, your folder structure will look like this:

```
react-course-repo
├─ .babelrc
├─ .env
├─ .gitignore
├─ config-overrides.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
└─ src
   ├─ App.css
   ├─ App.js
   ├─ App.test.js
   ├─ index.css
   ├─ index.js
   ├─ logo.svg
   ├─ reportWebVitals.js
   ├─ setupTests.js
   ├─ api
   │  ├─ http
   │  │  ├─ axiosApi.js
   │  │  ├─ fetchApi.js
   │  │  └─ index.js
   │  └─ services
   │     ├─ index.js
   │     └─ task.js
   ├─ components
   │  ├─ index.js
   │  └─ UI
   │     ├─ Button
   │     │  ├─ Button.js
   │     │  └─ Button.module.css
   │     └─ Card
   │        ├─ Card.module.css
   │        └─ index.js
   ├─ hooks
   │  ├─ index.js
   │  ├─ useAxiosApi.jsx
   │  ├─ useCounter.jsx
   │  ├─ useFetchApi.jsx
   │  └─ useInput.jsx
   └─ state
      ├─ providers
      └─ reducers
         ├─ index.jsx
         └─ inputStateReducer.jsx

```

### :gift: Module Bundling

In the project, modules are bundled and re-exported in index.js files for utilizing named imports.
By this way combined with path aliasing, multiple modules can be imported at one statement and its more organized with less code.

In this example below, multiple custom-hooks components are bundled in index.js so in App.js they are imported with their names in one statement otherwise we would have tow write 4 different import statement in App.js

```
📜App.js
📦hooks
 ┣ 📜index.js
 ┣ 📜useAxiosApi.js
 ┣ 📜useCounter.js
 ┣ 📜useFetchApi.js
 ┗ 📜useInput.js
```

```js
// src/hooks/index.js
export { default as useCounter } from "./useCounter";
export { default as useFetchApi } from "./useFetchApi";
export { default as useAxiosApi } from "./useAxiosApi";
export { default as useInput } from "./useInput";

// src/App.js
import { useCounter, useFetchApi, useAxiosApi, useInput } from "@hooks";
```

#### :hammer: Customizing create-react-app

To modify webpack and babel configurations without ejecting create-react-app, you need to install these packages `react-app-rewired`, `customize-cra` and `babel-plugin-module-resolver`.

Then the scripts in package.json are modified like this:

```
...
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  }
...
```

After that **.babelrc** and **config-ovverrides.js** files are added to the root of the project and modified like this:

```js
//config-overrides.js
const { useBabelRc, override } = require("customize-cra");
module.exports = override(useBabelRc());

//.babelrc
{
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./src/"],
        "alias": {
          "@components": "./src/components/",
          "@icons": "./src/components/UI/Icons",
          "@constants": "./src/constants",
          "@hooks": "./src/hooks",
          "@http": "./src/api/http",
          "@services": "./src/api/services",
          "@reducers": "./src/state/reducers"
        }
      }
    ]
  ]
}
```

### :traffic_light: Api Services

There are two api services implemented as a js class seperately **FetchApi** and **AxiosApi**
These classes are encapsulating configuration and headers and some data transformation methods.
