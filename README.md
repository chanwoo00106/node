# 변수 var, let, const의 차이

## 변수 var

> var는 한 번 선언된 변수를 다시 선언 할 수 있다

``` javascript
var name = 'Teemo';
console.log(name);
var name = 'captain Teemo';
console.log(name);
```

> var는 선언하기 전에 사용할 수 있다
> 이것을 호이스팅 이라고 함

```javascript
console.log(name); // 결과 : undefined
var name = 'Teemo';
```

> 위 코드의 var는 아래와 같이 동작한다

```javascript
var name;
console.log(name); // 결과 : undefined
name = 'Teemo' // 할당
```

> var는 선언과 초기화가 같이 일어남

## 변수 let

> let은 한 번 선언된 변수는 다시 선언할 수 없다
 ```javascript
let name = 'Teemo';
console.log(name);
let name = 'captain Teemo'; // error
console.log(name);
 ```
 
 > let은 호이스팅을 할 수 없다 (const 포함)
 
 ```javascript
 console.log(name); // ReferenceError
let name = 'Teemo';
 ```
 
 > let은 선언 단계와 초기화 단계가 따로 일어남
 
 
 ## 변수 const
 > const는 선언, 초기화, 할당이 동시에 일어나야 함
 ``` javascript
const name;
name = 'Teemo'; //Error
```

## 결론

> var는 함수 스코프 이고 
> 함수 스코프는 함수 내에서 선언된 변수만 그 지역 변수가 된다
``` javascript
const a = 30;
  if (a >19){
    var text = '성인';
  }
  console.log(text); //for문 밖에서 사용이 가능함
```
```javascript
function add(a, b){
  var result = a + b;
}
add(1,2);
console.log(result); // 함수 밖에서 사용 불가
```

> let과 const는 블럭 스코프 이다
> 블록 스코프는 모든 코드 블럭 내에서 선언된 변수는 코드블럭 내에서만 사용이 가능하다
> 외부에서는 사용 불가
> (코드 블럭 : if문, while문, for문 등)


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

```jacascript
// 이렇게 하면 안됨
const obj = () => { name : 'Teemo', KDA : '30/0/21'}; // Error
```

```javascript
// 이렇게 해야함
const obj = () => ({ name : 'Teemo', KDA : '43/0/24' });
```
