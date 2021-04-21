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
