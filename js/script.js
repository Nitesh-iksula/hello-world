var header = document.getElementById('header');
var sticky = header.offsetTop;

function header_sticky() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.onscroll = function () {
    //alert('in');
    header_sticky();
    // console.log(window.pageYOffset);
}



function checkFont(str) {
    var objDiv = document.createElement('div');

    objDiv.style.fontFamily = str;
    objDiv.appendChild(document.createTextNode('FONT TEST'));

    if (window.getComputedStyle) {
        console.log(window.getComputedStyle(objDiv, null));
        return window.getComputedStyle(objDiv, null) === str;
    }

    return objDiv.currentStyle.fontFamily === str;
}

var iconFontHonored = checkFont('Open Sans');
console.log(iconFontHonored);
//console.log(window.getComputedStyle)

function injectStyles(rule) {
    var div = $("<div />", {
        html: '&shy;<style>' + rule + '<style>'
    }).appendTo("body");
}

/*$(" button").on("click", function(){
    console.log('test');
    injectStyles('a:hover { color: red; }');
});*/

(function () {
    if (! /*@cc_on!@*/ 0) return;
    var e = "abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(','),
        i = e.length;
    while (i--) {
        document.createElement(e[i])
    }
})()