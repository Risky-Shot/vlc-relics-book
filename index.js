var debug = false;

if (debug) {
    setDebug()
}
function setDebug() {
    $(".wrapper").css("background-color","red");
    $(".aspect").css("background-color","yellow");
    $(".aspect-inner").css("background-color","blue");
    $(".flipbook").css("background-color","green");
}

var flipbookEL = document.getElementById('flipbook');
window.addEventListener('resize', function (e) {
  flipbookEL.style.width = '';
  flipbookEL.style.height = '';
  $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
});

window.addEventListener('click', function() {
    

})

$(flipbookEL).turn({
    acceleration:true,
    duration:400,
    corners:"all",
    autoCenter: true
});

