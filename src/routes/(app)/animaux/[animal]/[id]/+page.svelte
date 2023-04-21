<script>
	export let data;

	import { fade } from 'svelte/transition';
	import Interested from './Interested.svelte';
	import ImageSwitcher from './ImageSwitcher.svelte';
	import Recommendation from './Recommendation.svelte';

	let bigImage = 0;
	let animal, imgToSend, otherAnimals;
	$: {
		animal = data.donnee;
		otherAnimals = data.recommendation;

		imgToSend = [animal.link];
		imgToSend = imgToSend.concat(animal.additionnalPhoto);
	}
</script>

<svelte:head>
	<title>{animal.name}</title>
</svelte:head>

<div id="empty" />
{#key (animal, data)}
	<div id="wrapper" in:fade>
		<div id="imgWrapper"><img alt={animal.name} src={data.images[bigImage]} /></div>
		<div id="textWrapper">
			<div id="nameAndAdoptedWrapper">
				<h1 class="text" id="name">{animal.name}</h1>
				<h2
					id="adoptedStatus"
					class="text"
					class:adopted={animal.statut === 'adopté'}
					class:notAdopted={animal.statut !== 'adopté'}
				>
					{animal.statut}
				</h2>
			</div>
			<h2 class="text">{animal.sexe}</h2>
			<h2 class="text">{animal.type}</h2>
			<h2 class="text">Né(e) en {animal.naissance}</h2>
			<h3 class="text" id="description">{animal.description}</h3>
			{#if animal.statut !== 'adopté'}
				<Interested name={animal.name} />
			{:else}
				<br />
			{/if}
			<ImageSwitcher listImage={data.images} bind:bigImage />
		</div>
	</div>

	<Recommendation
		animal={data.animal}
		idAnimal={animal.id}
		listOtherAnimals={otherAnimals}
		listImages={data.otherImages}
		bind:bigImage
	/>
{/key}

<style>
	img {
		max-width: 600px;
		border-radius: 10px;
		max-height: 600px;
	}

	.text {
		margin: 0;
	}

	.adopted {
		color: #40a02b;
	}

	.notAdopted {
		color: #d20f39;
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

	#nameAndAdoptedWrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	#description {
		margin-top: 0.25em;
		max-width: 700px;
		text-align: justify;
		text-justify: inter-word;
	}
</style>
