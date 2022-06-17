 //scroll
     window.addEventListener('scroll', function (){
        let header = document.querySelector('header');
        let windowPosition = window.scrollY>0;
        header.classList.toggle('black', windowPosition);
})

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

    //toggle_now 
    burger.addEventListener('click', function () {
         nav.classList.toggle('nav-active');      
    
    // buger animation
    burger.classList.toggle('toggle')

    });
}



navSlide();

