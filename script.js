console.log("Hey Howdy, since you're checking out my creative work, contact me via mail ore.craftman@gmail.com if you'll like to work with me. Bye for now")

//Display Menu
let menuContent = document.querySelector("#navContainer")
document.querySelector("#menuIcon").addEventListener("click",()=>{
    menuContent.style.display="flex"
    document.querySelector("body").style.overflow="hidden";
    document.querySelector(".brandName").style.color="#000000";
    document.querySelector(".mainNavContainer").style.display="none"
})

document.querySelector("#toggleNav").addEventListener("click",()=>{
    menuContent.style.display="none"
    document.querySelector("body").style.overflow="scroll";
    document.querySelector(".mainNavContainer").style.display="flex"
})

document.querySelector("#fitSite").addEventListener("click",()=>{
    menuContent.style.display="none"
    document.querySelector("body").style.overflow="scroll";
    document.querySelector(".mainNavContainer").style.display="flex"
})

document.querySelector(".navLink").addEventListener("click", ()=>{
    menuContent.style.display="none"
    document.querySelector(".mainNavContainer").style.display="flex"
    document.querySelector("body").style.overflow="scroll";
})