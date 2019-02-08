var header = document.getElementById('header');
var sticky = header.offsetTop;

function header_sticky() {
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.onscroll = function() {
    //alert('in');
    header_sticky();
    console.log(window.pageYOffset);
}