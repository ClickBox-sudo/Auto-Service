$('.ham-menu').click(()=>{
    $('.menu-holder ul').css('display')=='none'?$('.menu-holder ul').css({'display':'block'}):$('.menu-holder ul').css({'display':'none'});
});
addClassStickeyToMenu=()=>{
    let element = $('.menu-holder');
    
    if (window.pageYOffset > element.offset().top) {
        element.addClass('sticky-menu-holder');
    } else if (window.pageYOffset == 0) {
        element.removeClass('sticky-menu-holder');
        
    }
}
// background-image: url(../images/header-bckg.jpg);

changeParalaxBackg=()=>{
    let elementToView = $('.section-services');
    let elementToAnimate = $('.master');
    if (window.pageYOffset > elementToView.offset().top - 10) {
      elementToAnimate.css({'background-image':'url(./images/buba.jpg)'});
    } if ( window.pageYOffset < elementToView.offset().top) {
        elementToAnimate.css({'background-image':'url(./images/header-bckg.jpg)'});
    }
}