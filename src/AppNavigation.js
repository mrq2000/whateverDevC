import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Home } from './screens'

import firebase from "firebase";

// var firebaseConfig = {

// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
//   firebase.auth().languageCode = "vi";a
// }

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: Home,
    },
    {
      initialRouteName: "Home",
    }
  )
);
