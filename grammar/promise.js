// 비동기 : 끝나기 전에 다른 작업을 함
// 동기 :  다 끝날때 까지 기다림

const pr = new Promise((resolve, reject) => {
    // resolve는 성공
    // reject 실패
    setTimeout(() => { // 약 1초가 걸리는 코드가 있다고 가정
        resolve('OK'); // 성공을 하면 OK를 반환
        reject(new Error('not found')); // 만약 실패를 하면 에러를 반환
    }, 1000);
});

pr.then(a => { // then은 promise 코드를 성공 하면 실행. resolve에 넘겨주는 값을 받음
    console.log(a);
}).catch(error => { // catch는 promise 코드를 실패 하면 실행. reject에 넘겨주는 값을 받음
    console.log(error);
})
