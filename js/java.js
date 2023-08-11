const menu = document.querySelector("ul");
    const menuBtn = document.querySelector(".menu-btn"); 
    const cencelBtn = document.querySelector(".cencel-btn");
    const body = document.querySelector("body");
   const navbar = document.querySelector("header");
   
 menuBtn.onclick = ()=>{
        menu.classList.add("active");
        menuBtn.classList.add("hide");
        body.classList.add("disabledScroll");
    }

    cencelBtn.onclick = ()=>{
        menu.classList.remove("active");
        menuBtn.classList.remove("hide");
        body.classList.remove("disabledScroll");
    }

    window.onscroll = ()=>{
       
        this.scrollY> 10 ? navbar.classList.add("sticky"): navbar.classList.remove("sticky");
    }





