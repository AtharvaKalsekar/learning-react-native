import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputHeader from './components/InputHeader/InputHeader';

export default function App() {
  return (
    <View style={styles.container}>
      <InputHeader />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:10
  }
});
