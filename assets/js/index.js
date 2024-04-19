let button = document.getElementById("top");
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0; //safari
    document.documentElement.scrollTop = 0; //chrome
}

function clearInp(){
    document.getElementsByTagName("input").value=""
    /*document.getElementsByTagName("input").reset()*/
}
