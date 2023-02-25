var datepicker = new tui.DatePicker('#wrapper', {
    date: new Date(),
    input: {
        element: '#datepicker-input',
        format: 'yyyy-MM-dd'
    }
});

// password 동일 검사
var pass1 = document.getElementById('pw1');
var pass2 = document.getElementById('pw2');

// 비밀번호 유효성 체크
function passchk() {
    console.log('pass1 : ', pass1.value, ' pass2 : ', pass2.value);
    if(pass1.value !== pass2.value) {
        alert('비밀번호가 동일하지 않습니다.');
        return pass2.focus();
    }
}


function newsAgree(e) {
    document.querySelectorAll('input[type=checkbox]')
    .forEach(e => e.checked = false);
    // 체크 박스를 하나 체크 하면 모든 체크를 푼다.
    e.checked = true; // 현재 선택한 박스만 선택한다
}