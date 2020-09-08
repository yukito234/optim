$(function(){ 
	'use strict';	

	//ウィンドウ幅の取得（リサイズ対応で必要）
	var windowWidthBefore = window.innerWidth;	

	//ハンバーガーメニューのクリック時
	$('.hamburger-menu-area').click(function(){ 

		//グローバルメニュー表示
		$('#global-nav > ul').css('display','block');	

		//ハンバーガーを非表示
		$('.hamburger-menu-area').css('display','none');		

		//閉じるボタンの表示
		$('.gnav-close-btn-area').css('display','block');	
		
	});

	//閉じるボタンをクリックしたとき
	$('.gnav-close-btn-area').click(function(){ 		

		//グローバルを非表示にする
		$('#global-nav > ul').css('display','none');		

		//ハンバーガーを表示させる
		$('.hamburger-menu-area').css('display','block');		

		//閉じるボタンを非表示
		$('.gnav-close-btn-area').css('display','none');				
		
	});

	//リサイズ時の処理
	$(window).resize(function(){
		//リサイズのパターン
		//PC→PC
		//PC→TB(SP)
		//TB(SP)→TB(SP)
		//TB(SP)→PC

		//リサイズで表示を制御すべき要素
		//グローバル、ハンバーガー、閉じるボタン	
		
		var windowWidthAfter = window.innerWidth;		

		//PC→TB(SP)
		//グローバルを非表示
		//ハンバーガ表示
		//閉じるボタンは元から非表示
		if(windowWidthBefore > 900 && windowWidthAfter <= 900){
			console.log("windowWidthBefore > 900 && windowWidthAfter <= 900");
			//グローバルを非表示にする
			$('#global-nav > ul').css('display','none');			
			
			//ハンバーガーを表示
			$('.hamburger-menu-area').css('display','block');			

		} else if(windowWidthBefore <= 900 && windowWidthAfter <= 900) {
			console.log("windowWidthBefore <= 900 && windowWidthAfter <= 900");
			//TB以下→TB以下
			//1:閉じるボタンが表示されている場合
			//グローバルはすでに表示されている
			//ハンバーガ非表示にする
			//閉じるボタンはそのまま

			//2:閉じるボタンが表示されていない場合
			//グローバルを非表示にする
			//ハンバーガを表示
			//閉じるボタンは元から非表示
			
			if($('.gnav-close-btn-area').css('display') == 'block'){
				//ハンバーガ非表示にする
				$('.hamburger-menu-area').css('display','none');				

			} else {				
				//グローバルを非表示にする
				$('#global-nav > ul').css('display','none');
				
				//ハンバーガーを表示
				$('.hamburger-menu-area').css('display','block');				
			}	

		} else if(windowWidthBefore <= 900 && windowWidthAfter > 900) {		
			console.log("windowWidthBefore <= 900 && windowWidthAfter > 900");
			//TB(SP)→PC
			//1:閉じるボタンが表示されている場合
			//グローバルを表示　
			//ハンバーガは非表示のまま
			//閉じるボタンを非表示 

			//2:閉じるボタンが表示されていない場合
			//グローバルを表示　
			//ハンバーガを非表示
			//閉じるボタンは元から非表示

			//グローバルを表示			
			$('#global-nav > ul').css({
				display:'flex',				
			});						
						
			//閉じるボタンが表示されている場合
			if($('.gnav-close-btn-area').css('display') == 'block'){								
				//閉じるボタンを非表示
				$('.gnav-close-btn-area').css('display','none');		
			} else {
				//ハンバーガを非表示にする
				$('.hamburger-menu-area').css('display','none');
			}			
		}			
		//リサイズ前後のウィンドウ幅をモニタリングするため
		windowWidthBefore = windowWidthAfter;
	});	

	//トップへ戻るボタンの表示制御（スクロール時）
	$("#page_top").hide();
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
            $('#page_top').fadeIn();
        } else {
            $('#page_top').fadeOut();
        }
	});
	//トップへ戻るボタンの挙動制御（クリック時）
	$('#page_top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
