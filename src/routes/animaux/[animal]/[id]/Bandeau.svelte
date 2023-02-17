<script>
	export let listImage = [];
	export let nomChat = '';

	let imgToShow = 0;
	console.log(imgToShow % 3);
</script>

<div id="wrapper">
	<div id="imgWrapper">
		<div class="centering">
			<img src={listImage[0]} alt="une photo de {nomChat}" class="image" />
		</div>
		<div class="centering">
			<img src={listImage[1]} alt="une photo de {nomChat}" class="image" />
		</div>
		<div class="centering">
			<img src={listImage[2]} alt="une photo de {nomChat}" class="image" />
		</div>
	</div>
</div>

<style>
	.image {
		object-fit: cover;
		height: 40vh;
		width: 40vh;
		border-radius: 100%;
	}

	.centering {
		display: flex;
		align-items: center;
		justify-content: center;
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
