# spreade_operator

전개 연산자는 말그대로 전개를 해 주는 연산자 이다

예를 들어 배열과 배열을 아무 생각없이 붙이면

```javascript
var arr1 = [1,2,3];
var arr2 = [4,5,6];

console.log([arr, arr2]); //결과 : (2) [Array(3), Array(3)]
```

배열안에 배열이 만들어져 버린다

이때 사용하는게 전개 연산자 인데

`...[배열]` 이렇게 사용해 주면 된다

```javascript
var arr1 = [1,2,3];
var arr2 = [4,5,6];

console.log([...arr, ...arr2]); //결과 : (6) [1, 2, 3, 4, 5, 6]
```

정리하자면 전개 연산자는 배열안에 있는 값들을 펼쳐서 나타내 주는 것이다
