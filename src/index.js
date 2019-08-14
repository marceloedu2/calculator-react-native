import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Button from './components/Button';
import Display from './components/Display';

const initalState = {
  displayValue: '0',
  cleardisplay: false,
  operation: null,
  values:[0, 0],
  current: 0,
}

export default class App extends Component {
  state = {...initalState}

  addDigiy = n => {
    if (n === '.' && this.state.displayValue.includes('.')) return;

    const cleardisplay = this.state.displayValue === '0' || this.state.cleardisplay;
    const currentValue = cleardisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n

  }

  clearMemory = () => {
    this.setState({ displayValue: '0' });
  }

  setOperation = operation => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label='AC' onClick={this.clearMemory} buttondouble/>
          <Button label='Del' onClick={this.clearMemory}/>
          <Button label='/' onClick={this.setOperation} buttonOperation/>
          <Button label='7' onClick={this.addDigiy}/>
          <Button label='8' onClick={this.addDigiy}/>
          <Button label='9' onClick={this.addDigiy}/>
          <Button label='*' onClick={this.setOperation} buttonOperation/>
          <Button label='4' onClick={this.addDigiy}/>
          <Button label='5' onClick={this.addDigiy}/>
          <Button label='6' onClick={this.addDigiy}/>
          <Button label='-' onClick={this.setOperation} buttonOperation/>
          <Button label='1' onClick={this.addDigiy}/>
          <Button label='2' onClick={this.addDigiy}/>
          <Button label='3' onClick={this.addDigiy}/>
          <Button label='+' onClick={this.setOperation} buttonOperation/>
          <Button label='0' onClick={() => this.addDigiy()} buttondouble/>
          <Button label='.' />
          <Button label='=' onClick={this.setOperation} buttonOperation/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});