<script>
	export let data;

	import { fade } from 'svelte/transition';

	import Animal from './Animal.svelte';
	import Filter from './Filter.svelte';

	const isInCriteria = (criteria, sexe, naissance, type) => {
		if (!((criteria.sexe[0] && sexe === 'Male') || (criteria.sexe[1] && sexe === 'Femelle'))) {
			return false;
		}

		if (!(criteria.naissance[0] <= naissance && criteria.naissance[1] >= naissance)) {
			return false;
		}

		return true;
	};

	const isStillToAdopt = (element) => {
		return element.statut === 'non adopté';
	};

	let listeAnimaux;
	let criteria = {
		sexe: [true, true],
		naissance: [0, 0],
		type: ''
	};

	$: {
		listeAnimaux = data.db;
		console.log(criteria);
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
	<div id="filterAndAnimalsWrapper">
		<Filter bind:criteria />
		<div id="animalWrapper" in:fade>
			{#if listeAnimaux.length != 0}
				{#each listeAnimaux as { id, name, statut, sexe, naissance, type }, i}
					{#if statut === 'non adopté'}
						{#if isInCriteria(criteria, sexe, naissance, type)}
							<Animal {name} lien={data.listImage[i]} onclic="/animaux/{data.id}/{id}" />
						{/if}
					{/if}
				{/each}
			{/if}
		</div>
	</div>
{/key}

<style>
	#description {
		display: flex;
		justify-content: center;
		align-items: center;

		padding: 2em;
	}

	#filterAndAnimalsWrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		padding: 1em;
	}

	#animalWrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 3em;
	}
</style>
