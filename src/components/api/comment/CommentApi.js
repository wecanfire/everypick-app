import getGarbageComments from "./GarbageGenerator";

const getComments = (questionId, indexOfLast) => {
    // 질문과 로딩된 마지막 코멘트의 인덱스를 이용해 다음 코멘트 블록 질의
    return getGarbageComments(questionId, indexOfLast)
}

const setComment = (user, comment) => {
    // 코멘트 변경사항 전달
    // e.g. 좋아요를 변경
    return
}

export {getComments, setComment};
