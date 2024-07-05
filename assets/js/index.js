window.onload = function() {
    $("body").addClass("loaded");
  };

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

document.addEventListener("DOMContentLoaded", function(){
    const images = document.querySelectorAll(".gallery-body img")
    const modal = document.querySelector(".modal")
    const modalImg = document.querySelector(".modal-img")
    const closebtn = document.querySelector(".close")
    let currentIndex = 0

    const prevBtn = document.querySelector(".btnPrev")
    const nextBtn = document.querySelector(".btnNext")

    images.forEach((image, index) => {
        image.addEventListener("click", function(){
            currentIndex = index
            updateModalContent()
            modal.classList.add("show")
        })
    })

    function updateModalContent(){
        const image = images[currentIndex]
        modalImg.classList.remove("show")
        setTimeout(() => {
            modalImg.src = image.src
            modalImg.classList.add("show")
        }, 300);
    }

    nextBtn.addEventListener("click", function(){
        currentIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1
        updateModalContent()
    })

    prevBtn.addEventListener("click", function(){
        currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1
        updateModalContent()
    })

    closebtn.addEventListener("click", function(){
        modal.classList.remove("show")
    })
})