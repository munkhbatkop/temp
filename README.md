# Electron.js - React.js - Webpack - Electron Builder

## Getting started

### this is the best electron and react app you're going to start with .

### if you want the typescript version go [here](https://github.com/meslzy/electron-react-webpack-typescript)

## Requirements and necessary expertise

-   #### [node.js](https://nodejs.org)
-   #### [electron](https://www.electronjs.org/)
-   #### [electron-builder](https://www.electron.build/)
-   #### [react](https://reactjs.org/)
-   #### [react-router](https://reactrouter.com/web/guides/quick-start)
-   #### [webpack](https://webpack.js.org/)

## Features

-   #### electron side
    -   #### it's fast, believe me
-   #### react side
    -   #### you can use images and fonts [jpg, jpeg, png, gif, woff, woff2, eot, ttf, svg]
    -   #### you can use syntactically style [scss, css]
    -   #### fully access to electron
    -   #### react router
-   #### webpack side
    -   #### many plugins like [clean-webpack-plugin, html-webpack-externals-plugin]
    -   #### every side has self config
    -   #### easy to understand and use
-   #### common
    -   #### multiple environment ready (development, production)
    -   #### all functions and methods are being fully explained

## Structure

-   #### you will start with
    -   #### `source` project entry
        -   #### `main` main process [_electron_]
            -   #### `index.js` main process entry
        -   #### `render` render process [_react_]
            -   #### `index.js` render process entry [_react root_]
    -   #### `config` project configurations [_webpack, electron-builder_]
        -   #### `webpack.main` webpack config for main process
        -   #### `webpack.render` webpack config for render process
        -   #### `builder.packge` electron builder config the project
        -   #### `resources` electron build resources [see here](https://www.electron.build/configuration/configuration#MetadataDirectories-buildResources)

-   #### if you build the project for both main and render you will find this folder
    -   #### `build` project webpack output base
        -   #### `index.html` this is page will electron load in production mode and include [render.js, polyfill.js, and vendor react scripts]
        -   #### `main.js` this Electron.js file entry
        -   #### `render.js` this React.js file entry
        -   #### `polyfill.js` this includes minimum requirements and commonly used language features
        -   #### `vendor` this folder contains react scripts

-   #### if you package the project with electron builder you have new folder inside `build` called `pack`
    -   #### `build` project webpack output base
        -   #### `pack` set up installer and unpacked app

## Scripts

- #### `main:build` build the main process in production mode
- #### `main:start` start the main process in development mode
- #### `main` start the main process in production mode

- #### `render:build` build the render process in production mode
- #### `render:start` build the render process in development mode

- #### `pack:win` pack the project to exe and setup for window system
- #### `pack:mac` I'll do it soon

## Finally

#### Feel free to contact me if had any problems, share this with others .

#### I'm doing my best to provide the best experience when you try my projects, so if you like what I'm doing try make me happy with "thanks!" or buying me a coffee

[![buy me a coffee](https://img.buymeacoffee.com/api/?url=aHR0cHM6Ly9pbWcuYnV5bWVhY29mZmVlLmNvbS9hcGkvP3VybD1hSFIwY0hNNkx5OWpaRzR1WW5WNWJXVmhZMjltWm1WbExtTnZiUzkxY0d4dllXUnpMM0J5YjJacGJHVmZjR2xqZEhWeVpYTXZNakF5TUM4eE1pODNaVFprT0RSaU1UZ3hNbUk1TVRZNE9XVXlZMlU1T1daa01EazNaRFJrTVM1d2JtYz0mc2l6ZT0zMDAmbmFtZT1NZXNsenk=&creator=Meslzy&is_creating=developer%20and%20designer&design_code=1&design_color=%23F471FF&slug=meslzy)](https://www.buymeacoffee.com/meslzy) 
