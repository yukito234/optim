<article <?php post_class(); ?>>
	<h1 class="page-title"><?php the_title(); ?></h1>
	<div class="page-date">
    	<span class="">最終更新日：<?php echo get_the_date(); ?></span>
  	</div>
	<?php if ( has_post_thumbnail() ) : ?>
		<?php
		//the_category_image();
		the_post_thumbnail('full');
		?>
	<?php else : ?>
		<img src="<?php bloginfo('template_url'); ?>/images/no-image.jpg" alt="" class="eyecatch-img eyecatch-img-01">
	<?php endif ; ?>
	<section class="entry-content">
		<?php the_content(); ?>
	</section>
</article>
