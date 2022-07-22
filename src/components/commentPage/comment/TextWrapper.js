import React from 'react';
import {Text} from 'react-native';
import Icon from '../../utils/icon/Icon'

const TEXT_LENGTH_MAX = 255

const TextWrapper = ({text}) => {
    // 편집 필요한지 확인
    const isLong = TEXT_LENGTH_MAX < text.length

    // 더보기 버튼 클릭에 따른 text 변경을 위한 state 저장
    const [textRender, setTextRender] = React.useState(isLong ? text.slice(0, TEXT_LENGTH_MAX) + '...' : text)
    const [isPressed, setIsPressed] = React.useState(false)

    return (
        <Text>
            {textRender}
            {isLong && !isPressed ? (
                <Icon name='자세히 보기' onPressCallback={() => {
                    setTextRender(text);
                    setIsPressed(true);
                }}>
                    <Text>자세히 보기</Text>
                </Icon>
            ) : null}
        </Text>
    )
};

export default TextWrapper;
