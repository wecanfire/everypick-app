import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image, View, PixelRatio} from "react-native";
import LoginBtn from "./LoginBtn";

const GoogleLoginBtn = (props) => {
    return (
        <LoginBtn
            onPress={props.onPress}
            buttonViewStyle={styles.buttonViewStyle}
            logoStyle={styles.imageIconStyle}
            textStyle={styles.textStyle}
            buttonText={"구글로 시작하기"}
            icon={require("../../assets/login/google_logo.png")}>
        </LoginBtn>
    )
};

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
        borderStyle:"solid",
        borderWidth:1,
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

export default GoogleLoginBtn;