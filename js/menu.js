//logo click event
var bMenu = document.getElementById("menu_box");
function click_menu() {
    if(bMenu.style.display == 'none') {
        bMenu.style.display = 'block';
    } else {
        bMenu.style.display = 'none';
    }
}


// Q&A click event
var sMenu = document.getElementById('show_menu');
function click_QandA() {
    if(sMenu.style.display == 'none') {
        sMenu.style.display = 'block';
    } else {
        sMenu.style.display = 'none';
    }
    // console.log(sMenu);
}