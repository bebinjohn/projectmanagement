import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {getFirebase ,reactReduxFirebase,firebaseReducer } from 'react-redux-firebase';
import {getFirestore,reduxFirestore,firestoreReducer}from 'redux-firestore'; 
import Projectred from './Components/Redux/store/Reducers/projectreducer'
import Authred from './Components/Redux/store/Reducers/Authreducer'
import config from './config/fire';
//console.log(firestoreReducer);

const store=createStore(combineReducers({
  pro:Projectred,
  auth:Authred,
  data:firestoreReducer,
  authnication:firebaseReducer
}),
compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
reactReduxFirebase(config),
reduxFirestore(config)

));
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}><App /></Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
