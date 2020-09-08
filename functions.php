<?php 

//カスタムメニュー
register_nav_menus(
	array(
		'place_global' => 'グローバル'
	)
);

//アイキャッチ画像を利用できるようにする
add_theme_support('post-thumbnails');

//アイキャッチ画像のサイズ指定
set_post_thumbnail_size(90,90,true);

//サイドバー用のアイキャッチ
add_image_size('small_thumbnail',61,61,true);

//アーカイブ用のアイキャッチ
add_image_size('large_thumbnail',120,120,true);

//カテゴリページのヘッダー画像
add_image_size('category_image',658,113,true);

//記事ページ、固定ページ用のアイキャッチ
add_image_size('eyecatch_image',1200,811,true);

add_image_size('single_eyecatch_image',200,120,true);

function widgetarea_init() {
	register_sidebar(array(
	    'name'=>'サイドバー',
	    'id' => 'side-widget',
	    'before_widget'=>'<div id="%1$s" class="%2$s sidebar-wrapper">',
	    'after_widget'=>'</div>',
	    'before_title' => '<h4 class="sidebar-title">',
	    'after_title' => '</h4>'
	    ));
	register_sidebar(array(
	    'name'=>'フッター',
	    'id' => 'footer-left-widget',
	    'before_widget'=>'<div id="%1$s" class="%2$s footer-left">',
	    'after_widget'=>'</div>',
	    'before_title' => '<h4 class="footer-left-title">',
	    'after_title' => '</h4>'
	    ));
}

add_action( 'widgets_init', 'widgetarea_init' );

function custom_excerpt_length( $length ) {
	return 100;
}

add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

function mytheme_remove_item( $wp_admin_bar ) {
   $wp_admin_bar->remove_node('updates'); // アップデート通知
   $wp_admin_bar->remove_node('wp-logo'); // Wpロゴ
   $wp_admin_bar->remove_node('comments'); // コメント
   $wp_admin_bar->remove_node('new-content'); // 新規投稿ボタン
//管理バー右の部分
   $wp_admin_bar->remove_node('edit-profile'); // プロフィール編集
   $wp_admin_bar->remove_node('user-info'); // ユーザー
}

add_action( 'admin_bar_menu', 'mytheme_remove_item', 1000 );

add_filter('get_image_tag_class', 'add_image_class');
//記事内の画像のスタイルを指定(single.css参照)
function add_image_class( $classes ) {
	return $classes . ' single-img';
}