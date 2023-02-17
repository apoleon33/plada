<script>
	export let data;

	import { fade } from 'svelte/transition';
	import db from '../../../../store';
	import Interested from './Interested.svelte';
	import ImageSwitcher from './ImageSwitcher.svelte';
	import Recommendation from './Recommendation.svelte';

	let bigImage = 0;
	let listAnimals, animal, imgToSend;
	$: {
		db.subscribe((data) => {
			listAnimals = data;
		});
		animal = listAnimals[data.animal][data.id];

		imgToSend = [animal.link];
		imgToSend = imgToSend.concat(animal.additionnalPhoto);
	}
</script>

<div id="empty" />
{#key (animal, data)}
	<div id="wrapper" in:fade>
		<div id="imgWrapper"><img alt={animal.name} src={imgToSend[bigImage]} /></div>
		<div id="textWrapper">
			<h1 class="text" id="name">{animal.name}</h1>
			<h2 class="text">{animal.sexe}</h2>
			<h2 class="text">{animal.type}</h2>
			<h2 class="text">Né(e) en {animal.naissance}</h2>
			<h3 class="text" id="description">{animal.description}</h3>
			<Interested name={animal.name} />
			<ImageSwitcher listImage={imgToSend} bind:bigImage />
		</div>
	</div>

	<Recommendation animal={data.animal} />
{/key}

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
