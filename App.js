import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StatusBar, Dimensions} from 'react-native';
import {GestureHandlerRootView, gestureHandlerRootHOC} from "react-native-gesture-handler";

import './config'
import ScreenSizeContext from './src/components/ScreenSizeContext'
import QuestionSwiper from './src/components/questionSwiper/QuestionSwiper'


export default function App() {
    // 윈도우, 상하 고정 객체 크기 계산
    const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24
    const SCREEN_HEIGHT = Dimensions.get('screen').height
    const WINDOW_HEIGHT = Dimensions.get('window').height
    const BOTTOM_NAVIGATION_BAR_HEIGHT = SCREEN_HEIGHT - STATUS_BAR_HEIGHT - WINDOW_HEIGHT

    // 전역 변수 객체
    const screenSizes = {
        STATUS_BAR_HEIGHT: STATUS_BAR_HEIGHT,
        SCREEN_HEIGHT: SCREEN_HEIGHT,
        WINDOW_HEIGHT: WINDOW_HEIGHT,
        BOTTOM_NAVIGATION_BAR_HEIGHT: BOTTOM_NAVIGATION_BAR_HEIGHT
    }

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <ScreenSizeContext.Provider value={screenSizes}>
                <QuestionSwiper/>
            </ScreenSizeContext.Provider>
        </GestureHandlerRootView>
    );
}