<?php get_header(); ?>
	<div class="container-page">
		<section id="contents-page">
		    <?php 
		    if (have_posts()):
		     	while (have_posts()):
		        the_post();
		        get_template_part('content');
		        ?>
		        <?php 
		      	endwhile;
		    endif;
		    ?>
		</section>

		<?php get_sidebar(); ?>
	</div>
<?php get_footer(); ?>
