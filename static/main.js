function goToTop() {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
  };

window.onscroll = function() {
    if (document.documentElement.scrollTop > 0) {
        document.querySelector(".banner").classList.add("fixed");
    } else {
        document.querySelector(".banner").classList.remove("fixed");
    }
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("btn-top").style.display = "block";
    } else {
    document.getElementById("btn-top").style.display = "none";
    }
};
window.onload = function() {
document.addEventListener("contextmenu", function(e) {
e.preventDefault();
}, false);
document.addEventListener("keydown", function(e) {
//document.onkeydown = function(e) {
// "I" key
if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    disabledEvent(e);
}
// "J" key
if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
    disabledEvent(e);
}
// "S" key + macOS
if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    disabledEvent(e);
}
// "U" key
if (e.ctrlKey && e.keyCode == 85) {
    disabledEvent(e);
}
// "F12" key
if (event.keyCode == 123) {
    disabledEvent(e);
}
}, false);

function disabledEvent(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    } else if (window.event) {
        window.event.cancelBubble = true;
    }
    e.preventDefault();
    return false;
}
};
function killCopy(e){
return false
}
function reEnable(){
return true;
}
document.onselectstart = new Function ('return false')
if (window.sidebar){
document.onmousedown=killCopy
document.onclick=reEnable
}

function sayHello() {
    window.alert("Chưa có dữ liệu!");
}