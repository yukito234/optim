<article <?php post_class(); ?>>
	<h1 class="single-title"><?php the_title(); ?></h1>
	<div class="single-info">
    	<span class="single-date">最終更新日：<?php echo get_the_date(); ?></span>
      	<span class="single-category"><i class="fas fa-folder"></i><?php the_category(','); ?></span>
  	</div>

	<?php if ( has_post_thumbnail() ) : ?>
		<?php
		the_post_thumbnail('full');
		?>
	<?php else : ?>
		<img src="<?php bloginfo('template_url'); ?>/images/no-image.jpg" alt="" class="eyecatch-img eyecatch-img-01">
	<?php endif ; ?>
	<section class="entry-content">
		<?php the_content(); ?>
	</section>
</article>
