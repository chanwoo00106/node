# 클래스

> js에서 class 작성법은 class 클래스명{} 이런 형식으로 적으면 된다

``` javascript
class anything{
 constructor(any, sleep){ //생성자
  this.any = any;
  this.sleep = sleep;
 }
 printAny(){ //매소드
  console.log(this.any);
 }
 printSleep(){ //매소드
  console.log(this.sleep);
 }
}

const anything = new anything('배고파아아아아아ㅏ', '잠와아아아아아아아아아아아');
anything.printAny();
anything.printSleep();
```
