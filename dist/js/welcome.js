function changebg() {
    var nav =document.getElementById('nav');
    var scrollvalues = window.scrollY;
    if(scrollvalues < 70){
        nav.classList.remove('bgcolor');
    }else{
        nav.classList.add('bgcolor');
    }
}
window.addEventListener('scroll',changebg);

/* =======================
           Preloader
   =====================*/
   $(window).on('load', function(){
    $('#preloader_child').fadeOut(),
    $('#preloader').delay(360).fadeOut()
})
