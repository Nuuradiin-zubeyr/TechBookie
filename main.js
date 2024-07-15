let MenueBtn = document.querySelector("#MenueBtn")
let links = document.querySelector("#links")
let buttonsBtn = document.querySelector("#buttonsBtn")
let closeBtn = document.querySelector ("#closeBtn")

MenueBtn.addEventListener("click", function(){
    links.style.display = "flex"
    buttonsBtn.style.display = "block"
    MenueBtn.style.display = "none"
    closeBtn.style.display = "block"


    
})
closeBtn.addEventListener("click", function(){
    links.style.display = "none"
    buttonsBtn.style.display = "none"
    MenueBtn.style.display = "block"
    closeBtn.style.display = "none"


})