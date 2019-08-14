import React from 'react';
import {
  Text,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4.00001,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  buttonOperation: {
    color:'#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4.00001) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4.00001) * 3,
  }
});

export default props => {
  const stylesButton = [styles.button]
  if (props.buttondouble) stylesButton.push(styles.buttonDouble);
  if (props.buttontriple) stylesButton.push(styles.buttonTriple);
  if (props.buttonOperation) stylesButton.push(styles.buttonOperation);
  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)} >
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  )
}