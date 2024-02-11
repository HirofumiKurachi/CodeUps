
jQuery(function ($) {
  //ハンバーガーメニュー
  $(".js-hamburger,.js-drawer,.js-drawer a").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });
});

// resizeイベント
$(window).resize(function () {
  if (window.matchMedia("(min-width: 768px)").matches) {
      closeDrawer();
    }
  } );


// 新しい関数: openDrawer
function openDrawer() {
  $(".js-drawer").fadeIn();
  $(".js-hamburger").addClass("is-open");
}

// 新しい関数: closeDrawer
function closeDrawer() {
  $(".js-drawer").fadeOut();
  $(".js-hamburger").removeClass("is-open");
  $(".js-hamburger").removeClass("is-active");
}