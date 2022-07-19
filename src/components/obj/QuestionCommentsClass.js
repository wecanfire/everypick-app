import {getComments} from "../api/comment/CommentApi";

class QuestionComments {
    // 질문에 대한 코멘트 묶음 객체
    constructor(questionId, comments = new Map()) {
        // 코멘트는 map 객체를 이용할 것. dict 와 같으면서도 순서를 가져야 함
        // 출력 시에는 순서대로 출력하지만, 코멘트를 새로 가져올 때 중복 방지를 불러온 코멘트 중 이미 가지고 있는 코멘트는 버려야 함
        this.questionId = questionId;
        this.list = comments;
    }

    addNewComments(numComments = COMMENTS_LOAD_SIZE) {
        // api 를 통해 n 개의 코멘트 받아옴
        const lastIndex = this.list.size - 1
        const newComments = getComments(this.questionId, lastIndex)
        // 중복된 댓글 검사
        newComments.forEach(com => {
            if (!this.list.has(com.uuid)) {
                this.list.set(com.uuid, com)
            }
        })
    }

    get comments() {
        return Array.from(this.list.values())
    }
}

export default QuestionComments