<script>
	import db from '../../../store';
	import { fade } from 'svelte/transition';
	import Bandeau from './Bandeau.svelte';

	export let data;

	let listChiens, chien;
	db.subscribe((data) => {
		listChiens = data;
	});
	chien = listChiens.chiens[data.id];
</script>

<div id="empty" />

<div id="wrapper" in:fade>
	<div id="imgWrapper"><img alt={chien.name} src={chien.link} /></div>
	<div id="textWrapper">
		<h1 class="text" id="name">{chien.name}</h1>
		<h2 class="text">{chien.sexe}</h2>
		<h2 class="text">Né(e) en {chien.naissance}</h2>
		<h3 class="text" id="description">{chien.description}</h3>
	</div>
</div>

<Bandeau listImage={chien.additionnalPhoto} nomChat={chien.name} />

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
		max-width: 800px;
		text-align: justify;
		text-justify: inter-word;
	}
</style>
