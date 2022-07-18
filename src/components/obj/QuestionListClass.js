import getQuestions from "../api/question/QuestionApi";
import {getComments} from "../api/comment/CommentApi";

class QuestionList {
    constructor(questionDict) {
        this.qDict = questionDict === undefined ? new Map() : questionDict
        this.qList = Array.from(this.qDict.keys())
    }

    addNewQuestions(numToAdd = QUESTIONS_LOAD_SIZE) {
        // 새 질문 가져오기
        let newQuestions = getQuestions(this.qList)
        // 새 질문에 대한 코멘트 불러오기
        let comments = newQuestions.map(q => getComments(q.uuid, COMMENTS_INIT_INDEX))
        newQuestions.forEach((q, i) => this.qDict.set(q, comments[i]))
        this.qList.concat(newQuestions)
    }

    removeOldQuestions(numRemove) {
        // dict 에서 없에고 list 에서 잘라내고
        for (const a of Array(numRemove).keys()) {
            this.qDict.delete(this.qList[0])
        }
        this.qList = this.qList.slice(numRemove)
    }

    getQOfIndex(index) {
        return this.qList[index]
    }

    getCOfQ(question) {
        return this.qDict.get(question)
    }

    copy() {
        // create new object to trigger rerender
        return new QuestionList(this.qDict)
    }

    get length() {
        return this.qDict.size
    }

    get questions() {
        return this.qList
    }
}

export default QuestionList