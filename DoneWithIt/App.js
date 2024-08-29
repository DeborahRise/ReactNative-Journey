
import { StyleSheet, Text, View, Image, ImageBackground, Button, ScrollView, Pressable, ActivityIndicator,
  StatusBar, Modal
 } from 'react-native';
 import { useState } from 'react';
import logo from './assets/adaptive-icon.png';

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='white'
      barStyle={'dark-content'} />
      <ActivityIndicator 
      size='large' color='red' animating={false}
      />

      <ScrollView>
        
      <StatusBar style="auto" />
      {/* <View style={{width: 300, height:300, backgroundColor: 'white'}}> */}

      <Image source={logo} style={{width:300, height:300}} />
      <Modal visible={isModalVisible} animationType='slide'
      onRequestClose={() => setModalVisible(false)}
      // presentationStyle='pageSheet' affects only IOS
      >
      <View style={{height:500, width:300, backgroundColor:'pink'}}>
        <Button title='Close Modal' onPress={() => setModalVisible(false)} />
        <Image source={{ uri: "https://picsum.photos/300" }} style={{width:300, height:300}} />
      </View>
      </Modal>
      <Pressable onPress={()=>console.log('Pressablebaba')}>
       
      <ImageBackground style={{width:300, height:300}} source={{ uri: "https://picsum.photos/200"}}>

      <Text>Hello Moussif!</Text>
      <Text>my andrioid studio emulator successfully instslled, created and running. When I click on 'a' on my vscode terminal to launch expo on my andriod emulator, after npm start, I get this error. 
        › Opening on Android...
        Failed to resolve the Android SDK path. Default install location not found: /home/deborah_rise/Android/sdk. Use ANDROID_HOME to set the Android SDK location.
        Failed to resolve the Android SDK path. Default install location not found: /home/deborah_rise/Android/sdk. Use ANDROID_HOME to set the Android SDK location.
        Error: spawn adb ENOENT</Text>
        <Button title='PRESS' onPress={()=>setModalVisible(true)} />
      </ImageBackground>
      </Pressable>
      </ScrollView>
        {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE615',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
