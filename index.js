const btn=document.querySelector(".hamburger-icon");
const navbar=document.querySelector(".main-header")
let activ_func=()=>{
    navbar.classList.toggle("active");
}

btn.addEventListener("click",()=>activ_func());