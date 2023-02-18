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

function passchk() {
    console.log('pass1 : ', pass1, ' pass2 : ', pass2);
}