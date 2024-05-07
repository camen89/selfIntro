$(document).ready(function () {
    $(window).load(function(){
    let headerHeight = $('.Header_img').height();
    $('.Icon_img').css('top', headerHeight / 2 + 'px');
    $('.Header_group').css('margin-bottom', headerHeight / 2 + 'px');

    let iconImgWidth = $('.Timeline_img').width();
    $('.content_img1').css('margin-left', iconImgWidth + iconImgWidth / 2 + 'px');
    console.log(headerHeight, iconImgWidth);

    $(window).resize(function () {
        let headerHeight = $('.Header_img').height();
        $('.Icon_img').css('top', headerHeight / 2 + 'px');
        $('.Header_group').css('margin-bottom', headerHeight / 2 + 'px');

        let iconImgWidth = $('.Timeline_img').width();
        $('.content_img1').css('margin-left', iconImgWidth + iconImgWidth / 2 +'px');
        console.log(headerHeight, iconImgWidth);
    });
    });
});



