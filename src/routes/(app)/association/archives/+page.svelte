<script>
	export let data;

	import { fade } from 'svelte/transition';

	import Animal from '$lib/Animal.svelte';

	let listeAnimaux;

	$: {
		listeAnimaux = data.db;
	}
</script>

<svelte:head>
	{#key data}
		{#if data.id === 'chats' || data.id === 'chiens'}
			<title>Nos {data.id} disponibles à l'adoption</title>
		{:else}
			<title>Nos autres animaux disponibles à l'adoption</title>
		{/if}
	{/key}
</svelte:head>

<div id="description">
	<h1>Nos animaux déjas adoptés</h1>
</div>
{#key data}
	<div id="animalWrapper" in:fade>
		{#if listeAnimaux.length != 0}
			{#each listeAnimaux as { id, name, statut, sexe, naissance, specie }, i}
				{#if statut === 'adopté'}
					<Animal
						{name}
						lien={data.listImage[i]}
						onclic="/animaux/{specie}/{id}"
						{sexe}
						dateDeNaissance={naissance}
					/>
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
