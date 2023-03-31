$(document).ready(function(){
    //TODO
});

$(window).scroll(function(){
    let value = window.scrollY;

    $('#text').css('margin-top', value * 2.0 + 'px');
    $('#leaf').css({
        'top': value * -0.4 + 'px',
        'left': value * 1.2 + 'px'
    });
    $('#hill2').css('top', value * 0.2 +'px');
    $('#hill2').css('top', value * 0.3 +'px');
    $('#hill3').css('top', value * 0.3 +'px');
    $('#hill4').css({
        'top' : value * 0.5 + 'px',
        'leaf' : value * -1.2 + 'px'
    });

    $('#hill5').css({
        'top' : value * 0.5 + 'px',
        'leaf' : value * 1.2 + 'px'
    });
});

// $(document).ready(function(){
//     var image=document.getElementById('hill1');
//     $('.contents').css({
//         'position':'absolute',
//         'top':image.height +'px'
//     });
// });

//브라우저 사이즈 바뀔때마다
$(window).resize(function(){
    var image=document.getElementById('hill1');
    console.log(`${image.width} x ${image.height}`);

    $('.contents').css({
        'position':'absolute',
        'top':image.height + 'px'
    });
});