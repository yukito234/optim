$(function(){ 
	'use strict';

	//$('.hamburger-menu-area').addClass('appear');

	var windowWidthBefore = window.innerWidth;

	//初回ロード時の処理(PC)
	//特になし

	//初回ロード時の処理(TB以下)

	//ハンバーガークリック時
	$('.hamburger-menu-area').click(function(){ 
		//グローバル表示
		$('#global-nav > ul').css('display','block').addClass('grobal-fixed appear');

		//$('#global-nav > ul').css('display','block').css('display','flex').css('position','fixed').addClass('grobal-fixed appear');


		//$('#global-nav > ul').addClass('grobal-fixed appear');

		//$('#menu-global').css('display','block').addClass('grobal-fixed appear');
		//$('#menu-global').css('display','block').addClass('appear');

		//ハンバーガーを非表示
		$('.hamburger-menu-area').css('display','none').removeClass('appear');

		//閉じるボタンの表示
		$('.gnav-close-btn-area').css('display','block').addClass('appear');

		
	});

	//グローバルナビの閉じるボタンをクリックしたとき
	$('.gnav-close-btn-area').click(function(){ 		

		//グローバルを非表示にする
		$('#global-nav > ul').css('display','none').removeClass('grobal-fixed appear');
		//$('#menu-global').css('display','none').removeClass('grobal-fixed appear');

		//ハンバーガーを表示させる
		$('.hamburger-menu-area').css('display','block').addClass('appear');

		 //閉じるボタンを非表示
		$('.gnav-close-btn-area').css('display','none').removeClass('appear');

		
		
	});

	//リサイズ時の処理
	$(window).resize(function(){
		//リサイズのパターン
		//PC→PC : 処理不要
		//PC→TB以下
		//TB以下→TB以下
		//TB以下→PC

		//リサイズで表示を制御すべき要素
		//グローバル、ハンバーガ、閉じるボタン



		//各リサイズパターンにおける処理
		//PC→TB以下
		//グローバルを非表示(header.cssで対応)
		//ハンバーガ表示(header.cssで対応)
		//閉じるボタンは元から非表示


		//TB以下→TB以下
		//1:閉じるボタンが表示されている場合
		//グローバルはすでに表示されている
		//ハンバーガ非表示にする
		//閉じるボタンはそのまま

		//2:閉じるボタンが表示されていない場合
		//グローバルを非表示にする
		//ハンバーガを表示(header.cssで対応)
		//閉じるボタンは元から非表示


		//TB以下→PC
		//1:閉じるボタンが表示されている場合
		//グローバルを表示　※
		//ハンバーガは非表示のまま
		//閉じるボタンを非表示 ※

		//2:閉じるボタンが表示されていない場合
		//グローバルを表示　※
		//ハンバーガを非表示(header.cssで対応)
		//閉じるボタンは元から非表示


		//var w2 = window.innerWidth;
		var windowWidthAfter = window.innerWidth;

		console.log("windowWidthAfter");
		console.log(windowWidthAfter);

		console.log("windowWidthBefore");
		console.log(windowWidthBefore);


		//PC→TB以下
		//グローバルを非表示(header.cssで対応)
		//ハンバーガ表示(header.cssで対応)
		//閉じるボタンは元から非表示
		if(windowWidthBefore >= 900 && windowWidthAfter < 900){
			//グローバルを非表示にする
			$('#global-nav > ul').css('display','none').removeClass('appear');
			//$('#menu-global').css('display','none').removeClass('appear');
			//ハンバーガーを表示
			$('.hamburger-menu-area').css('display','block').addClass('appear');

		} else if(windowWidthBefore < 900 && windowWidthAfter < 900) {

			//TB以下→TB以下
			//1:閉じるボタンが表示されている場合
			//グローバルはすでに表示されている
			//ハンバーガ非表示にする
			//閉じるボタンはそのまま

			//2:閉じるボタンが表示されていない場合
			//グローバルを非表示にする
			//ハンバーガを表示(header.cssで対応)
			//閉じるボタンは元から非表示

			if($('.gnav-close-btn-area').hasClass('appear')){

				$('.hamburger-menu-area').css('display','none');

			} else {
				//バツボタンが表示されていない場合は、ハンバーガを表示(CSSにより自動で表示される)
				//グローバルを非表示にする
				$('#global-nav > ul').css('display','none').removeClass('appear');
				//$('#menu-global').css('display','none').removeClass('appear');
				//ハンバーガーを表示
				$('.hamburger-menu-area').css('display','block').addClass('appear');

			}	

		} else if(windowWidthBefore < 900 && windowWidthAfter >= 900) {

		

			//TB以下→PC
			//1:閉じるボタンが表示されている場合
			//グローバルを表示　※
			//ハンバーガは非表示のまま
			//閉じるボタンを非表示 ※

			//2:閉じるボタンが表示されていない場合
			//グローバルを表示　※
			//ハンバーガを非表示(header.cssで対応)
			//閉じるボタンは元から非表示

			//グローバルを表示
			//$('#global-nav > ul').css('display','block').addClass('grobal-fixed').addClass('appear');

			//$('#global-nav > ul').removeClass('grobal-fixed').addClass('appear');
			/**/
			$('#global-nav > ul').css({
				display:'flex',
				position:'static'
			});
			
			/*
			$('#global-nav > ul').css({
				display:'flex',				
			});
			*/
			

			//$('#menu-global').removeClass('grobal-fixed').addClass('appear');
			$('#global-nav > ul').addClass('grobal-fixed').addClass('appear');

			if($('.gnav-close-btn-area').hasClass('appear')){
				

				//ハンバーガは非表示のまま
				$('.hamburger-menu-area').css('display','none');

				//閉じるボタンを非表示
				$('.gnav-close-btn-area').css('display','none').removeClass('appear');



			} else {
				
				//ハンバーガは非表示のまま
				$('.hamburger-menu-area').css('display','none');
				

			}


		}

			
		
		windowWidthBefore = windowWidthAfter;

	});	

		
	

});