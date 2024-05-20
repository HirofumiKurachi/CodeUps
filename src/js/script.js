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

  // トップに戻るボタン
  $(document).ready(function () {
    $(".js-top-button").hide();
    $(window).on("scroll", function () {
      let scrollPositionFromTop = $(window).scrollTop();
      let windowHeight = $(window).height();
      let footerTop = $(".footer").offset().top;
      let triggerOffset = 200;

      // ボタンの表示・非表示
      if (scrollPositionFromTop > triggerOffset && scrollPositionFromTop + windowHeight < footerTop) {
        $(".js-top-button").fadeIn();
      } else {
        $(".js-top-button").fadeOut();
      }
    });
    // ボタンクリックでトップに戻る
    $(".js-top-button").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
    });
  });

  // モーダル
  $(function () {
    const open = $(".js-modal-open"),
      close = $(".js-modal-close");

    // 各画像のクリックイベントを個別に処理
    open.on("click", function () {
      // クリックされた画像のdata-target属性値を取得
      const target = $(this).data("target");
      // 対応するモーダルを開く
      $(`#gallery-modal-${target}`).addClass("is-open");
    });

    // 閉じるボタンをクリックしたらモーダルを閉じる
    close.on("click", function () {
      $(this).closest(".gallery-modal__item").removeClass("is-open");
    });
  });

  //タブ
$(function () {
  const tabButton = $(".js-tab-button"),
    tabContent = $(".js-tab-content");
  tabButton.on("click", function () {
    let index = tabButton.index(this);

    tabButton.removeClass("is-active");
    $(this).addClass("is-active");
    tabContent.removeClass("is-active");
    tabContent.eq(index).addClass("is-active");
  });
});


//アコーディオン
$(function () {
  $(".js-blog-heading-accordion-item:first-child .js-blog-heading-accordion-content").css(
    "display",
    "block"
  );
  $(".js-blog-heading-accordion-item:first-child .js-blog-heading-accordion-title").addClass("is-open");
  $(".js-blog-heading-accordion-title").on("click", function () {
    $(this).toggleClass("is-open");
    $(this).next().slideToggle(300);
  });
});

$(function () {
  $(".js-faq-page-accordion-item .js-faq-page-accordion-content").css(
    "display",
    "block"
  );
  $(".js-faq-page-accordion-item .js-faq-page-accordion-title").addClass(
    "is-open"
  );
  $(".js-faq-page-accordion-title").on("click", function () {
    $(this).toggleClass("is-open");
    $(this).next().slideToggle(300);
  });
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
    $("body").css("overflow", "hidden");
  }
  function closeDrawer() {
    $(".js-drawer").fadeOut();
    $(".js-hamburger").removeClass("is-active");
    $("body").css("overflow", "");
  }

  //MV過ぎたらヘッダー背景色変化
  $(window).on("scroll", function () {
    var mvBottom = $(".mv, .sub-page-mv, .breadcrumb-404").offset().top + $(".mv, .sub-page-mv, .breadcrumb-404").outerHeight();
    if ($(window).scrollTop() > mvBottom) {
      $(".js-header").addClass("is-scroll");
    } else {
      $(".js-header").removeClass("is-scroll");
    }
  });

  //要素の取得とスピードの設定
  var box = $(".colorbox"),
    speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });

  let campaign_swiper; // グローバルスコープで campaign_swiper を定義
  //mvスワイパー
  function initializeSwiper() {
    const mv_swiper = new Swiper(".js-mv-swiper", {
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
  //campaignスワイパー
  function initializeCampaignSwiper() {
    campaign_swiper = new Swiper(".js-campaign-swiper", {
      loop: true,
      autoplay: true,
      delay: 4000,
      speed: 1000, // スライドの切り替えスピード（ミリ秒）
      loopedSlides: 4,
      slidesPerView: "auto",
      spaceBetween: 24,
      grabCursor: true,
      breakpoints: {
        768: {
          spaceBetween: 40,
          slidesPerView: 3,
        },
      },
      navigation: {
        nextEl: ".campaign__container-button-next",
        prevEl: ".campaign__container-button-prev",
      },
    });
  }

  initializeCampaignSwiper();
});
