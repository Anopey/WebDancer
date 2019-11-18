
var clefImage = $("#white-clef");
var headerContentDiv = $("#header-content");
var headerContentTextDiv = $("#header-content div");

ArrangeSize();
function ArrangeSize(){
	headerContentDiv.width($(window).width() - clefImage.width());
	headerContentTextDiv.css('line-height', headerContentDiv.height() + "px");
}

window.addEventListener("resize", ArrangeSize, true);