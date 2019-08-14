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
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;

    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return
    }

    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [ ...this.state.values ];
      values[ this.state.current ] = newValue;
      this.setState({ values });
    }
  }

  clearMemory = () => {
    this.setState({ ...initalState });
  }

  setOperation = operation => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true})
    } else {
      const equals = operation === "=";
      const values = [...this.state.values];
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      }catch(e){
        values[0] = this.state.values[0]
      }
      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
      });
    }
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
          <Button label='0' onClick={this.addDigiy} buttondouble/>
          <Button label='.' onClick={this.addDigiy}/>
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