/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import TabNavigation from './sectionlist'


AppRegistry.registerComponent(appName, () => TabNavigation);