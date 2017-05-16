import React from 'react';
import { Navigator, StyleSheet } from 'react-native';
import Add from './Operators/Add';
import Multiply from './Operators/Multiply';
import Splash from './Nav/Splash';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  goBack() {
    console.log('hi');
    this.props.navigator.pop();
  }

  add() {
    let newCount = (this.state.number += 1);
    this.setState(
      {
        number: newCount
      },
      () => {
        console.log('after plus', this.state);
      }
    );
  }

  subtract() {
    let newCount = (this.state.number -= 1);
    this.setState(
      {
        number: newCount
      },
      () => {
        console.log('after minus', this.state);
      }
    );
  }
  render() {
    return (
      <Navigator
        initialRoute={{
          id: 'Splash'
        }}
        renderScene={(route, navigator) => {
          _navigator = navigator; //?
          if (route.id === 'Splash') {
            return (
              <Splash
                number={this.state.number}
                navigator={navigator}
                styles={styles}
              />
            );
          }
          if (route.id === 'Add') {
            return (
              <Add
                goBack={this.goBack}
                number={this.state.number}
                navigator={navigator}
                styles={styles}
                add={this.add.bind(this)}
                subtract={this.subtract.bind(this)}
              />
            );
          }
          if (route.id === 'Multiply') {
            return (
              <Multiply
                goBack={this.goBack}
                number={this.state.number}
                navigator={navigator}
                styles={styles}
              />
            );
          }
        }}
      />
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
  },
  operator: {
    height: 100,
    width: 100,
    backgroundColor: 'tomato'
  }
});
