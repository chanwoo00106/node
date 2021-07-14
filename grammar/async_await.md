# async/await

> async/await은 promise를 더 편하게 사용하려고 나온 것이다
> async 함수 안에서만 await을 사용할 수 있다 (await은 async함수 밖에서는 사용할 수 없다)
``` javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
  console.log('안녕하세요!');
  await sleep(1000); // 1초쉬고
  console.log('반갑습니다!');
}

process();
```
> await을 넣어주면 해당 promise가 끝날때 까지 기다렸다가 다음 작업을 수행한다
> 함수에서 async를 넣어주면 해당 함수는 결과값으로 promise를 반환한다.
> 따라서 아래와 같이 작성이 가능하다

```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
  console.log('안녕하세요!');
  await sleep(1000); // 1초쉬고
  console.log('반갑습니다!');
}

process().then(()=>{
 console.log('작업 종료');
});
```
> async에서 에러를 잡을 때는 try/catch문을 사용한다

``` javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error; // 일부러 에러를 일으킨다
}

async function process() {
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}

process();
```
