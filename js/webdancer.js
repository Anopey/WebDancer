const clefImage = $("#white-clef");
const headerContentDiv = $("#header-content");
const headerContentTextDivFirst = $("#header-content div:first-of-type");
const headerContentTextDivSecond = $("#header-content div:nth-of-type(2)");
const brandText = $("span");
const win = $(window);
const atHeader = true;

let resizeBuffered = true;

ArrangeSize();

function ArrangeSize() {
    if (atHeader) {
        headerContentTextDivFirst.css('line-height', headerContentDiv.height() * 0.9 + "px");
        headerContentTextDivSecond.css('line-height', headerContentDiv.height() * 0.1 + "px");
        if (win.width() < 1540 && win.width() > 1360) {
            if (resizeBuffered) {
                clefImage.css('display', 'block');
                window.scrollBy(-9999, 0);
                brandText.css('padding-left', '0');
                brandText.css('padding-right', '0');
                headerContentDiv.width(win.width() - clefImage.width() + 50);
            }
            window.scrollBy(-9999, 0);
            window.scrollBy((1540 - win.width()), 0);
            resizeBuffered = false;
        } else if (win.width() <= 1360) {
            resizeBuffered = true;
            window.scrollBy(-9999, 0);
            clefImage.css('display', 'none');
            brandText.css('padding-right', '25px');
            brandText.css('padding-left', '25px');
            headerContentDiv.width(win.width());
        } else {
            brandText.css('padding-left', '0');
            brandText.css('padding-right', '45px');
            clefImage.css('display', 'block');
            window.scrollBy(-9999, 0);
            headerContentDiv.width(win.width() - clefImage.width());
        }
    }
}

window.addEventListener("resize", ArrangeSize, true);