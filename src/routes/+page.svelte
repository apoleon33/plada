<script>
	import { fly } from 'svelte/transition';
	import Ear from './Ear.svelte';
	import Summary from './Summary.svelte';
	import '../style.css';
</script>

<svelte:head>
	<title>Accueil</title>
</svelte:head>

<a href="/" id="logoWrapper">
	<img src="/logo.png" alt="association logo" in:fly={{ y: -100 }} /></a
>
<div id="earWrapper">
	<div id="leftEar" class="earWrapper"><Ear /></div>
	<div id="rightEar" class="earWrapper"><Ear xIntro={300} /></div>
</div>

<div id="wrapper">
	<div id="empty" />
	<div id="content-left">
		<div id="notre-association">
			<h1 class="text">Notre association</h1>
			<p class="text">
				Notre petite association loi 1901 basée en Gironde (33) prend en charge principalement les
				chiens et les chats en situation de détresse et met en oeuvre toutes les actions
				qualitatives afin qu'ils puissent à terme avoir leur doux foyer pour toujours.
				<a href="/association/contact">En savoir plus</a>
			</p>
		</div>
	</div>
</div>

<style>
	.earWrapper {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#wrapper {
		background-color: var(--secondary-color);
	}

	.text {
		text-align: center;
	}

	/* mobile version */
	@media screen and (max-width: 480px) {
		img {
			width: 100vw;
		}

		#earWrapper {
			display: flex;
			flex-direction: row;
			align-items: end;
			justify-content: space-between;
		}

		#leftEar {
			padding-left: 20px;
		}

		#rightEar {
			padding-right: 20px;
		}

		#wrapper {
			display: flex;
			flex-direction: column;
			justify-content: start;
			align-items: center;

			width: 100vw;
			height: 32vh;
		}

		p {
			max-width: 90vw;
		}
	}

	/* desktop version */
	@media screen and (min-width: 480px) {
		#logoWrapper {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		img {
			width: 480px;
		}

		#earWrapper {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
		}

		#leftEar {
			grid-column: 2;
		}

		#rightEar {
			grid-column: 4;
		}

		#content-left {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		#notre-association {
			max-width: 480px;
		}

		.text {
			margin-top: 0;
			padding-top: 1em;
		}

		p {
			font-size: larger;
		}
	}
</style>
