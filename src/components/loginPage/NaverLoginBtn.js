import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image, View, PixelRatio} from "react-native";
import LoginBtn from "./LoginBtn";

const NaverLoginBtn = (props) => {
    return (
        <LoginBtn
            onPress={props.onPress}
            buttonViewStyle={styles.buttonViewStyle}
            logoStyle={styles.imageIconStyle}
            textStyle={styles.textStyle}
            buttonText={"네이버로 시작하기"}
            icon={require("../../assets/login/naver_logo.png")}>
        </LoginBtn>
    )
};

const styles = StyleSheet.create({
    buttonViewStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#03C75A",
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
        color: "#FFFFFF",
        fontSize: 30,
    }
});

export default NaverLoginBtn;