import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import home from '../screens/home';
import signIn from '../screens/signIn';
import signup from '../screens/signup';
import resetPassword from '../screens/resetPassword';

screens = {
    signIn:{
        screen: signIn
    },
    home:{
        screen: home
    },
    signup:{
        screen: signup
    },
    resetPassword:{
        screen: resetPassword
    }
}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);