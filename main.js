
const navigation = document.querySelector(".navigation")
const menuSideBar = document.querySelector(".menu-sidebar")
const closeMenu = document.querySelector(".close-menu")



navigation.addEventListener("click", function(){
    menuSideBar.style.transform = "translate(0%)"
    const bodyOverlay = document.createElement("div")
    bodyOverlay.classList.add("overlay")
    setTimeout(function(){
        document.querySelector("body").append(bodyOverlay)
},300)
})

closeMenu.addEventListener("click", function () {
    menuSideBar.style.transform = "translate(100%)"
    const bodyOverlay = document.querySelector(".overlay")
    document.querySelector("body").removeChild(bodyOverlay)
})

navigation.addEventListener("click", function () {
    menuSideBar.style.transform= "translate(0%)"
})
closeMenu.addEventListener("click", function () {
    menuSideBar.style.transform= "translate(-100%)"
})
