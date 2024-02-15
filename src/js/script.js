
jQuery(function ($) {
    // ハンバーガーメニュー
    $(function () {
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
            if (window.matchMedia("(min-width: 767px)").matches) {
                closeDrawer();
            }
        });
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
     mvHeight = $(".js-mv").height();
     if ($(window).scrollTop() > mvHeight) {
         $(".js-header").addClass("is-scroll");
     } else {
         $(".js-header").removeClass("is-scroll");
     }
  });

  // スライダー
  const mv_swiper = new Swiper(".mv__slider.swiper", {
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

    // const mv_swiper = new Swiper(".mv__slider.swiper", {
    //     loop: true,
    //     speed: 2000,
    //     effect: "fade",
    //     fadeEffect: {
    //         crossFade: true,
    //     },
    //     autoplay: {
    //         delay: 4000,
    //         disableOnInteraction: false,
    //         },
    //     });
});