import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Login from './src/Screens/Login';
import Register from './src/Screens/Register';
import Forget from './src/Screens/Forget'
import Confirmation from './src/Screens/Confirmation';
import UpdatePassword from './src/Screens/UpdatePassword';
import BottomTab from './src/Components/BottomTab';
import TestDetail from './src/Screens/BottomTabScreens/TestDetail';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
        <Stack.Screen name="Home" component={BottomTab} />
        <Stack.Screen name="TestDetail" component={TestDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
