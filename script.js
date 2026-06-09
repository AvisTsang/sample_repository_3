

function scroll_to_top(){
    
    window.scrollTo(
       { top : 0, 
        
        behavior: "smooth"
    }
    );
    
}

window.addEventListener("scroll",()=>{
    
    const btn_up = document.querySelector(".btn_up")

    if (window.pageYOffset > 200){
        btn_up.style.display = "block";
    }
    else{
        btn_up.style.display = "none";

    }


})
