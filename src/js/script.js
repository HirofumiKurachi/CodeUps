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

  // スクロールイベント
  $(window).on("scroll", function () {
    let scrollHeight = $(document).height();
    let scrollPosition = $(window).height() + $(window).scrollTop();
    let footHeight = $(".js-footer").innerHeight();
    let scrollPositionFromTop = $(window).scrollTop();
    // ボタン位置の調整
    let cssSettings = scrollHeight - scrollPosition <= footHeight ? { position: "absolute", bottom: footHeight + "px", top: "auto" } : { position: "fixed", bottom: "0px", top: "auto" };
    $(".js-top-button").css(cssSettings);
    // ボタンの表示・非表示
    if (scrollPositionFromTop > 200) {
      $(".js-top-button").fadeIn();
    } else {
      $(".js-top-button").fadeOut();
    }
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
    var mvBottom = $(".mv, .sub-page-mv").offset().top + $(".mv, .sub-page-mv").outerHeight();
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
