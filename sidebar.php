<aside class="sidebar">
	<?php //dynamic_sidebar( 'side-widget' ); ?>
	<?php if ( !dynamic_sidebar( 'side-widget' ) ) : ?>
		<h2>カテゴリー(デフォルト)</h2>
		<ul>
			<?php wp_list_categories( array('title_li' => '') ); ?>
		</ul>
	<?php else: ?>
	<?php endif; ?>
</aside>
