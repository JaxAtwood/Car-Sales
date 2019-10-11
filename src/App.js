import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions/index";

const App = (props) => {
  
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} addFeature={buyItem} removeFeature={removeFeature}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    car: state.car, 
    store: state.store,
    additonalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {addFeature, removeFeature})(App)

/*
//import connect from react-redux
//import your addItem, removeItem from your actions file
​
//import your components
​
//pass the props from redux store  (using your your mapStateToProps) to the App component. 
//You'll need to use mapStateToProps & also pass in props as an argument to the App
//component, or deconstruct the props 
//deconstruct:
const App = ({ car, store, additionalPrice, addItem, removeItem }) => {
//just pass props:
const App = props=> {
​
//give a constant name to your prop functions that you're using from the redux
//store in your app.js file:
​
const removeFeature = item => {
    props.removeFeature(item)    
  };
  
 ( do the same for the addFeature prop )
​
//in the return you're givein the components you'll need 
(AddedFeature, AddedFeatures, AdditionalFeature, AdditionalFeatures, Header, Total), 
you'll need to add the right props from your store to allow each to work.
​
//
//but you'll need to set up mapStateToProps like so for App.js:
​
//here you're passing in the intial state from your reducer.js file that you'll create:
const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  }
}
​
//connect is imported from react-redux to connect your state "store" to the component
//mapStateToProps is the bridge function between the store & your app
//addFeature & removeFeature are the names of your methods
//& You'll want to pass in as an argument whatever component you need to pass the state from store
in (in this case App is passed in)
export default connect(mapStateToProps, { addFeature, removeFeature })(App);
*/