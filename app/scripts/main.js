$('.menu_trigger').click(function(){
    $('header .menu ul').addClass('d-block active');
});

$('.menu_close_trigger').click(function(){
    $('header .menu ul').removeClass('d-block active');
});
