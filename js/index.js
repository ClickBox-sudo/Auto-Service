$(document).ready(function () {
    scrollToTop=()=> { 
        window.scrollTo(0, 0); 
    } 


scrollToTop();


    window.onscroll = () =>{

        addClassStickeyToMenu();
        changeParalaxBackg();
    }

});