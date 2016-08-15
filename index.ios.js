import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import store from './GroceryStore.js';
import GroceryList from './GroceryList.js';
import GroceryForm from './GroceryForm.js';

class Week2_Labs extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  onAdd(item, id){
    store.dispatch({
      type: 'ADD_ITEM',
      item,
      id,
    })
  }

  onRemove(id){
    store.dispatch({
      type: 'REMOVE_ITEM',
      id,
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <GroceryList
          groceries={this.state.groceries}
          onRemove={this.onRemove.bind(this)}
        />
        <GroceryForm
          onAdd={this.onAdd.bind(this)}
          nextId={this.state.groceries.length}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('Week2_Labs', () => Week2_Labs);
