# React-Redux-WeatherApp

### ReduxSimpleStarter

```
> npm install
> npm start
```
### Steps:
1) Create SearchBar component
2) Get weather API key
3) install middleware
```
npm install --save redux-promise
```
4) Hook the ReduxPromise middleware into the src/index.js
5) Install axios to act like Jquery to make Ajax call
```
//Do this: return state.concat([action.payload.data])
//Don't do this: return state.push(action.payload.data);
npm install --save axios
```
6) New component to render city
component VS container

7) Build a chart by react-sparklines
http://borisyankov.github.io/react-sparklines/
