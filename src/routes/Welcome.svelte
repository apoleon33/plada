<div id="firstPage">
	<div id="medaillonWrapper" class="wrapper">
		<a id="medaillon" alt="Molly" href="/">
			<h1 id="image-description" class="headline-small">Molly, 4 ans</h1>
		</a>

		<div id="titre">
			<h1 class="first-element"><bold>Pour l'amour </bold></h1>
			<h1 class="second-element"><bold>des </bold></h1>
			<h1 class="last-element">Animaux</h1>
		</div>
	</div>
	<div class="wrapper" id="content-firstPage">
		<p class="display">
			Notre petite association loi 1901 basée en Gironde (33) prend en charge chats et chiens en
			danger.
		</p>
		<a href="/association/contact" id="en-savoir-plus" class="display"> En savoir plus </a>
	</div>
</div>

<style>
	a {
		color: inherit;
	}

	a:hover {
		cursor: pointer;
	}

	#firstPage {
		background-color: var(--md-sys-color-background);

		background-image: url('/blob.svg');
		background-repeat: no-repeat;
		background-position: center top;
	}

	#medaillon {
		background-color: none;

		background-image: url('/medaillon.png');
		background-repeat: no-repeat;
		background-position: center top;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: end;
	}

	#image-description {
		color: white;
		padding-bottom: 10px;
	}

	#titre {
		display: flex;
	}

	.display {
		margin: 0;

		font-family: 'lato';
		color: black;

		grid-column: 3 / 6;
	}

	#en-savoir-plus {
		font-family: 'Lato';
		text-align: center;
		background-color: var(--md-sys-color-surface-container-low);
		color: var(--md-sys-color-primary);

		border-radius: 24px;
		margin-top: 15px;

		filter: drop-shadow(0px 4px 10px #00000025);
		z-index: 0;
	}

	@media screen and (min-width: 480px) {
		/* desktop version */
		#firstPage {
			--width: 100vw;
			--height-blob: 150vh;

			background-size: 75vw var(--height-blob);

			width: var(--width);
			height: var(--height-blob);
		}

		.wrapper {
			display: grid;
			grid-template-columns: repeat(8, 1fr);
		}

		#medaillon {
			--size-medaillon: 25vw;
			grid-column: 6;

			background-size: var(--size-medaillon) var(--size-medaillon);

			width: var(--size-medaillon);
			height: var(--size-medaillon);
		}

		#titre {
			grid-column: 3 / 6;
			grid-row: 1;

			flex-direction: column;
			align-items: start;
			justify-content: start;

			padding-left: 9em;
		}

		#titre h1 {
			font-size: 7.5vh;
			color: var(--md-sys-color-on-primary-container);
			font-family: 'Roboto';
		}

		#titre .first-element {
			padding-top: 5.5em;
		}

		#image-description {
			grid-column: 6;
		}

		h1 {
			margin: 0;
		}

		.display {
			/* display-small */
			font-family: 'Lato';
			font-style: var(--md-sys-typescale-display-small-font-family-style);
			font-weight: var(--md-sys-typescale-display-small-font-weight);
			font-size: var(--md-sys-typescale-display-small-font-size);
			letter-spacing: var(--md-sys-typescale-display-small-tracking);
			line-height: var(--md-sys-typescale-display-small-height);
			text-transform: var(--md-sys-typescale-display-small-text-transform);
			text-decoration: var(--md-sys-typescale-display-small-text-decoration);

			padding-left: 2em;
		}

		#en-savoir-plus {
			grid-column: 3 / 5;
			grid-row: 2;

			margin-left: 2em;
		}
	}

	@media screen and (max-width: 480px) {
		/* mobile version */
		#firstPage {
			--width-: 100vw;
			--height-blob: 100vh;

			background-size: 175vw var(--height-blob);

			width: var(--width);
			height: var(--height-blob);
		}

		#medaillonWrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		#medaillon {
			--size-medaillon: 66vw;
			background-size: var(--size-medaillon) var(--size-medaillon);

			width: var(--size-medaillon);
			height: var(--size-medaillon);

			margin-top: 5vh;
		}

		#titre {
			align-items: center;
			justify-content: start;
			gap: 2vw;

			max-width: 98vw;
		}

		.display {
			/* headline-small */
			font-family: 'Lato';
			font-style: var(--md-sys-typescale-headline-small-font-family-style);
			font-weight: var(--md-sys-typescale-headline-small-font-weight);
			font-size: var(--md-sys-typescale-headline-small-font-size);
			letter-spacing: var(--md-sys-typescale-headline-small-tracking);
			line-height: var(--md-sys-typescale-headline-small-height);
			text-transform: var(--md-sys-typescale-headline-small-text-transform);
			text-decoration: var(--md-sys-typescale-headline-small-text-decoration);

			text-align: center;
		}

		#content-firstPage {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		#en-savoir-plus {
			/*margin-left: calc(50vw - (143px / 2));*/
			padding: 5px 15px 5px 15px;
		}
	}
</style>
