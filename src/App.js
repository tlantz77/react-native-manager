import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBD5oscRtJRR9XfMP89y8YVoqaybpK8n8Y',
      authDomain: 'manager-8da45.firebaseapp.com',
      databaseURL: 'https://manager-8da45.firebaseio.com',
      projectId: 'manager-8da45',
      storageBucket: '',
      messagingSenderId: '749047327387'
  };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
