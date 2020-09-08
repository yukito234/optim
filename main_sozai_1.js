$(function(){ 
	'use strict';
	/**/
	var w = window.innerWidth;

	$('.hamburger-menu-area').addClass('appear');

	if(w > 900 ){	//pcで表示したときの処理
		$(window).trigger('scroll');

		if ($(window).scrollTop() <= 130) {
			$('.menu-item-has-children').hover( //グローバルにホバー時の処理
			    function() {  //以下はマウスカーソルが重なった時の処理
					$(this).find('.sub-menu').css('display','block');
				    $(this).find('.sub-menu').css('position','absolute');
				    $(this).find('.sub-menu').css('width','200px');
				    $(this).find('.sub-menu').css('background-color','white');
			    },

			    function() { //マウスカーソルが離れた時の処理
				    $(this).find('.sub-menu').css('display','none');
				    $(this).find('.sub-menu').css('position','static');
			    }
			);
		}
		/*
		$(window).resize(function(){
			var w2 = window.innerWidth;
			if( w2 < 900){
				$('.hamburger-menu-area').click(function(){
					//グローバル表示,クラスの付与
					$('#menu-global').css('display','block').addClass('grobal-fixed appear');

					//ハンバーガーを非表示
					$('.hamburger-menu-area').css('display','none').removeClass('appear');

					//クローズボタンの表示
					$('.gnav-close-btn-area').css('display','block').addClass('appear');

					$('.gnav-close-btn-area').click(function(){ //グローバルナビの閉じるボタンをクリックしたとき

						if( !$('.header-wrap').hasClass('window-scrolled') ){
							//ハンバーガーを表示させる
							$('.hamburger-menu-area').css('display','block').addClass('appear');

							//閉じるボタンを非表示
							$('.gnav-close-btn-area').css('display','none').removeClass('appear');

							//グローバルを非表示にする
							$('#menu-global').css('display','none').removeClass('appear');
						}
					});
				});

			} else {
				//ハンバーガーを非表示
				$('.hamburger-menu-area').css('display','none').removeClass('appear');

				//閉じるボタンを非表示
				$('.gnav-close-btn-area').css('display','none').removeClass('appear');

				$('#menu-global').css({
					display:'flex',
					position:'static'
				});

				$('#menu-global').removeClass('grobal-fixed').addClass('appear');
			}
		});
		*/

	} else { //TB または　SPで表示させた場合
		if ( $(window).scrollTop() < 130 && !$('.header-wrap').hasClass('window-scrolled')   ) { //読み込み直後の処理

			$('.hamburger-menu-area').click(function(){ //ハンバーガークリック時
				//グローバル表示
				$('#menu-global').css('display','block').addClass('grobal-fixed appear');

				//ハンバーガーを非表示
				$('.hamburger-menu-area').css('display','none').removeClass('appear');

				//クローズボタンの表示
				$('.gnav-close-btn-area').css('display','block').addClass('appear');

				$('.gnav-close-btn-area').click(function(){ //グローバルナビの閉じるボタンをクリックしたとき

					if( !$('.header-wrap').hasClass('window-scrolled') ){

						//ハンバーガーを表示させる
						$('.hamburger-menu-area').css('display','block').addClass('appear');

						 //閉じるボタンを非表示
						$('.gnav-close-btn-area').css('display','none').removeClass('appear');

						//グローバルを非表示にする
						$('#menu-global').css('display','none').removeClass('appear');
					}
				});
			});
		}

		$(window).scroll(function() { //スクロール後
			if ( $(this).scrollTop() > 130 && !$('#menu-global').hasClass('appear') ) { //スクロール量が130以上のとき
	            $('.header-wrap').addClass('header-fixed window-scrolled'); //ヘッダーを固定表示
				$('.hamburger-menu-area').click(function(){  //ハンバーガーがクリックされたとき
					//グローバルを表示
					$('#menu-global').css('display','block').addClass('grobal-fixed appear');

					//ハンバーガーを非表示
					$('.hamburger-menu-area').css('display','none').removeClass('appear');

					//closeボタンを表示
					$('.gnav-close-btn-area').css('display','block').addClass('appear');

					$('.gnav-close-btn-area').click(function(){ //グローバルナビの閉じるボタンをクリックしたとき

						//ハンバーガーを表示させる
						$('.hamburger-menu-area').css('display','block').addClass('appear');

						//閉じるボタンを非表示
						$('.gnav-close-btn-area').css('display','none').removeClass('appear');

						$('#menu-global').css('display','none').removeClass('appear');
					});
				});
	        }
		});
	}

});
