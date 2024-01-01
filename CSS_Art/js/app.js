window.addEventListener("scroll", setScrollVal);
const body = document.querySelector(".body-html");
const fBody = document.querySelector(".f-body");

function setScrollVal() {
    const htmlElement = document.documentElement //This is the html element object
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
    let scrollVal = Math.min(percentOfScreenHeightScrolled * 100, 100)
    if (scrollVal > 50) {
        body.classList.add("colour-trans")
        fBody.classList.add("colour-trans2")
    } else {
        body.classList.remove("colour-trans")
        fBody.classList.remove("colour-trans2")
    }
}

setScrollVal();