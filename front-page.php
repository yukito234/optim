<?php get_header(); ?>
	<div class="container">
		<main>
			<?php 
			if( have_posts() ):
				while( have_posts() ):
					the_post(); ?>
					<article class="post-top" <?php //post_class(); ?> >
						<figure class="">
							<?php if ( has_post_thumbnail() ) : ?>
        						<?php the_post_thumbnail('full'); ?>
    						<?php else : ?>
        						<img src="<?php bloginfo('template_url'); ?>/images/no-image.jpg" alt="" class="eyecatch-img eyecatch-img-01">
   							<?php endif ; ?>

							<figcaption class="post-category-01">
								<i class="fas fa-folder"></i>
								<?php foreach( (get_the_category() ) as $category ): ?>
									<?php 
									$category_id = get_cat_ID( $category->cat_name );
									$category_link = get_category_link( $category_id ); ?>
									<a href="<?php echo esc_url( $category_link ); ?>">
										<?php echo $category->cat_name; ?>
									</a>
								<?php endforeach; ?>
							</figcaption>
						</figure>

						<section class="post-content-01">
							<a href="<?php the_permalink(); ?>" class="ttl-link">
								<h2 class="post-ttl-01"><?php the_title(); ?></h2>
							</a>
							<time class="date-updated-01" datetime="<?php echo get_the_date( 'Y-m-d' ); ?>"><?php echo get_the_date(); ?></time>
							<?php the_excerpt(); ?>
							<a href="<?php the_permalink(); ?>" class="read-more">続きを読む</a>
						</section>
					</article>
				<?php 
				endwhile;
			endif; ?>

			<div class="pagination">
				<?php echo paginate_links( array(
				    'type' => 'list',
				    'mid_size' => '1',
				    'prev_text' => '&laquo;',
				    'next_text' => '&raquo;'
			    ) ); ?>
			</div>
		</main>
		<?php get_sidebar(); ?>
	</div>

<?php get_footer(); ?>
