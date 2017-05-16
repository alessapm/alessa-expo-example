import React from 'react';
import {
  TouchableHighlight,
  Text,
  Navigator,
  View,
  StyleSheet
} from 'react-native';

export default class Splash extends React.Component {
  goBack() {
    this.props.navigator.pop();
  }

  goToAdd() {
    this.props.navigator.push({ id: 'Add' });
  }

  goToMultiply() {
    this.props.navigator.push({ id: 'Multiply' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Current number: {this.props.number}</Text>
        <TouchableHighlight
          onPress={this.goToAdd.bind(this)}
          style={styles.option}
        >
          <Text>Add</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.goToMultiply.bind(this)}
          style={styles.option}
        >
          <Text>Miltiply</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  option: {
    height: 200,
    width: 200,
    backgroundColor: 'palegoldenrod'
  }
});
