<?php get_header(); ?>
	<div class="category-container">
		<section class="category-contents">
		    <h1 class="category-title">
		    	<?php the_archive_title(); ?>の記事一覧
		    </h1>

	    	<div class="category-posts">
			    <?php 
			    if (have_posts()):
			     	while (have_posts()):
			        the_post();
			        get_template_part('content-archive');
			        ?>
			        <?php 
			      	endwhile;
			    endif;
			    ?>
			</div>

			<div class="pagination">
			  <?php echo paginate_links( array(
			    'type' => 'list',
			    'mid_size' => '1',
			    'prev_text' => '&laquo;',
			    'next_text' => '&raquo;'
			    ) ); ?>
			</div>
		</section>
		<?php get_sidebar(); ?>
	</div>
<?php get_footer(); ?>
