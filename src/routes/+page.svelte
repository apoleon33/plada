<script>
	import { fly } from 'svelte/transition';
	import Ear from './Ear.svelte';
	import Summary from './Summary.svelte';
	import '../style.css';
</script>

<Summary />
<a href="/" id="logoWrapper">
	<img src="/logo.jpg" alt="association logo" in:fly={{ y: -100 }} /></a
>
<div id="earWrapper">
	<div id="leftEar" class="earWrapper"><Ear /></div>
	<div id="rightEar" class="earWrapper"><Ear xIntro={300} /></div>
</div>

<div id="wrapper">
	<div id="content-left">
		<div id="notre-association">
			<h1 class="text">Notre association</h1>
			<p class="text">
				"Notre petite association loi 1901 basée en Gironde (33) prend en charge principalement les
				chiens et les chats en situation de détresse et met en oeuvre toutes les actions
				qualitatives afin qu'ils puissent à terme avoir leur doux foyer pour toujours. Chez
				l'association Pour l'Amour des Animaux nous sommes contre la discrimination animale et
				l'euthanasie. Pour tous nos protégés et ceux à venir, nous prônons des valeurs de
				compassion, de bienveillance, de respect et de générosité qui sont nos mots d'ordre en toute
				circonstance. Nous sélectionnons avec soins chaque famille d'accueil, selon des critères
				très précis, afin de permettre à chaque animal de se requinquer et de regagner confiance
				dans les meilleures conditions. Cela s'applique également dans le choix des futurs
				adoptants, car nous refusons de prendre le risque de faire vivre une mauvaise expérience à
				ces animaux qui ont déjà tant vécu... Notre exigence, notre détermination ainsi que notre
				amour des bêtes, nous permettent de mener chaque jour ce combat contre la maltraitance
				animale et d'avancer, pas à pas, à rendre meilleure la vie de ces petites boules de poils."
			</p>
		</div>
	</div>
</div>

<style>
	img {
		width: 30em;
	}

	p {
		font-size: 125%;
	}
	.earWrapper {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.text {
		text-align: center;
	}

	#logoWrapper {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#leftEar {
		grid-column: 2;
	}

	#rightEar {
		grid-column: 4;
	}

	#earWrapper {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}

	#wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5%;

		background-color: var(--secondary-color);
		height: 50vh;
	}

	#content-left {
		width: 50%;
	}
</style>
