$(function() {
    $('.am-topbar-fixed-bottom').load('./components/footer.html');
    
    // $youziku.load("body", "77fd23900ba84be6ac87f8318703d8cc", "RS_XingKai");
    $youziku.load("body", "baec19cb5a604002854408f93e923754", "Source-Han-Light");
    $youziku.draw();
    $('#demo18').swiper({
        pagination: '#demo18 .swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        }
    });

});
$(function() {


});