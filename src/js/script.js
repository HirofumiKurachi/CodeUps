

jQuery(function ($) {
    // ハンバーガーメニュー
    $(".js-hamburger").click(function () {
        $(this).toggleClass("is-active");
        if ($(this).hasClass("is-active")) {
            openDrawer();
        } else {
            closeDrawer();
        }
    });

    //backgroundまたはページ内リンクをクリックで閉じる
    $(".js-drawer a[href]").on("click", function (event) {
        closeDrawer();
    });

    //resizeイベント
    $(window).resize(function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
            closeDrawer();
        }
    });

    function openDrawer() {
        $(".js-drawer").fadeIn();
        $(".js-hamburger").addClass("is-active");
    }
    function closeDrawer() {
        $(".js-drawer").fadeOut();
        $(".js-hamburger").removeClass("is-active");
    }

    // MV過ぎたらヘッダー背景色変化
    $(window).on("scroll", function () {
        var mvBottom = $(".js-mv").offset().top + $(".js-mv").outerHeight();
        if ($(window).scrollTop() > mvBottom) {
            $(".js-header").addClass("is-scroll");
        } else {
            $(".js-header").removeClass("is-scroll");
        }
    });

    //要素の取得とスピードの設定
var box = $('.colorbox'),
speed = 700;

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
$(this).append('<div class="color"></div>')
var color = $(this).find($('.color')),
image = $(this).find('img');
var counter = 0;

image.css('opacity','0');
color.css('width','0%');
//inviewを使って背景色が画面に現れたら処理をする
color.on('inview', function(){
    if(counter == 0){
       $(this).delay(200).animate({'width':'100%'},speed,function(){
               image.css('opacity','1');
               $(this).css({'left':'0' , 'right':'auto'});
               $(this).animate({'width':'0%'},speed);
            })
        counter = 1;
      }
 });
});

//     let vw = document.body.clientWidth;// スクロールバーを除いた幅を取得
// document.documentElement.style.setProperty('--vw', vw + 'px');



    let campaign_swiper; // グローバルスコープで campaign_swiper を定義

    function initializeSwiper() {
        const mv_swiper = new Swiper(".mv__slider", {
            loop: true,
            speed: 2000,
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
        });
    }

    initializeSwiper();

    function initializeCampaignSwiper() {
        campaign_swiper = new Swiper(".campaign-slider", {
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 24,
            grabCursor: true,
            breakpoints: {
                768: {
                    spaceBetween: 40,
                    slidesPerView: 3,
                },
                // 1024: {
                //     spaceBetween: 24,
                //     slidesPerView: auto,
                // },
            },
            navigation: {
                nextEl: '.campaign-swiper__button-next',
                prevEl: '.campaign-swiper__button-prev',
            },
        });
    }

    initializeCampaignSwiper();
});
