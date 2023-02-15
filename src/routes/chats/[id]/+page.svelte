<script>
	import db from '../../../store';
	import { fade } from 'svelte/transition';
	import Bandeau from './Bandeau.svelte';

	export let data;

	let listChats, chat;
	db.subscribe((data) => {
		listChats = data;
	});
	chat = listChats.chats[data.id];
</script>

<div id="empty" />

<div id="wrapper" in:fade>
	<div id="imgWrapper"><img alt={chat.name} src={chat.link} /></div>
	<div id="textWrapper">
		<h1 class="text" id="name">{chat.name}</h1>
		<h2 class="text">{chat.sexe}</h2>
		<h2 class="text">Né(e) en {chat.naissance}</h2>
		<h3 class="text" id="description">{chat.description}</h3>
	</div>
</div>

<Bandeau listImage={chat.additionnalPhoto} nomChat={chat.name} />

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
