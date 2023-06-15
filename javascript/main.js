window.addEventListener("scroll",function(){
    const header= this.document.querySelector("header");
    header.classList.toggle("sticky",this.window.scrollY>0);
})

const serviceModals=document.querySelectorAll(".service-modal");
const learnMoreBtns=document.querySelectorAll(".learn-more-btn");
const modalCloseBtns=document.querySelectorAll(".modal-close-btn");

var modal=function(modalClick){
    serviceModals[modalClick].classList.add("active")
}

learnMoreBtns.forEach((learnMoreBtn,i)=>{
    learnMoreBtn.addEventListener("click",()=>{
        modal(i)
    })
})

modalCloseBtns.forEach((modalCloseBtn)=>{
    modalCloseBtn.addEventListener("click",()=>{
        serviceModals.forEach((modalView=>{
            modalView.classList.remove("active")
        }))
    })
})

const portfolioModals=document.querySelectorAll(".portfolio-modal");
const imgCards=document.querySelectorAll(".img-card");
const portfolioCloseBtns=document.querySelectorAll(".portfolio-close-btn");

var portfoliomodal=function(modalClick){
    portfolioModals[modalClick].classList.add("active")
}

imgCards.forEach((imgCard,i)=>{
    imgCard.addEventListener("click",()=>{
        portfoliomodal(i)
    })
})

portfolioCloseBtns.forEach((portfolioCloseBtn)=>{
    portfolioCloseBtn.addEventListener("click",()=>{
        portfolioModals.forEach((pmodalView=>{
            pmodalView.classList.remove("active")
        }))
    })
})


const themeBtn=document.querySelector(".theme-btn")
themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun")
    localStorage.setItem("saved-theme",getCurrentTheme());
    localStorage.setItem("saved-icon",getCurrentIcon());
});

const getCurrentTheme=()=> document.body.classList.contains("dark-theme")?"dark":"light";
const getCurrentIcon=()=> themeBtn.classList.contains("sun")?"sun":"moon";

const savedTheme=localStorage.getItem("saved-theme");
const savedIcon=localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme==="dark"?"add":"remove"]("dark-theme");
    themeBtn.classList[savedIcon==="sun"?"add":"remove"]("sun");
}

const menuBtn=document.querySelector(".nav-menu-btn");
const closeBtn=document.querySelector(".nav-close-btn");
const navigation=document.querySelector(".navigation");

menuBtn.addEventListener("click",()=>{
    navigation.classList.add("active");
})

closeBtn.addEventListener("click",()=>{
    navigation.classList.remove("active");
})