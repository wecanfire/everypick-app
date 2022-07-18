import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const LoginBtn = (props) => {
    return (
        <TouchableOpacity
            style={{ ...styles.buttonViewStyle, ...props.buttonViewStyle }}
            onPress={props.onPress}
        >
            <Image
                source={props.icon}
                style={{...styles.imageIconStyle, ...props.logoStyle}}
            />
            <View style={{flex:1, justifyContent: "center", flexDirection: "row"}}>
                <Text style={{...styles.textStyle, ...props.textStyle}}>
                    {props.buttonText}
                </Text>
            </View>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    buttonViewStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#FFFFFF",
        height: 90,
        borderRadius: 15,
        margin: 5,
        paddingLeft: 24,
        paddingRight: 24,
    },
    imageIconStyle: {
        height: 33,
        width: 33,
        resizeMode: "stretch",
        alignSelf: "center"
    },
    textStyle: {
        color: "#000000",
        fontSize: 30,
    }
});


export default LoginBtn;