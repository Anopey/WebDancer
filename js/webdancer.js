
var clefImage = $("#white-clef");
var headerContentDiv = $("#header-content");

ArrangeSize();
function ArrangeSize(){
	headerContentDiv.width($(window).width() - clefImage.width());
}

window.addEventListener("resize", ArrangeSize, true);