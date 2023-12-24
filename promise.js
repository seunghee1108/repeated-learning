/**
 * 변수 handle은 특별한 객체인 Promise를 가져왔습니다. (참조했다고 합니다)
 * console.log(handle)을 실행하면, Promise { <pending> }이 출력됩니다.
 * Promise 라는 이름에서 인스턴스로 객체가 출력된 것이고
 * <pending>은 Promise만의 특수한 '상태'를 의미합니다.
 */

const handle = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('첫번째');
    resolve();
  }, 3000);
})
.then(function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('두번째');
      resolve();
    }, 2000)
  });
})
.then(function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('세번째');
      resolve();
    }, 1000);
  });
});