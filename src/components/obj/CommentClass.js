class Comment {
    constructor({uuid,
                writer,
                create_date,
                text,
                likeCount,
                dislikeCount}) {
        this.uuid = uuid
        this.create_date = create_date
        this.text = text
        this.likeCount = likeCount
        this.dislikeCount = dislikeCount
        this.writer = {
            name: writer,
            press: 0,
            answer: null
        }
    }
}

export default Comment