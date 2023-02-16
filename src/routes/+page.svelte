<div id="wrapper">
	<div id="content-left">
		<div id="notre-association">
			<h1>Notre association</h1>
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

	<div id="content-right">
		<div id="portfolio">
			<img alt="première du portfolio" id="first-image" src="https://picsum.photos/300/" />
			<img alt="seconde du portfolio" id="second-image" src="https://picsum.photos/400/300" />
			<img alt="troisième du portfolio" id="third-image" src="https://picsum.photos/300/" />
		</div>
	</div>

	<div id="equipe">
		<h1>L'équipe</h1>
		<li>A</li>
		<li>B</li>
		<li>C</li>
	</div>
</div>

<style>
	.text {
		font-size: 150%;
		text-align: justify;
	}

	#wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5%;
	}

	#content-left {
		width: 50%;
	}

	#content-right {
		width: 40%;
	}

	#portfolio {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 5%;
		padding: 1em 0 1em 0;
	}

	#first-image {
		grid-column: 1;
		grid-row: 1;
	}

	#second-image {
		grid-column: 2;
		grid-row: 2;
	}

	#third-image {
		grid-column: 1;
		grid-row: 3;
	}
</style>
