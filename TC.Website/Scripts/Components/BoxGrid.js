// Build box grid

$('.boxgrid').height($('.boxgrid').width());

$(window).resize(function () {
    $('.boxgrid').height($('.boxgrid').width());
});



