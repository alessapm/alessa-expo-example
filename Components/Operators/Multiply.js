import React from 'react';
import {
  Navigator,
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

export default class Multiply extends React.Component {
  goBack() {
    this.props.navigator.pop();
  }
  makeState() {
    this.setState(
      {
        test: 'hi'
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    return (
      <View style={this.props.styles.container}>
        <TouchableHighlight onPress={this.goBack.bind(this)}>
          <Text style={this.props.styles.option}>Go Back!</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.makeState.bind(this)}>
          <Text style={this.props.styles.option}>Make state!</Text>
        </TouchableHighlight>
        <Text style={this.props.styles.option}>Multiply!</Text>
      </View>
    );
  }
}
