<script>
	export let data;

	import { fade } from 'svelte/transition';

	import Animal from './Animal.svelte';

	const isStillToAdopt = (element) => {
		return element.statut === 'non adopté';
	};

	let listeAnimaux;
	$: {
		listeAnimaux = data.db;
	}
</script>

<div id="description">
	<h1>
		{#if listeAnimaux.length != 0}
			{#if data.id === 'chats' || data.id === 'chiens'}
				Nos {data.id} disponibles à l'adoption
			{:else}
				Nos autres animaux disponibles à l'adoption
			{/if}
		{:else}
			<h3>Pas d'animaux à adopter en ce moment!</h3>
		{/if}
	</h1>
</div>
{#key data}
	<div id="animalWrapper" in:fade>
		{#if listeAnimaux.length != 0}
			{#each listeAnimaux as { id, name, link, statut }, i}
				{#if statut === 'non adopté'}
					<Animal {name} lien={data.listImage[i]} onclic="/animaux/{data.id}/{id}" />
				{/if}
			{/each}
		{/if}
	</div>
{/key}

<style>
	#description {
		display: flex;
		justify-content: center;
		align-items: center;

		padding: 2em;
	}

	#animalWrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 3em;
	}
</style>
