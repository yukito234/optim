<footer>
	<div class="footer-container">
		<div class="footer-wrap">
			<?php dynamic_sidebar( 'footer-left-widget' ); ?>
		</div>
		<div class="footer-copyright">
			<p>Copyright - <?php bloginfo( 'name' ); ?>, <?php echo date("Y"); ?> All Rights Reserved.</p>
		</div>
	</div>
</footer>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="<?php bloginfo('template_url'); ?>/main.js"></script>
<?php wp_footer(); ?>
</body>
</html>