<script>
	export let data;

	import { fade } from 'svelte/transition';
	import db from '../../../../store';
	import Bandeau from './Bandeau.svelte';
	import Interested from './Interested.svelte';

	let listAnimals, animal;
	db.subscribe((data) => {
		listAnimals = data;
	});
	animal = listAnimals[data.animal][data.id];
</script>

<div id="empty" />

<div id="wrapper" in:fade>
	<div id="imgWrapper"><img alt={animal.name} src={animal.link} /></div>
	<div id="textWrapper">
		<h1 class="text" id="name">{animal.name}</h1>
		<h2 class="text">{animal.sexe}</h2>
		<h2 class="text">Né(e) en {animal.naissance}</h2>
		<h3 class="text" id="description">{animal.description}</h3>
		<Interested name={animal.name} />
	</div>
</div>

<Bandeau listImage={animal.additionnalPhoto} nomChat={animal.name} />

<style>
	img {
		max-width: 600px;
		border-radius: 10px;
	}

	.text {
		margin: 0;
	}

	#imgWrapper {
		display: flex;
		flex-direction: column;
		justify-content: start;
	}

	#empty {
		padding: 1em;
	}

	#wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;

		gap: 1em;
	}

	#name {
		margin-bottom: 0.25em;
	}

	#description {
		margin-top: 0.25em;
		max-width: 700px;
		text-align: justify;
		text-justify: inter-word;
	}
</style>
