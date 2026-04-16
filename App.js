

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import Colors from './src/Constants/Colors';

function App() {


  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#000" translucent={false} barStyle="light-content" />
      <SafeAreaView style={styles.safeAreView}>
        <View style={styles.container}>
          <RegisterScreen />
        </View>
      </SafeAreaView>

    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  safeAreView: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 20,
    
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.background,
  },
});


export default App;
