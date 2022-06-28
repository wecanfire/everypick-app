import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Header from './Header'
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';


// {/*<Top style={styles.top}/>*/}
// {/*<Middle style={styles.middle} data={questionData}/>*/}
// {/*<Bottom style={styles.bottom} data={questionData} bottomSheetModalRef={bottomSheetModalRef}/>*/}

const Main = ({bottomSheetModalRef, questionData}) => {
  return (
    <View style={styles.main}>
        <Header></Header>
        <Top></Top>
        <Middle style={styles.middle} data={questionData}/>
        <Bottom style={styles.bottom} data={questionData} bottomSheetModalRef={bottomSheetModalRef}/>
    </View>
  );
}


const styles = StyleSheet.create(
  {
    main: {
      flex: 1,
      backgroundColor: 'yellow',
      flexDirection: 'column',
    },
    top: {
      flex: 12,
    },
    middle: {
      flex: 80
    },
    bottom: {
      // flex: 10
    }
  }
)

export default Main;
