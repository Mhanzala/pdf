import React, {Component} from 'react'
import {View, Text, Image,StyleSheet} from 'react-native'

class Picture extends Component{
    render(){
        let pic={
            uri : 'https://www.alahazrat.net/wp-content/upload/UrduBooks/Zulf-Ambareen/00.jpg'
        }
        return(
            <View >
                <View>
                    <Text style={styles.text}>Zulf Ambareen</Text>
                </View>
                <View >
                <Image

                style={styles.fixing}
                source={pic}>
                </Image>
                </View>
            </View>
        )
    }

}

export default Picture

const styles = StyleSheet.create(
    {
        fixing:{
            width: 200,
            height: 320,
            borderRadius: 2,
            

        },
        text: {
            fontSize: 24,
            fontWeight: "400",
            alignItems: "center",
            color: '#CA6924',
            paddingLeft: 20,
            paddingBottom: 5
        },
        placing: {
            paddingBottom: 230
        }

        
    }
) 