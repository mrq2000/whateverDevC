import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Home, Detail, Start } from './screens';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB3YpZKpTitSkOfDISu7eqkB03scTQfmng',
  authDomain: 'devc-dcd21.firebaseapp.com',
  databaseURL: 'https://devc-dcd21.firebaseio.com',
  projectId: 'devc-dcd21',
  storageBucket: 'devc-dcd21.appspot.com',
  messagingSenderId: '1089669979163',
  appId: '1:1089669979163:web:5212dd3fcdf20de402acbe',
  measurementId: 'G-0EXZMLF805',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().languageCode = 'vi';
}


const MainStack = createStackNavigator({
  'Home': Home,
  'Overview': Detail,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: MainStack,
      Start: Start,
    },
    {
      initialRouteName: 'Home',
    }
  )
);
