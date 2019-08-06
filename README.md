# Tobalie admin

## Installation
1. Clone/download repo
2. `yarn install` (or `npm install` for npm)

## Usage
**Development**

`yarn run start-dev`

* Build app continuously (HMR enabled)
* App served @ `http://localhost:8080`

**Production**

1) `yarn run build`
2) `yarn install -g serve`
3) ``serve dist``

* Build app once (HMR disabled) to `/dist/`
* App served @ `http://localhost:3000`

**Note**: replace `yarn` with `npm` if you use npm.
