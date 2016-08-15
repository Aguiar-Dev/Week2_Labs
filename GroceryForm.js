import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';

export default class GroceryForm extends Component {
  constructor(props){
    super(props);
  }

  onChange(text){
    this.item = text;
    this.id = this.props.nextId;
  }

  onAddItem(){
    this.props.onAdd(this.item, this.id);
  }

  render(){
    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={this.onChange.bind(this)}
        />
        <TouchableHighlight
          onPress={this.onAddItem.bind(this)}>
          <Text>Add Grocery Item</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    padding: 5,
    width: 200,
    height: 50,
    color: 'black',
  }
})
