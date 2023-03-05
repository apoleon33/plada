<script>
	export let listImage = [];
	export let bigImage = 0;
</script>

<div id="wrapper">
	{#each listImage as lien, i}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img
			on:click={() => {
				bigImage = i;
			}}
			src={lien}
			alt="une autre du chat"
			class:selected={bigImage === i}
		/>
	{/each}
</div>

<style>
	img {
		width: 7em;
		height: 7em;
		object-fit: cover;

		border-radius: 5px;
		filter: brightness(60%);
		transition: 300ms;
	}

	img:hover {
		filter: brightness(100%);
		cursor: pointer;
	}

	.selected {
		filter: brightness(100%);
	}

	#wrapper {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 5px;
	}
</style>
