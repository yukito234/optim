<?php get_header(); ?>
	<div class="container">
		<section id="contents-single">
		    <?php 
		    if (have_posts()):
		     	while (have_posts()):
		        the_post();
		        get_template_part('content-single');
		        ?>
		        <?php 
		      	endwhile;
		      	comments_template('',true);
		    endif;
		    ?>
		</section>
		<?php get_sidebar(); ?>
	</div>
<?php get_footer(); ?>
