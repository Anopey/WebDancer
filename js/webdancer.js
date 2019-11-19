
var clefImage = $("#white-clef");
var headerContentDiv = $("#header-content");
var headerContentTextDivFirst = $("#header-content div:first-of-type");
var headerContentTextDivSecond = $("#header-content div:nth-of-type(2)");
var dArrow = document.querySelector('#down-arrow');
var brandText = $("span");
var win = $(window);
var atHeader = true;
var resizeBuffered = true;

ArrangeSize();
function ArrangeSize(){
	if(atHeader){
		headerContentTextDivFirst.css('line-height', headerContentDiv.height() * 0.9 + "px");
		headerContentTextDivSecond.css('line-height', headerContentDiv.height() * 0.1 + "px");
		if(win.width() < 1540 && win.width() > 1360){
			if(resizeBuffered){
				clefImage.css('display', 'block');
				window.scrollBy(-9999, 0);
				brandText.css('padding-left', '0');
				brandText.css('padding-right', '0');
			 	headerContentDiv.width(win.width() - clefImage.width() + 50);
			}
			window.scrollBy(-9999, 0);
			window.scrollBy((1540 - win.width()), 0);
			resizeBuffered =false;
		}else if(win.width() <= 1360)
		{
			resizeBuffered = true;
			window.scrollBy(-9999, 0);
			clefImage.css('display', 'none');
			brandText.css('padding-right', '25px');
			brandText.css('padding-left', '25px');
			headerContentDiv.width(win.width());
		}
		else{
			brandText.css('padding-left', '0');
			brandText.css('padding-right', '45px');
			clefImage.css('display', 'block');
			window.scrollBy(-9999, 0);
			headerContentDiv.width(win.width() - clefImage.width());
		}
	}
}

window.addEventListener("resize", ArrangeSize, true);