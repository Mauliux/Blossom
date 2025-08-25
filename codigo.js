window.onload = function(){
    setTimeout(function(){
        $('#onload').fadeOut();
        $('body').removeClass('hiden');
    }, 2000); // 3000 ms = 3 segundos
}
