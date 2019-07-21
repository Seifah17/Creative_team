

$(function(){
 
    // fading photo at works section 
    $('#show-more').click(function(){
    $(".hidden").fadeToggle(1000);})

    //make buttons scroll to sections 
    $('.down').click(function(){
        $('html, body').animate({scrollTop: $('.features').offset().top-100 },1000); })
    
    $('.nav-features').click(function(){
        $('html, body').animate({scrollTop: $('.features').offset().top-100 },1000); })
    
    $('.nav-supscripe').click(function(){
        $('html, body').animate({scrollTop: $('.supscripe').offset().top-100 },1000); })
    
    $('.nav-contact').click(function(){
        $('html, body').animate({scrollTop: $('.contact').offset().top-100 },1000); })
    
    $('.nav-testimonials').click(function(){
        $('html, body').animate({scrollTop: $('.test').offset().top-100 },1000); })
    
    $('.nav-works').click(function(){
        $('html, body').animate({scrollTop: $('.works').offset().top-100 },1000); })
    
    $('.nav-about').click(function(){
        $('html, body').animate({scrollTop: $('.team').offset().top-100 },1000); })

    //wow inital function 
    new WOW().init();


})