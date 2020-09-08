$(function(){ 
	'use strict';	

	var windowWidthBefore = window.innerWidth;

	//初回ロード時の処理(PC)
	//特になし

	//初回ロード時の処理(TB以下)

	//ハンバーガークリック時
	$('.hamburger-menu-area').click(function(){ 

		//グローバルがdisplay:blockでposition:staticの状態だと、スクロール時に追従しない
		//そこで、無理矢理にcssで.css('display','flex').css('position','fixed')を指定する
		if($('#global-nav > ul').css('display') == 'block') {
			$('#global-nav > ul').css('display','flex').css('position','fixed');

		} else {
			//グローバル表示
			$('#global-nav > ul').css('display','block').addClass('grobal-fixed');

		}


		//グローバル表示
		//$('#global-nav > ul').css('display','block').addClass('grobal-fixed');
		//$('#global-nav > ul').css('display','block').css('display','flex').css('position','fixed').addClass('grobal-fixed');
		//$('#global-nav > ul').addClass('grobal-fixed appear');		

		//ハンバーガーを非表示
		$('.hamburger-menu-area').css('display','none');
		//$('.hamburger-menu-area').addClass('disappear');

		//閉じるボタンの表示
		$('.gnav-close-btn-area').css('display','block');
		//$('.gnav-close-btn-area').addClass('appear');

		
	});

	//グローバルナビの閉じるボタンをクリックしたとき
	$('.gnav-close-btn-area').click(function(){ 		

		//グローバルを非表示にする
		$('#global-nav > ul').css('display','none').removeClass('grobal-fixed');
		//$('#global-nav > ul').removeClass('grobal-fixed appear');
		

		//ハンバーガーを表示させる
		$('.hamburger-menu-area').css('display','block');
		//$('.hamburger-menu-area').removeClass('disappear').addClass('appear');

		//閉じるボタンを非表示
		$('.gnav-close-btn-area').css('display','none');
		//$('.gnav-close-btn-area').removeClass('appear').addClass('disappear');

		
		
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
			$('#global-nav > ul').css('display','none');
			//$('#global-nav > ul').removeClass('appear').addClass('disappear');
			
			//ハンバーガーを表示
			$('.hamburger-menu-area').css('display','block');
			//$('.hamburger-menu-area').removeClass('disappear').addClass('appear');

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

			//if($('.gnav-close-btn-area').hasClass('appear')){
			if($('.gnav-close-btn-area').css('display') == 'block'){
				//ハンバーガ非表示にする
				$('.hamburger-menu-area').css('display','none');
				//$('.hamburger-menu-area').removeClass('appear').addClass('disappear');

			} else {
				
				//グローバルを非表示にする
				$('#global-nav > ul').css('display','none');
				//$('#global-nav > ul').removeClass('appear').addClass('disappear');
				//ハンバーガーを表示
				$('.hamburger-menu-area').css('display','block');
				//$('.hamburger-menu-area').removeClass('disappear').addClass('appear');

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
			//$('#global-nav > ul').addClass('grobal-fixed appear');	

			/*
			$('#global-nav > ul').css({
				display:'flex',
				position:'static'
			});
			*/
			
			
			

			//if($('.gnav-close-btn-area').hasClass('appear')){
			if($('.gnav-close-btn-area').css('display') == 'block'){
				

				//ハンバーガは非表示のまま
				$('.hamburger-menu-area').css('display','none');
				//$('.hamburger-menu-area').removeClass('appear').addClass('disappear');

				//閉じるボタンを非表示
				$('.gnav-close-btn-area').css('display','none');
				//$('.gnav-close-btn-area').removeClass('disappear').addClass('appear');



			} else {
				
				//ハンバーガは非表示のまま
				$('.hamburger-menu-area').css('display','none');
				//$('.hamburger-menu-area').removeClass('appear').addClass('disappear');
				
				//グローバル表示
				$('#global-nav > ul').css('display','block').addClass('grobal-fixed').css('display','flex');

			}


		}

			
		
		windowWidthBefore = windowWidthAfter;

	});	

		
	

});
