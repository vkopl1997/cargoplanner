const menuBtn = document.querySelector('.menu-btn');

let menuOpen = false;
menuBtn.addEventListener('click', ()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        document.getElementById("main_nav").style.display = "block";
        document.getElementById("main_nav").style.height = "260px";
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        document.getElementById("main_nav").style.display = "none";
    }
});
