
# promise

> 비동기 : 앞에 코드가 끝나기 전에 다른 작업을 함<br>
> 동기 : 앞에 코드가 다 끝날때 까지 기다림

> promise는 resolve 또는 reject를 반환함
> resolve는 성공 할때 반환
> reject는 실패 할때 반환

> 약 1초가 걸리는 검나 긴 코드가 있다고 가정
> 성공을 하면 then으로
> 실패 하면 catch로
> finally가 있으면  실패 상관없이 실행

``` javascript
const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK'); // 성공을 하면 OK를 반환
        reject(new Error('not found')); // 만약 실패를 하면 에러를 반환
    }, 1000);
});

pr.then(a => { // then은 promise 코드를 성공 하면 실행. resolve에 넘겨주는 값을 받음
    console.log(a);
}).catch(error => { // catch는 promise 코드를 실패 하면 실행. reject에 넘겨주는 값을 받음
    console.log(error);
})
```
