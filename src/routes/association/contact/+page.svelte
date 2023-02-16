<script>
	import Phone from './Phone.svelte';
	import At from './At.svelte';
	import Facebook from './Facebook.svelte';
</script>

<div id="wrapper">
	<h1>Nous contacter</h1>
	<div id="listeContact">
		<div class="iconAndContentWrapper">
			<Phone />
			<h2>Par téléphone: au ...</h2>
		</div>
		<div class="iconAndContentWrapper">
			<At />
			<h2>Par mail: ...</h2>
		</div>
		<div class="iconAndContentWrapper">
			<Facebook />
			<h2>Sur facebook: ...</h2>
		</div>
	</div>
</div>

<style>
	.iconAndContentWrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
	}

	#wrapper {
		padding: 1em;
	}
</style>
