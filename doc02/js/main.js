$(function () {
    $('.MainSlider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.ProductSlider').slick({
        arrows: false,
        //dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.poduct_arrows i:nth-child(1)').on('click', function () {
        $('.ProductSlider').slick('slickPrev')
    });
    $('.poduct_arrows i:nth-child(2)').on('click', function () {
        $('.ProductSlider').slick('slickNext')
    });

})