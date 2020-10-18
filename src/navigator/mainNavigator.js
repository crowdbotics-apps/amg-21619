import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen3147942Navigator from '../features/BlankScreen3147942/navigator';
import BlankScreen2147941Navigator from '../features/BlankScreen2147941/navigator';
import SignUp11146563Navigator from '../features/SignUp11146563/navigator';
import BlankScreen0146562Navigator from '../features/BlankScreen0146562/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen3147942: { screen: BlankScreen3147942Navigator },
BlankScreen2147941: { screen: BlankScreen2147941Navigator },
SignUp11146563: { screen: SignUp11146563Navigator },
BlankScreen0146562: { screen: BlankScreen0146562Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
