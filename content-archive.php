<article <?php post_class(); ?> >
 	<div class="category-image-link">
 		<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail('full',
				array(
					'alt' => the_title_attribute('echo=0'),
					'title' => the_title_attribute('echo=0')
				)
			);
			?>
		<?php else : ?>
			<img src="<?php bloginfo('template_url'); ?>/images/no-image.jpg" alt="" class="eyecatch-img eyecatch-img-01">
		<?php endif ; ?>

		<div class="category-links">
			<i class="fas fa-folder"></i>
			<?php foreach( (get_the_category() ) as $category ): ?>
				<?php 
				$category_id = get_cat_ID( $category->cat_name );
				$category_link = get_category_link( $category_id ); ?>
				<a href="<?php echo esc_url( $category_link ); ?>">
					<?php echo $category->cat_name; ?>
				</a>
			<?php endforeach; ?>
		</div>
	</div>

    <div class="category-title-excerpt">
		<a href="<?php the_permalink(); ?>">
			<h1 class="entry-title"><?php the_title(); ?></h1>
		</a>
		<time pubdate="pubdate" datetime="<?php the_time('Y-m-d'); ?>" class="entry-date">
			<?php the_time( get_option('date_format') ); ?>
		</time>
	    <div class="entry-content">
	    	<?php the_excerpt(); ?>
	    	<a href="<?php the_permalink(); ?>">続きを読む</a>
	    </div>
	</div>
</article>
