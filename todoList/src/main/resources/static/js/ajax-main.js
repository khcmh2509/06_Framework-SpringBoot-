// HTML상 요소 얻어와서 변수에 저장
// 할 일 개수 관련 요소
const totalCount = document.querySelector("#totalCount");
const completeCount = document.querySelector("#completeCount");
const reloadBtn = document.querySelector("#reloadBtn");

// 할 일 추가 관련 요소
const todoTitle = document.querySelector("#todoTitle");
const todoContent = document.querySelector("#todoContent");
const addBtn = document.querySelector("#addBtn");

// 할 일 목록 조회 관련 요소
const tbody = document.querySelector("#tbody");

// 할 일 상세 조회 관련 요소
const popupLayer = document.querySelector("#popupLayer");
const popupTodoNo = document.querySelector("#popupTodoNo");
const popupTodoTitle = document.querySelector("#popupTodoTitle");
const popupComplete = document.querySelector("#popupComplete");
const popupRegDate = document.querySelector("#popupRegDate");
const popupTodoContent = document.querySelector("#popupTodoContent");
const popupClose = document.querySelector("#popupClose");

// 상세 조회 팝업레이어 관련 버튼 요소
const changeComplete = document.querySelector("#changeComplete");
const updateView = document.querySelector("#updateView");
const deleteBtn = document.querySelector("#deleteBtn");

// 수정 레이어 관련 요소
const updateLayer = document.querySelector("#updateLayer");
const updateTitle = document.querySelector("#updateTitle");
const updateContent = document.querySelector("#updateContent");
const updateBtn = document.querySelector("#updateBtn");
const updateCancel = document.querySelector("#updateCancel");

/*
fetch() API
- 비동기 요청을 수행하는 최신 Javascript API 중 하나.

- Promise 는 비동기 작업의 결과를 처리하는 방법으로
- 어떤 결과가 올지는 모르지만 반드시 결과를 보내주겠다는 약속.
-> 비동기 작업이 맞이할 완료 또는 실패와 그 결과값을 나타냄.
-> 비동기 작업이 완료되었을 때 실행할 콜백함수를 지정하고,
   해당 작업의 성공 또는 실패 여부를 처리할 수 있도록 함.

Promise 객체는 세 가지 상태를 가짐
- Pending(대기 중) : 비동기 작업이 완료되지 않은 상태
- Fulfilled(이행됨) : 비동기 작업이 성공적으로 완료된 상태
- Rejected(거부됨) : 비동기 작업이 실패한 상태

*/

// 전체 Todo 개수 조회 및 html 화면상에 출력하는 함수
function getTotalCount() {
  // 비동기로 서버에 전체 Todo 개수를 조회하는 요청
  // fetch() API로 코드 작성
  fetch("/ajax/totalCount") // 서버로 "/ajax/totalCount" 로 GET 요청
  // 첫번째 then (응답을 처리하는 역할)
  .then( response => { // 서버에서 응답을 받으면, 
                  //이 응답(response)을 텍스트 형식으로 변환하는 콜백함수
    // 매개변수 response : 비동기 요청에 대한 응답이 담긴 객체

    // response.text() : 응답 데이터를 문자열/숫자 형태로 변환한 결과를 가지는
    //                  Promise 객체 반환
    return response.text();
  })
  // 두번째 then (첫번째에서 return된 데이터를 활용하는 역할)
  .then(result => { // 첫번째 콜백함수가 완료된 후 호출되는 콜백함수
        //  매개변수로 전달되어진 데이터(result)를 받아서 
        //  어떤식으로 처리할지 정의
        // -> #totalCount인 span 태그의 내용으로 result 값 삽입
    totalCount.innerText = result;
  });

}

getTotalCount();