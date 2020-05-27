import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider } from 'react-native';

export default function App() {
  const [state, setState] = useState({value:4})
  return (
    <View style={styles.container}>
      
      <Text style= {styles.textStyle}> 
        Open up App.js to start working on your app!
        </Text>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <Slider
          minimumValue={1}
          maximumValue={7}
          minimumTrackTintColor="#1EB1FC"
          maximumTractTintColor="#1EB1FC"
          step={1}
          value={state.value}
          onValueChange={value => setState({value})}
          style={styles.slider}
          thumbTintColor="#1EB1FC"
        />
  <Text>Value: {state.value}</Text>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    color: 'white',
    justifyContent: 'center',
    
  },
  slider: {
    position: 'absolute',
    
    width: 500,
   
    marginLeft: 125,
  },
  textStyle: {
    
    color: 'white',
    
  },
});
