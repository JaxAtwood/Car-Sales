import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from './App';
import { reducer } from "./reducers/Reducer";
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, rootElement);

/*
//here you'll want to import {createStore} from redux;
//import {Provider} from 'react-redux'
//import your reducer here and use it inside the store you create such as: 
import {reducer} from './reducers/reducer';
const store = createStore(reducer)
​
//Wrap your App component in your provider & pass the store constant:
const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, rootElement);
*/