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
      // htmlとbodyにoverflow: hidden;を直接適用してスクロールを無効にする
      $('html, body').css('overflow', 'hidden');
  });

  // 閉じるボタンをクリックしたらモーダルを閉じる
  close.on("click", function () {
      $(this).closest(".gallery-modal__item").removeClass("is-open");
      // htmlとbodyからoverflow: hidden;を削除してスクロールを有効にする
      $('html, body').css('overflow', '');
  });
});

  //タブ
// $(function () {
//   const tabButton = $(".js-tab-button"),
//     tabContent = $(".js-tab-content");
//   tabButton.on("click", function () {
//     let index = tabButton.index(this);

//     tabButton.removeClass("is-active");
//     $(this).addClass("is-active");
//     tabContent.removeClass("is-active");
//     tabContent.eq(index).addClass("is-active");
//   });
// });

// $(function () {
//   //タブの実装
// $(".js-tab-button").click(function () {
//    var index = $(".js-tab-button").index(this);
//    $(".js-tab-button, .js-tab-content").removeClass("is-active");
//    $(this).addClass("is-active");
//    $(".js-tab-content").eq(index).addClass("is-active");
// });
// });

// $(function () {
//   //タブへダイレクトリンクの実装
//   //リンクからハッシュを取得
//   var hash = location.hash;
//   hash = (hash.match(/^#tab__panel-\d+$/) || [])[0];

//   //リンクにハッシュが入っていればtabnameに格納
//   if ($(hash).length) {
//       var tabname = hash.slice(1);
//   } else {
//       var tabname = "tab__panel-1";
//   }

//   //コンテンツ非表示・タブを非アクティブ
//   $(".js-tab-button").removeClass("is-active");
//   $(".js-tab-content").removeClass("is-active");

//   //何番目のタブかを格納
//   var tabno = $(".js-tab-content#" + tabname).index();

//   //コンテンツ表示
//   $(".js-tab-content").eq(tabno).addClass("is-active");

//   //タブのアクティブ化
//   $(".js-tab-button").eq(tabno).addClass("is-active");
// });

// //任意のタブにURLからリンクするための設定
// function GethashID (hashIDName){
//   if(hashIDName){
//     //タブ設定
//     $('.information-tab li').find('a').each(function() { //タブ内のaタグ全てを取得
//       var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 
//       if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
//         var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
//         $('.information-tab li').removeClass("is-active"); //タブ内のliについているactiveクラスを取り除き
//         $(parentElm).addClass("is-active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
//         //表示させるエリア設定
//         $(".information-card").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
//         $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加 
//       }
//     });
//   }
// }

// //タブをクリックしたら
// $('.information-tab a').on('click', function() {
//   var idName = $(this).attr('href'); //タブ内のリンク名を取得  
//   GethashID (idName);//設定したタブの読み込みと
//   return false;//aタグを無効にする
// });


// // 上記の動きをページが読み込まれたらすぐに動かす
// $(window).on('load', function () {
//     $('.information-tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
//     $('.information-tab__content:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
//   var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
//   GethashID (hashName);//設定したタブの読み込み
// });

//別ページからアクティブなタブへのリンク
$(document).ready(function() {
  // URLからクエリパラメータを取得
  const urlParams = new URLSearchParams(window.location.search);
  const tabParam = urlParams.get('id');

  // 初期タブを決める変数を宣言
  let initialTab = "tab1"; // デフォルトのタブ
  if (tabParam && $('#' + tabParam).length) {
    initialTab = tabParam;
  }

  // リロードしたときにスクロールを止める
  $(window).on('load', function () {
    if (tabParam) {
      $('body,html').stop().scrollTop(0);
    }
  });

  // コンテンツ非表示 & タブを非アクティブ
  $('.information-tab__content').removeClass("is-active");
  $('.information-tab__button').removeClass('is-active');
  // 何番目のタブかを格納
  const tabno = $('.information-tab__button#' + initialTab).index();

  // コンテンツ表示
  $('.information-tab__content').eq(tabno).addClass('is-active');

  // タブのアクティブ化
  $('.information-tab__button').eq(tabno).addClass('is-active');

  // タブクリック時の処理
  $('.js-tab-button').on('click', function() {
    $('.js-tab-button,.js-tab-content').removeClass('is-active');
    $(this).addClass('is-active');
    const index = $('.js-tab-button').index(this);
    $('.js-tab-content').eq(index).addClass('is-active');
  });
});




//アコーディオン
$(function () {
  $(".js-blog-heading-accordion__item:first-child .js-blog-heading-accordion__content").css(
    "display",
    "block"
  );
  $(".js-blog-heading-accordion__item:first-child .js-blog-heading-accordion__title").addClass("is-open");
  $(".js-blog-heading-accordion__title").on("click", function () {
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
