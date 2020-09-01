


$(function(){

    $('.sp-menu').click(function(){
    
   /* 開閉ボタンのクラスが'close'（閉じている状態）の場合 */
   if($('.han').attr("class") == 'han close') {

    /* ハンバーガーメニューを展開 */
    $('.han').slideDown();

    /* さらに、開閉ボタンのクラスから'close'を削除し、'open'を付与する */
    $('.han').removeClass("close").addClass("open");

  }
 /* 開閉ボタンのクラスが'close'ではない場合 */

 else {

    /* ハンバーガーメニューを収束 */
    $('.han').slideUp(function() {

      /* メニューが収束したのち、開閉ボタンのクラスから'open'を削除し、'close'を付与する */
      $('.han').removeClass("open").addClass("close");
    });
  }


}); /* 開閉ボタンをクリックした時の動作はここまで */

        

  
        /* ハンバーガーメニューのアンカーをクリックしたら以下の関数を実行 */
  $('.han-item a').click(function() {

    /* 開いている必要はないので、ハンバーガーメニューを収束 */
    $('.han').slideUp(function() {

      /* メニューが収束したのち、開閉ボタンのクラスから'open'を削除し、'close'を付与する */
      $('.han').removeClass("open").addClass("close");
    });
  });

 
 





  
  var effect_btm = 300; // 画面下からどの位置でフェードさせるか(px)
  var effect_move = 50; // どのぐらい要素を動かすか(px)
  var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000



  

  //親要素と子要素のcssを定義
  $('.scroll-fade-row').css({
      opacity: 0
  });
  $('.scroll-fade-row').children().each(function(){
      $(this).css({
          opacity: 0,
          transform: 'translateY('+ effect_move +'px)',
          transition: effect_time + 'ms'
      });
  });

  // スクロールまたはロードするたびに実行
  $(window).on('scroll load', function(){
      var scroll_top = $(this).scrollTop();
      var scroll_btm = scroll_top + $(this).height();
      var effect_pos = scroll_btm - effect_btm;

      //エフェクトが発動したとき、子要素をずらしてフェードさせる
      $('.scroll-fade-row').each( function() {
          var this_pos = $(this).offset().top;
          if ( effect_pos > this_pos ) {
              $(this).css({
                  opacity: 1,
                  transform: 'translateY(0)'
              });
              $(this).children().each(function(i){
                  $(this).delay(100 + i*200).queue(function(){
                      $(this).css({
                          opacity: 1,
                          transform: 'translateY(0)'
                      }).dequeue();
                  });
              });
          }
      });


      load_effect();
      $(window).scroll(function (){
          scroll_effect();
      });  
  //ふわっとロード
  function load_effect(){
    var tt = $(window).scrollTop();
    var hh = $(window).height();
    $('.load-fade').each(function(){
        var yy = $(this).offset().top;
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
  
}

  });

  
  

});





   

 

 
