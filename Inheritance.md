# 상속
> 클래스 이름 옆에 extends 적고 상속할 class명을 적으면 된다

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

class otherclass extends anything{
 constructor(any, sleep, state){
  this.any = any;
  this.sleep = sleep;
  this.state = state;
 }
 print(){
  console.log(this.any);
  console.log(this.sleep);
  console.log(this.state);
 }
}
const other = new other('배고파아아앙아아아아', '잠와아아아아아아앙아아아아ㅏ', '종진아 하지마');
other.print();
```
