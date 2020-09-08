<?php get_header(); ?>
<div class="category-container">
    <section id="category-contents">
        <h1 class="category-title">「<?php the_search_query(); ?>」の検索結果</h1>
        <div class="category-posts">
            <?php
            if (have_posts() && get_search_query()) :
                while (have_posts()) :
                    the_post();
                    get_template_part('content-archive');
                endwhile;

                if (function_exists('page_navi')) :
                    page_navi('elm_class=page-nav&edge_type=span');
                endif;

            else: ?>
            <p>該当する記事が存在していません。</p>
            <?php endif; ?>
        </div>
    </section><!-- #contents end -->
    <?php get_sidebar(); ?>
</div>
<?php get_footer(); ?>
