const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle")

toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

var btnContainer = document.getElementById("links");

var btns = btnContainer.getElementsByClassName("item-menu");

for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
})
}