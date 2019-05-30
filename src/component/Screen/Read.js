import React, {Component}from 'react';
import { StyleSheet, View } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';
import { Constants } from 'expo';

class Read extends Component{
  render(){
    return (
      <View style={styles.container}>
        <PDFReader
          source={{ uri: "http://www.alahazrat.net/wp-content/upload/UrduBooks/Zulf-Ambareen/Zulf-Ambareen.pdf" }}
        />
      
      </View>
     
    );
  }
}
  export default Read
  

const styles = StyleSheet.create({
  container: {
    
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});

