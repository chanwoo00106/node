# 화살표 함수

> 화살표 함수는 식별자(변수명)와 키워드(function)를 지워주고 소괄호와 중괄호 사이에 화살표('=>')를 넣어주면 된다
> 화살표 함수는 식별자가 없기 때문에 변수에 넣어서 호출을 한다
``` javascript
// 화살표 함수
const sum = (num1, num2) => {
 return num1 + num2;
};

console.log(sum(20,20));
```
> 위 코드는 아래의 코드와 동일한 동작을 한다.

``` javascript
// 일반 함수
function sum(num1, num2){
 return num1 + num2;
}
console.log(sum(20,20));
```
> 여기서 화살표 함수는 return값이 바로 쉽게 나오면 return과 중괄호를 지워줄 수 있다
> 아래의 코드와 같이 한 줄로 끝낼 수 가 있다

``` javascript
const sum = (num1, num2) => num1 + num2;
console.log(sum(20,20));
```
> 화살표 함수의 매개변수가 한 개라면 소괄호를 없앨 수 있다.
> 또는 매개변수가 하나면 그냥 소괄호만 적으면 된다.

```javascript
// 매개변수가 1개
const pow = num1 => num1 * num1;
console.log(pow(5));
```

```javascript
// 매개변수가 0개
const print = () => cosole.log('Hello Teemo');
print();
```

> 객체 형식을 화살표 함수로 return을 간단하게 할 때 주의할 점이 있다
> 객체는 중괄호에 감싸져 있는데 그 중괄호가 화살표 함수에 중괄호와 겹쳐서 그걸 소괄호로 묶어서 return해준다

```javascript
// 이렇게 하면 안됨
const obj = () => { name : 'Teemo', KDA : '30/0/21'}; // Error
```

```javascript
// 이렇게 해야함
const obj = () => ({ name : 'Teemo', KDA : '43/0/24' });
