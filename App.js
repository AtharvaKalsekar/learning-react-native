import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputHeader from './components/InputHeader/InputHeader';
import ListDisplayer from './components/ListDisplayer/ListDisplayer';

class App extends React.Component {
  
  state = {
    enteredItem : '',
    allItems : []
  }

  handleEnteredItem = (enteredText) => {
    console.log("Input text : ", enteredText);
    this.setState({
      enteredItem: enteredText
    });
  }

  handleAddClick = () => {
    const updateStateAllItems = [...this.state.allItems, {key:this.state.enteredItem, value:this.state.enteredItem}]
    console.log("updateStateAllItems : ", updateStateAllItems);
    this.setState({allItems:updateStateAllItems});
  }

  render(){
    return(
      <View style={styles.container}>
        <InputHeader 
          stateEnteredItem = {this.state.enteredItem} 
          textInputHandler = {this.handleEnteredItem}
          addButtonHandler = {this.handleAddClick}
        />
        <ListDisplayer
          allItems = {this.state.allItems}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    height:"100%"
  }
});

export default App