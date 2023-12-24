/**
 * 변수 handle은 특별한 객체인 Promise를 가져왔습니다. (참조했다고 합니다)
 * console.log(handle)을 실행하면, Promise { <pending> }이 출력됩니다.
 * Promise 라는 이름에서 인스턴스로 객체가 출력된 것이고
 * <pending>은 Promise만의 특수한 '상태'를 의미합니다.
 */

const handle = new Promise(function(resolve, reject) {
  // 1. Promise가 생성되고, 첫 번째 setTimeout이 설정됩니다.
  // 이 시점에서 Promoise의 상태는 pending입니다.
  setTimeout(function() {
    console.log('첫번째');  // 4. 3초 후, '첫번째'가 출력됩니다.
    resolve();  // 5. 첫 번째 Promise가 fulfilled(이행한) 상태가 됩니다. 
  }, 3000);
})
.then(function() {
  // 6. 첫 번째 Promise가 완료되고, 두 번째 Promise가 시작됩니다.
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('두번째');  // 8. 추가 2초 후, '두번째'가 출력됩니다. 
      resolve();  // 9. 두 번째 Promise가 fulfilled 상태
    }, 2000)
  });
})
.then(function() {
  // 10. 두 번째 Promise가 완료되고, 세 번째 Promise가 시작됩니다.
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('세번째');  // 12
      resolve();  // 13
    }, 1000);
  });
});
// 2. 이 시점에서, 모든 Promise는 여전히 pending(대기) 상태
// 3. 3초의 대기가 시작됩니다.
// 7. 첫 번째 Promise가 완료되었으며, 두 번째 Promise의 2초 대기가 시작됩니다. 
// 11. 두 번째 Promise가 완료되었으며, 세 번째 Promise의 1초 대기가 시작됩니다. 
// 14. 모든 Promise가 순차적으로 완료되었습니다.
