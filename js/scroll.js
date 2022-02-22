/* INDEX HTML */

/* EXPERIENCE HTML */
var rowone = document.getElementsByClassName("row-1");
var rowtwo = document.getElementsByClassName("row-2");
beginonscroll(rowone[1], "animatefromrightfast");
beginonscroll(rowone[2], "animatefromrightfast");
beginonscroll(rowone[3], "animatefromrightfast");
beginonscroll(rowtwo[1], "animatefromleftfast");
beginonscroll(rowtwo[2], "animatefromleftfast");


function beginonscroll(){
    var element=arguments[0]
    var classtoadd = arguments[1]
    var elementHeight = element.clientHeight;
    document.addEventListener('scroll', animate);

    function inView(){
        var windowHeight = window.innerHeight;
        var scrollY = window.scrollY || window.pageYOffset;

        var scrollPosition = scrollY + windowHeight;
        var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

        if (scrollPosition > elementPosition){
            return true;
        }
        return false;
    }

    function animate(){
        if (inView()){
            element.classList.add(classtoadd);
        }
    }
}
