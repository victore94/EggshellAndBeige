
$('.bttn-mix').click(function fadeAll() {

    
    $('.maintxt').delay(500).fadeOut();
    $('.subtxt').delay(800).fadeOut();
    $('.bttn-mix').delay(1000).fadeOut();
    $('body').css('height', '100vh');
    $('.bottomtxt').delay(800).fadeOut();
    $('.subtxt2').delay(800).fadeOut();
    $('.drink-img').delay(800).fadeOut();
    $('.drink-img2').delay(800).fadeOut();
    $('.drink-img3').delay(800).fadeOut();
    $('.scrolldwn').delay(800).fadeOut();
    $('.scrolldwn2').delay(800).fadeOut();
    $('.bottomtxt').delay(800).fadeOut();
    $('.bottomtxt').css('top', '5%');
    $('.drink-img').css('top', '5%');
    $('.drink-img2').css('top', '5%');
    $('.drink-img3').css('top', '5%');
    $('.subtxt2').css('top', '5%');
    $('.bttn-more').css('top', '5%');
    delaySpirits();
    
    
})


 function delaySpirits() {
    $(".spirits").css('transition', '2.2s ease-in-out')
    $(".spirits").delay(1000).css('opacity', '1');
    $(".spirit-choice").css('transition', '3.2s ease-in-out')
    $(".spirit-choice").delay(1000).css('opacity', '1');
}

