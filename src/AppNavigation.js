import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Home, Detail, Start, Search } from './screens';

const MainStack = createStackNavigator({
  'Home': Home,
  'Overview': Detail,
  'Search': Search,
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
