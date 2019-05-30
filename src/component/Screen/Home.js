import React ,{Component}from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Picture from '../Picture';


class Home extends Component{
  render(){
    return(<View style={styles.container}>
        
      <View>
          <Picture/>
        
      </View>
      <View>
      <View style={styles.placing1}>
              <Text style={styles.text1} > Name : Zulf Ambareen</Text>
              <Text style={styles.text1}> Author/Editor : Mufti Faiz Ahmed Owaisi</Text>
              <Text style={styles.text1}> Publisher: N/A</Text>
              <Text style={styles.text1}> Pages : 14</Text>
              <Text style={styles.text1}> Language : Urdu</Text>
              <Text style={styles.text1}> Category : Fazail</Text>
              <Text style={styles.text1}> Read Online : Click Book Title</Text>
              </View>
      </View>
      <TouchableOpacity style={styles.BStyle}  onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Read' })
              ],
            }))
          }}
        >
              <Text style={styles.text}>
                  Read
              </Text>
          </TouchableOpacity>
    </View>)
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:"100%",
  
    alignItems: 'center',
    justifyContent: 'center',
  },
  placing:{
    paddingTop: 30,
    paddingBottom: 40,
  },
  BStyle:{
        
    borderRadius: 6,
    borderWidth: 4,
    borderColor: '#757D75',
    backgroundColor: '#6C7A89'
    
},
text: {
    fontWeight: "100",
    color: '#CA6924',
    fontSize: 16
},
placing1: {

  alignItems: "center",
  paddingTop: 10
  
},
text1:{
  fontWeight: "100",
  color: '#CA6924',
}
});
