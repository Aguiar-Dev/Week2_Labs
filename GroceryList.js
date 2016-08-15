import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

export default class GroceryList extends Component {
  constructor(props){
    super(props);

    // Specific for listView must have!!!
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.groceries)
    };

  }

  componentWillReceiveProps(nextProps){
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.groceries);
    this.setState({ dataSource });
  }

  renderRow(groceryItem){
      return <View>
        <Text>{groceryItem.item}</Text>
        <TouchableHighlight onPress={() => this.props.onRemove(groceryItem.id)}><Text>Remove</Text></TouchableHighlight>
      </View>
  }

  render(){
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    color: '#CBD0CB',
  }
})
