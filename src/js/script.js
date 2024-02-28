

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
    // $(window).on("scroll", function () {
    //     mvHeight = $(".js-mv").height();
    //     if ($(window).scrollTop() > mvHeight) {
    //         $(".js-header").addClass("is-scroll");
    //     } else {
    //         $(".js-header").removeClass("is-scroll");
    //     }
    // });


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
