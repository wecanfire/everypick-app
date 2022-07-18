import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LoginBtn from "./LoginBtn";
import KakaoLoginBtn from "./KakaoLoginBtn"
import GoogleLoginBtn from "./GoogleLoginBtn";
import NaverLoginBtn from "./NaverLoginBtn";

const LoginPage = () => {
    return (
        <View style={styles.main}>
            <Text>
                간편 로그인
            </Text>
            <KakaoLoginBtn
                OnPress={()=>{}}
            ></KakaoLoginBtn>
            <GoogleLoginBtn
                OnPress={()=>{}}
            ></GoogleLoginBtn>
            <NaverLoginBtn
                OnPress={()=>{}}
            ></NaverLoginBtn>
            <TouchableOpacity style={{flexDirection:"row", margin:5, }}>
                <Image source={require("../../assets/login/btnG_완성형.png")}
                    style={{flex:1, resizeMode: "contain"}}></Image>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create(
    {
        main: {
            flex: 1,
            backgroundColor: 'white',
            flexDirection: 'column',
        },
    }
)

export default LoginPage;
