;(function ($) {
    init();

    function init() {
        musicControl();
        switchPage();
        $('.icon-btn').addClass('animated fadeInUp');
    }

    function musicControl() {
        var audio = $('.audio-box audio');
        $('.audio-box').on('click', function (e) {
            if (audio[0].paused) {
                audio[0].play();
                $('.audio-box')[0].style.animation = 'rotate-infinite 1.2s linear infinite';
            }
            else {
                audio[0].pause();
                $('.audio-box')[0].style.animation = 'none';
            }
        }, false);
    }

    function switchPage() {
        var Len = $('section').length;
        var curIndex = 0;
        $('.icon-btn').on('click', function (e) {
            $('section').css('');
            if (curIndex < Len) {
                $('section').eq(curIndex).css({
                    display: 'none',
                    transition: 'none',
                    transformOrigin: 'center top 0px',
                    transform: 'scale(1)'
                });
                $('section').eq(curIndex).removeClass('z-current');
                if (curIndex == 2) {
                    $('section').eq(0).css({
                        display: '',
                        transformOrigin: '',
                        transition: 'transform 0.4s linear',
                        transform: 'translateY(0px)'
                    }, 'ease');
                    $('section').eq(0).addClass('z-current');
                    curIndex = 0;
                    console.log(curIndex);
                }
                else {
                    $('section').eq(curIndex + 1).css({
                        display: '',
                        transformOrigin: '',
                        transition: 'transform 0.4s linear',
                        transform: 'translateY(0px)'
                    });
                    $('section').eq(curIndex + 1).addClass('z-current');
                    curIndex += 1;
                    console.log(curIndex);
                }
            }
        }, false)
    }
})(Zepto)