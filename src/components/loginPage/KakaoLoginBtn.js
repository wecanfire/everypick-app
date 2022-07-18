import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image, View, PixelRatio} from "react-native";
import LoginBtn from "./LoginBtn";

const KakaoLoginBtn = (props) => {
    return (
        <LoginBtn
            onPress={props.onPress}
            buttonViewStyle={styles.buttonViewStyle}
            logoStyle={styles.imageIconStyle}
            textStyle={styles.textStyle}
            buttonText={"카카오로 시작하기"}
            icon={require("../../assets/login/100px-Kakao_Corp._symbol_-_2012.png")}>
        </LoginBtn>
    )
};

const styles = StyleSheet.create({
    buttonViewStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#FEE500",
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

export default KakaoLoginBtn;