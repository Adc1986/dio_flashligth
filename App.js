import React ,{useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const App = () => {
  const [toggle, setToggle] = useState(false);
   
  const handleChangeToggle = () => setToggle (oldToggle => !oldToggle);

 
  return (
    <View style={toggle ? style.containerLigth : style.container} >
      <TouchableOpacity onPress = {handleChangeToggle}>
      <Image 
      style = {toggle ? style.lightingOn : style.lightingOff} 
      source = {
        toggle
        ? require('./asserts/icons/imgwhite-removebg-preview.png')
        : require('./asserts/icons/imgblack-removebg-preview.png')
        }
         />
         <Image 
      style = {style.diologo} 
      source = {
        toggle
        ? require('./asserts/icons/imgdio-removebg-preview.png')
        : require('./asserts/icons/imgdio-removebg-preview.png')
        }
         />
         </TouchableOpacity>
      </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: 'black',
   alignItems: 'center',
   justifyContent: 'center',
  },
  
  containerLigth: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
   },

   ligthingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    whidth: 150,
    height: 150,
   },

   lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    whidth: 150,
    height: 150,
   },

   diologo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    whidth: 150,
    height: 150,
   },
});