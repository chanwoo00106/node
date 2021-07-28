# reduce

```js
const array = [1, -1, 2, 3];
```

이러한 배열이 있다고 하자
우린 이 배열에 있는 숫자를 전부 더할 것이다
가장 처음 생각하는 방식은 아래와 같다

```js
const array = [1, -1, 2, 3];

for (let i of array)
    sum += n;

console.log(sum); // 5
```

js에서는 배열에 여러 가지 메소드를 제공해 주는데 그중에 reduce라는 메소드가 있다
이러한 일은 조금이나마 쉽게 할 수 있게 도와준다.

reduce는 4개에 인자를 갖는다

1. 누산기 (데이터가 누적되는 곳)
2. 현재 값 (현재 가지고 있는 값)
3. 현재 인덱스 (배열에 몇 번째 인지 알려줌)
4. 원본 배열(마지막은 나도 모름)

그래서 정리하자면 아래와 같이 작성하면 된다

```js
array.reduce((누산기, 현재_값, 현재 인덱스) => {
    // 하고 싶은 짓들
}, 원본_배열);
```

그럼 처음에 작성했던 배열에 있던 모든 수를 더하는 것을 reduce로 하면

```js
const array = [1, -1, 2, 3];

const result = array.reduce((acc, cur, idx) => {
    console.log(idx);
    return acc += cur;
}, 0);

console.log(result);
```

이렇게 하면 위에서 했던거랑 같은 결괏값이 나오게 된다