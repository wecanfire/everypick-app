import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from './Icon'

function IconAnnotated({name, text, onPressCallback, children}) {
  
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{text}</Text>
      <Icon name={name} onPressCallback={onPressCallback}>
        {children}
      </Icon>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    main: {
      flexDirection: 'column'
    },
    text: {
      textAlign: 'center',
      textAlignVertical: 'bottom',
      fontSize: 15
    }
  }
)

export default IconAnnotated;

