<?php get_header(); ?>

<div class="container-404">
	<main class="main-404">
		<div  class="wrap-404">
			<h1>404 File not found</h1>
			<h2>申し訳ございませんが、Webページが見つかりません</h2>
			<div id="content">
				<h3>可能性のある原因</h3>
				<ul>
					<li>アドレスの入力間違い</li>
					<li>リンクが古い</li>
				</ul>
				<h3>対処方法</h3>
				<ul>
					<li>アドレスを再入力する。</li>
					<li>
						<a href="javascript:history.back();">前のページに戻る。</a>
					</li>
					<li>
						<a href="<?php echo home_url('/'); ?>">メインのサイト</a>
						に移動して必要な情報を探す。
					</li>
				</ul>
			</div>
		</div>
	</main>
	<?php get_sidebar(); ?>
</div>

<?php get_footer(); ?>
