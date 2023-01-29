import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, Image, Keyboard } from 'react-native';
import { useState } from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from 'expo-splash-screen';

const footerImage = require('./assets/concert.png');

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default function App() {

  const [quantity, setQuantity] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  // when "Find the Cost" button is pressed
  onPress = () => {
    let cost = quantity * 99.99 // get total cost of tickets
    setTotalCost(cost.toFixed(2));
    Keyboard.dismiss(); 
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ticket Vault</Text>
      </View>

      <View style={styles.contentContainer}>
        <TextInput 
          style={styles.input}
          onChangeText={text => setQuantity(text)} // when text in input is changed, set the new value as the quantity 
          placeholder="Number of Tickets"
          keyboardType="numeric"
        />

        <Pressable style={styles.button}
                   onPress={onPress}>
          <Text style={styles.buttonText}>Find the Cost</Text>
        </Pressable>
       
        <Text style={styles.resultText}>
          {totalCost == 0 ? "" : "Ticket Cost: $" + totalCost }
        </Text>
      </View>
      
      <View style={styles.imageContainer}>
        <Image source={footerImage}/>
      </View>

      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  title: {
    fontSize: 55,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    height: 60,
    width: 300,
    borderWidth: 1, 
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    height: 60,
    width: 250,
    borderWidth: 1, 
    padding: 10,
    backgroundColor: '#f98b88',
    margin: 30,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },
  resultText: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    margin: 30,
  },   
});
