// Nav

$(window).scroll(function () {
    if ($(document).scrollTop() < 25 && $('#header_nav').hasClass('transparent')) {
        $('#header_nav').removeClass('tiny');
    } else {
        $('#header_nav').addClass('tiny');
    }
});

if (!$('#header_nav').hasClass('transparent')) $('#header_nav').addClass('tiny');


