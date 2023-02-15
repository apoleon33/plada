<script>
	export let listImage = [];
	export let nomChat = '';

	let imgToShow = 0;
	console.log(imgToShow % 3);
</script>

<div id="wrapper">
	<div id="imgWrapper">
		<img src={listImage[0]} alt="une photo de {nomChat}" class="image" />
		<img src={listImage[1]} alt="une photo de {nomChat}" class="image" />
		<img src={listImage[2]} alt="une photo de {nomChat}" class="image" />
	</div>
</div>

<style>
	.image {
		max-height: 300px;
	}

	#wrapper {
		justify-content: left;
		padding-top: 3em;
		margin: 0;
		left: 0px;
	}

	#imgWrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 0.5em;

		width: 99vw;
		background-color: var(--secondary-color);
	}
</style>
