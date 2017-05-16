import Expo from 'expo';
import React from 'react';
import {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';

export default class Add extends React.Component {
  goBack() {
    this.props.navigator.pop();
  }

  render() {
    console.log('rendering');
    return (
      <View style={this.props.styles.container}>
        <TouchableHighlight onPress={this.goBack.bind(this)}>
          <Text style={this.props.styles.option}>Go Back!</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.props.add}
          style={this.props.styles.operator}
        >
          <Text>add</Text>
        </TouchableHighlight>
        <Text>{this.props.number}</Text>
        <TouchableHighlight
          onPress={this.props.subtract}
          style={this.props.styles.operator}
        >
          <Text>subtract</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
