<script>
	import Square from './Square.svelte';

	import home from '$lib/home.svg';
	import chat from '$lib/chat.svg';
	import collecte from '$lib/collecte.svg';
	import prevention from '$lib/prevention.svg';
	import Wave from '$lib/Wave.svg';

	let screenSize;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div class="Stats">
	<div id="separator" />
	<div id="our-mission">
		<h2 class:display-large={screenSize > 480} class:headline-large={screenSize < 480}>
			Notre mission:
		</h2>
		<p class:display-large={screenSize > 480} class:headline-large={screenSize < 480}>
			Créer un monde où chats et chiens vivants sont traitées avec respect, compassion et dignité.
		</p>
	</div>
	<div id="activity-cat">
		<div id="sqq">
			<div id="square-wrapper">
				<div class="square first-element">
					<Square titre="Maison d'accueil" source={home} bind:screenSize />
				</div>
				<div class="square second-element">
					<Square titre="Collecte de nourriture" source={collecte} bind:screenSize />
				</div>
				<div class="square third-element">
					<Square titre="Prévention" source={prevention} bind:screenSize />
				</div>
			</div>
		</div>

		<div id="imgg"><img src={chat} alt="illustration d'un chat" /></div>
	</div>
</div>
<img id="wave" src={Wave} alt="une vague rose pour transitionner" />

<style>
	#separator {
		width: 100vw;
		height: 10vh;

		background-color: var(--md-sys-color-surface-variant);
	}

	.Stats {
		width: 100vw;

		background-color: var(--md-sys-color-surface-variant);
	}

	#our-mission {
		background-color: var(--md-sys-color-on-surface-variant);
		color: var(--md-sys-color-on-primary);

		border-radius: 24px;

		margin-left: 5vw;
		margin-right: 5vw;
		padding: 1em;
	}

	#our-mission h2 {
		margin-top: 0;
	}

	#activity-cat {
		display: grid;

		max-width: 100vw;
	}

	@media screen and (max-width: 480px) {
		/* mobile version */
		#our-mission {
			max-width: 98vw;
			max-height: auto;
		}

		#our-mission h2,
		p {
			margin-top: 0;
			margin-bottom: 0;
		}

		#activity-cat {
			grid-template-rows: repeat(2, 1fr);
			grid-auto-flow: column;
		}

		#activity-cat #imgg {
			grid-row: 2;
			grid-column: 1;

			width: 100vw;
		}

		#square-wrapper {
			grid-column: 1;
			grid-row: 1;

			margin: 0 5vw 0 5vw;

			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(1, 1fr);
		}

		.square {
			padding: 10px;
		}

		.first-element {
			grid-column: 1;
			grid-row: 1;

			padding-left: 0;
		}

		.second-element {
			grid-column: 2;
			grid-row: 1 / 3;

			padding-right: 0;
		}

		.third-element {
			grid-column: 1;
			grid-row: 2 / 3;

			padding-left: 0;
		}

		#sqq {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: end;
		}

		img {
			width: 100vw;
		}
	}

	@media screen and (min-width: 480px) {
		/* desktop version */
		#our-mission {
			max-width: 35vw;
			max-height: calc(35vw / 1.61); /* golden ratio*/
		}

		#activity-cat {
			grid-template-columns: repeat(3, 1fr);
			grid-auto-flow: row;
		}

		#activity-cat #imgg {
			grid-column: 2 / 4;
		}

		#square-wrapper {
			grid-column: 1 / 3;
			grid-row: 1;

			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 80px;

			margin-left: 5vw;
		}

		#imgg,
		#sqq {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: end;
		}
	}
</style>
