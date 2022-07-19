import CommentClass from "../../obj/CommentClass";

const LOREM = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non suscipit felis. Vivamus porttitor leo sit amet lacinia ullamcorper. In porta tortor in purus auctor, eu molestie risus tempus. Quisque nec facilisis odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur scelerisque, massa id viverra aliquet, odio eros scelerisque tellus, ac bibendum magna eros ut dolor. Nullam porta mattis metus, a auctor enim. Proin odio ex, ultricies id posuere et, commodo in nisl. Mauris sollicitudin nisi quis orci accumsan vulputate. Nunc a velit vel ex pharetra maximus. Praesent finibus mauris turpis, vel gravida velit gravida sit amet. Proin convallis quis augue feugiat lacinia. Nam condimentum ut nisi nec pulvinar. Mauris consectetur eros vitae convallis fringilla. Duis vestibulum velit rhoncus porttitor maximus.',
    'Aliquam id hendrerit ante. Pellentesque sem dui, ornare vitae augue nec, sodales rutrum arcu. Sed vel cursus libero, sit amet eleifend dolor. Donec ac vehicula ante. Nam massa ex, elementum a dolor ac, convallis euismod nisi. Maecenas feugiat, augue hendrerit volutpat efficitur, odio eros consectetur lorem, ut ultrices augue erat at tellus. Proin orci justo, consectetur mollis maximus dapibus, gravida sed elit. Mauris vitae est condimentum, fringilla ipsum non, scelerisque ex. Nullam augue neque, tincidunt iaculis rhoncus quis, rutrum egestas ante. Praesent porta risus enim, id bibendum mauris bibendum eget. Integer eu tortor purus. Mauris augue libero, tristique quis purus ut, venenatis mattis magna.',
    'Morbi volutpat varius lacinia. Cras quis tincidunt orci. Nam pellentesque ipsum vitae nisi pretium, id dapibus nibh finibus. Nullam imperdiet pellentesque dignissim. Donec pellentesque condimentum turpis. Fusce porta tellus et ante tincidunt cursus. Sed lacinia orci ipsum, sed pharetra massa rutrum vitae. Integer varius consequat sapien ut suscipit. Duis nisi massa, finibus imperdiet risus in, placerat porttitor nulla.',
    'Mauris interdum, turpis sed vulputate sagittis, odio ante feugiat diam, at viverra eros orci quis augue. Sed pulvinar tellus eget velit fermentum, nec lacinia enim sodales. Phasellus congue sit amet velit a malesuada. Proin laoreet leo eu nulla laoreet fringilla. Nunc porta ut ligula vitae laoreet. Curabitur massa elit, gravida sit amet interdum nec, sollicitudin ac ipsum. Aliquam porta imperdiet mauris, sit amet consectetur ipsum consequat sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer in eros at odio ultricies rhoncus. Etiam nec velit vehicula, rhoncus metus non, pellentesque lacus. Donec finibus lacus urna, vitae feugiat leo tincidunt eget. Morbi felis lacus, facilisis sed mollis eget, mattis a justo. Nam consequat elit sit amet odio molestie efficitur. Vestibulum lorem nisl, vehicula sed tincidunt porttitor, luctus eget velit. Ut eget enim lectus. Sed consectetur sem turpis, ac consequat diam hendrerit in.',
    'Praesent venenatis in eros vel fringilla. Nullam quis magna volutpat, rhoncus mauris vel, feugiat dolor. Nunc nibh orci, placerat ac erat id, tincidunt venenatis velit. Maecenas a dignissim ante, ac condimentum nunc. Phasellus luctus, nisi a tincidunt sollicitudin, sapien turpis elementum dui, a viverra felis erat eu purus. Vivamus cursus, turpis commodo tristique viverra, ante diam dapibus orci, sit amet aliquam arcu libero eget lorem. Cras at maximus purus, sit amet consectetur dolor. Aenean vel euismod urna, ac tristique turpis. Donec consequat id urna id consectetur. Cras scelerisque at mi sit amet lobortis.'
]

const genFakeComment = () => {
    // lorem ipsum 이용해서 임의 길이의 코멘트 생성
    let i = getRandomInteger(0, LOREM.length)
    return LOREM[i].substring(0, getRandomInteger(0, LOREM[i].length))
}

const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const getGarbageComments = (questionId, indexOfLast) => {
    // 테스트용 가비지 생성기
    // 필요시에 더 고도화 할 것
    return Array.from({length: COMMENTS_LOAD_SIZE}, () => {
        // const uuid = Math.floor(Math.random() * 1024) + 1;
        const uuid = ++indexOfLast;
        const create_date = null // 날짜 시간 표현으로 바꿀 것
        const text = `${questionId}-${uuid} ${genFakeComment()}` // 특정 길이 제약을 받는, 단어 집합으로 변경할 것
        return new CommentClass({
            uuid: uuid,
            writer: 'some.one',
            create_date: create_date,
            text: text,
            likeCount: getRandomInteger(0, 100),
            dislikeCount: getRandomInteger(0, 100)
        })
    });
}

export default getGarbageComments;
