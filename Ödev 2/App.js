import React from 'react';
import {
  StyleSheet,
  View,
  Text,
 
} from 'react-native';

const App= () => {
  return(
    <View style={styles.container}>
      <Text style={styles.txt1}>
        AD: Kaan Can Sürdem {"\n"}{"\n"}
        YAŞ: 19 {"\n"}   {"\n"}
        LISE: Pendik Anadolu Lisesi{"\n"}{"\n"}
        MEMLEKET: Kayseri {"\n"}{"\n"}
        {"                   "}Deneyimler{"\n"}{"\n"}
        Unity Oyun Programlama {"\n"}
        Blender 3D Modelleme{"\n"}{"\n"}
        C# Algoritma ve Programlama {"\n"}
        Java Algoritma ve Programlama {"\n"}{"\n"}
       </Text>
        </View>

  );
 
 };

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    alignItems:'center',
    justifyContent:'center'
  },
  
  txt1: {
    color: 'green',
    marginTop:-100,
    fontSize:25,
    
  },
 
});

export default App;
