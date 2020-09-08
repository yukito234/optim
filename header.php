<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title> <?php
		global $page, $paged;
		if (is_search()) : 
			wp_title('', true, 'left');
			echo ' | ';
		else :
			wp_title('|', true, 'right');
		endif;

		bloginfo('name');
		if (is_front_page()) : 
			echo ' | ';
			bloginfo('description');
		endif;
		if ($paged >= 2 || $page >= 2) : 
			echo ' | ' . sprintf('%sページ', max($paged, $page));
		endif;?>
	</title>
	<meta name="description" content="">
	<link rel="icon" href="favicon.ico">
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
<?php wp_head(); ?>
</head>

<body>
	<header>
		<div class="header-container">
			<div class="header-wrap">
				<div class="header-inner">
					<h1>
						<a href="<?php echo home_url('/'); ?>"><?php bloginfo('name'); ?></a>
					</h1>
					<p class="blog-description">
						<a href="<?php echo home_url('/'); ?>"><?php bloginfo('description'); ?></a>
					</p>
				</div>
				<div class="hamburger-menu-area">
					<i class="fas fa-bars hamburger-menu"></i>
				</div>
				<div class="gnav-close-btn-area">
					<p class="menu-close-ttl">close</p>
					<i class="far fa-times-circle gnav-close-btn"></i>
				</div>
			</div>
		</div>
		<div id="page_top"><a href="#"></a></div>
		<?php wp_nav_menu(array(
        	'container' => 'nav',
        	'container_id' => 'global-nav',
        	'theme_location' => 'place_global',
        ));
    	?>
	</header>