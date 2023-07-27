<script>
	export let data;

	import { fade } from 'svelte/transition';
	import Interested from './Interested.svelte';
	import ImageSwitcher from './ImageSwitcher.svelte';
	import Recommendation from './Recommendation.svelte';

	let bigImage = 0;
	let animal, imgToSend, otherAnimals;
	let zoomStatut = false;
	$: {
		animal = data.donnee;
		otherAnimals = data.recommendation;

		imgToSend = [animal.link];
		imgToSend = imgToSend.concat(animal.additionnalPhoto);
	}

	const changeZoomSTatus = () => {
		zoomStatut = !zoomStatut;
	};
</script>

<svelte:head>
	<title>{animal.name}</title>
</svelte:head>

<div id="empty" />
{#key (animal, data)}
	<div id="wrapper" in:fade>
		<div id="imgWrapper">
			{#key data.images[bigImage]}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img
					id="imgMain"
					alt={animal.name}
					src={data.images[bigImage]}
					on:click={() => {
						changeZoomSTatus();
					}}
				/>
			{/key}
		</div>
		<div id="textWrapper">
			<div id="nameAndAdoptedWrapper">
				<h1 class="text" id="name">{animal.name}</h1>
				<h2
					id="adoptedStatus"
					class="text"
					class:adopted={animal.statut === 'adopté'}
					class:notAdopted={animal.statut !== 'adopté'}
				>
					{animal.statut}(e)
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

	<div id="space" />

	<h2 id="recommendationLabel" transition:fade class="text">Nos autres {data.animal} :</h2>
	<Recommendation
		animal={data.animal}
		idAnimal={animal.id}
		listOtherAnimals={otherAnimals}
		listImages={data.otherImages}
		bind:bigImage
	/>

	{#if zoomStatut}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			id="zoomWrapper"
			on:click={() => {
				changeZoomSTatus();
			}}
		>
			<img id="zoomedImage" alt={animal.name} src={data.images[bigImage]} />
		</div>
	{/if}
{/key}

<style>
	img {
		border-radius: 10px;
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

	#imgMain {
		max-height: 600px;
		max-width: 600px;
	}

	#imgMain:hover {
		cursor: zoom-in;
		filter: drop-shadow(0px -5px 3px rgba(0, 0, 0, 0.128));
	}

	#empty {
		padding: 1em;
	}

	#wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;

		gap: 1em;
		overscroll-behavior: contain;
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

	#space {
		padding-top: 3em;
	}

	#recommendationLabel {
		background-color: var(--secondary-color);
		width: fit-content;
		border-radius: 0 10px 0 0;
		padding: 10px;
	}

	#zoomWrapper {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 0;

		backdrop-filter: blur(10px);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	#zoomedImage {
		width: auto;
		height: auto;

		max-height: 95vh;
	}

	#zoomedImage:hover {
		cursor: zoom-out;
	}
</style>
