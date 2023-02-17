<script>
	export let data;

	import { fade } from 'svelte/transition';

	import Animal from './Animal.svelte';
	import db from '../../../store';

	const isStillToAdopt = (element) => {
		return element.statut === 'non adopté';
	};

	let listeAnimaux;
	let purgedListeAnimaux = [];
	$: {
		db.subscribe((data) => {
			listeAnimaux = data;
		});
		listeAnimaux = listeAnimaux[data.id];
		listeAnimaux.forEach((element) => {
			if (isStillToAdopt(element)) {
				purgedListeAnimaux.push(element);
			}
		});
		listeAnimaux = purgedListeAnimaux;
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
			{#each listeAnimaux as { id, name, link }, i}
				<Animal {name} lien={link} onclic="/animaux/{data.id}/{id}" />
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
