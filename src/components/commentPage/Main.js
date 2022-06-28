import React, {useCallback, useRef, useMemo, useContext} from "react";
import {StyleSheet, View, Text, Button} from "react-native";
import {BottomSheetModal, BottomSheetModalProvider, BottomSheetFlatList} from "@gorhom/bottom-sheet";

import ScreenSizeContext from '../ScreenSizeContext'
import Comment from './Comment'
import CommentWriter from './CommentWriter'

const Main = ({bottomSheetModalRef, commentsData}) => {
    // commentData 는 질문에 대한 코멘트 리스트의 메타데이터를 담은 객체고 코멘트 자체는 내부에 따로 존재
    const [comments, setComments] = React.useState(commentsData['comments'])

    const screenSizes = useContext(ScreenSizeContext)

    // Modal 내부 Content View 높이: 맨위 핸들 높이를
    const handleHeight = screenSizes.STATUS_BAR_HEIGHT
    const contentContainerHeight = screenSizes.WINDOW_HEIGHT - screenSizes.BOTTOM_NAVIGATION_BAR_HEIGHT - handleHeight - screenSizes.STATUS_BAR_HEIGHT

    const snapPoints = ['100%']

    // change 시의 callback
    const onChangeCallback = () => {
      console.log('comment change')
    }
    // render
    const renderItem = ({ item }) => (
        <Comment item={item} />
      )

    const ItemSeparator = () => (
      <View style={styles.itemSeparator} />
    )

    return (
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                handleHeight={handleHeight}
                onChange={onChangeCallback}
            >
                <View style={[styles.container, {height: contentContainerHeight}]}>
                    <BottomSheetFlatList
                        data={comments}
                        keyExtractor={(i) => i['uuid']}
                        renderItem={renderItem}
                        ItemSeparatorComponent={ItemSeparator}
                    />
                    <CommentWriter comments={comments} setComments={setComments}  />
                </View>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    itemSeparator: {
        height: 10
    }
});

export default Main;