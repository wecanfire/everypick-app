import React, {useCallback, useRef, useMemo, useContext} from "react";
import {StyleSheet, View, Text, Button} from "react-native";
import {BottomSheetModal, BottomSheetModalProvider, BottomSheetFlatList} from "@gorhom/bottom-sheet";

import ScreenSizeContext from '../ScreenSizeContext'
import Comment from './Comment'
import CommentWriter from './CommentWriter'
import {gestureHandlerRootHOC} from "react-native-gesture-handler";

const Main = ({bottomSheetModalRef, firstCommentBundle, onMount}) => {
    // commentsSet 은 댓글 뭉치, 댓글 뭉치에 대한 메타데이터를 포함하고 있다
    const [commentBundle, setCommentBundle] = React.useState(firstCommentBundle)
    React.useEffect(() => {
        onMount(setCommentBundle);
    }, [setCommentBundle]);

    const screenSizes = useContext(ScreenSizeContext)
    // Modal 내부 Content View 높이: 맨위 핸들 높이를
    const handleHeight = screenSizes.STATUS_BAR_HEIGHT
    const contentContainerHeight = screenSizes.WINDOW_HEIGHT - screenSizes.BOTTOM_NAVIGATION_BAR_HEIGHT - handleHeight

    const snapPoints = ['100%']

    // change 시의 callback
    const onChangeCallback = () => {
        console.log('comment change')
    }
    // render
    const renderItem = ({item}) => (
        <Comment item={item}/>
    )

    const ItemSeparator = () => (
        <View style={styles.itemSeparator}/>
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
                        data={commentBundle['comments']}
                        keyExtractor={(i) => i['uuid']}
                        renderItem={renderItem}
                        ItemSeparatorComponent={ItemSeparator}
                    />
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