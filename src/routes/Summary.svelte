<script>
	import { fly, fade } from 'svelte/transition';
	import { page } from '$app/stores';

	import Home from '$lib/icons/Home.svelte';
	import Pets from '$lib/icons/Pets.svelte';
	import Help from '$lib/icons/Help.svelte';

	const mobileSize = 480;
	let size;
	let statutBouton = false;
	let expandButton = 0; // 0->none 1->l'association  2->adopter 3->aider
	$: {
		checkUrl();
		console.log($page.url.pathname);
	}

	const checkUrl = () => {
		let url = $page.url.pathname;
		//console.log(url);
		switch (url) {
			case '/':
				return 0;

			case '/association/contact':
				return 0;

			case '/association/archives':
				return 0;

			case '/comment-ca-marche':
				return 1;

			default:
				return 0;
		}
	};

	const resetValues = () => {
		statutBouton = false;
		expandButton = 0;
	};
</script>

<svelte:window bind:innerWidth={size} />
<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0"
/>
<div id="wrapper">
	{#if size > mobileSize}
		<div class="dropdown" class:actualLocation={checkUrl() == 0}>
			<span> <a href="/" class="text" id="selected">L'association </a></span>
			<div class="dropdown-content" id="dropdown-accueil">
				<a href="/" class=" first-element text option-menu "> Accueil </a>
				<a href="/association/contact" class="text option-menu"> Contact</a>
				<a href="/association/archives" class="text option-menu last-element"> Archives </a>
			</div>
		</div>
		<div class="dropdown" class:actualLocation={checkUrl() == 1}>
			<span> <a href="/" class="text">Adopter </a></span>
			<div class="dropdown-content" id="dropdown-adopter">
				<a href="/comment-ca-marche" class="text option-menu first-element"> Comment adopter</a>
				<a href="/animaux/chats" class="text option-menu"> Chats </a>
				<a href="/animaux/chiens" class="text option-menu"> Chiens</a>
				<a href="/animaux/autres" class="text option-menu last-element"> Autres </a>
			</div>
		</div>

		<div class="dropdown" class:actualLocation={checkUrl() == 2}>
			<span> <a href="/aider" class="text">Nous aider </a></span>
			<div class="dropdown-content" id="dropdown-help">
				<a href="/aider/don" class="text option-menu first-element"> Faire un don </a>
				<a href="/aider/famille-accueil" class="text option-menu last-element">
					Devenir famille d'accueil
				</a>
			</div>
		</div>
	{:else}
		{#if statutBouton}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				id="unclickable"
				on:click|self={() => {
					resetValues();
				}}
				in:fly
				out:fly={{ opacity: 1 }}
				data-sveltekit-reload
			>
				<div id="mobile-menu-wrapper" in:fly={{ x: -100 }} out:fly={{ x: -100 }}>
					<h3>Pour l'amour des animaux</h3>

					<div class="dropdown-container" class:actualLocation={checkUrl() == 0}>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="dropdown-title-container"
							on:click={() => {
								expandButton = expandButton !== 1 ? 1 : 0;
							}}
						>
							<div class="dropdown-icon"><Home width="24" height="24" /></div>
							<a href="/" class="text-title" id="selected">L'association </a>
						</div>

						<div
							class="dropdown-content-container"
							on:click={() => {
								expandButton = expandButton !== 1 ? 1 : 0;
							}}
						>
							<a href="/" class="text-container option-menu"> Accueil </a>
							<a href="/association/contact" class="text-container option-menu"> Contact</a>
							<a href="/association/archives" class="text-container option-menu last-element">
								Archives
							</a>
						</div>
					</div>

					<div class="divider" />

					<div class="dropdown-container" class:actualLocation={checkUrl() == 1}>
						<div
							class="dropdown-title-container"
							on:click={() => {
								expandButton = expandButton !== 2 ? 2 : 0;
							}}
						>
							<div class="dropdown-icon"><Pets width="24" height="24" /></div>
							<a href="/adopter" class="text-title">Adopter </a>
						</div>
						<div
							class="dropdown-content-container"
							on:click={() => {
								expandButton = expandButton !== 2 ? 2 : 0;
							}}
						>
							<a href="/comment-ca-marche" class="text-container option-menu">
								Comment ça marche ?
							</a>
							<a href="/animaux/chats" class="text-container option-menu"> Chats </a>
							<a href="/animaux/chiens" class="text-container option-menu"> Chiens</a>
							<a href="/animaux/autres" class="text-container option-menu last-element"> Autres </a>
						</div>
					</div>

					<div class="divider" />

					<div class="dropdown-container" class:actualLocation={checkUrl() == 2}>
						<div
							class="dropdown-title-container"
							on:click={() => {
								expandButton = expandButton !== 3 ? 3 : 0;
							}}
						>
							<div class="dropdown-icon"><Help width="24" height="24" /></div>
							<a href="/aider" class="text-title">Nous aider </a>
						</div>

						<div
							class="dropdown-content-container"
							on:click={() => {
								expandButton = expandButton !== 3 ? 3 : 0;
							}}
						>
							<a href="/aider/don" class="text-container option-menu"> Faire un don </a>
							<a href="/aider/famille-accueil" class="text-container option-menu last-element">
								Devenir famille d'accueil
							</a>
						</div>
					</div>
				</div>
			</div>
		{/if}
		<!-- svelte-ignore a11y-missing-attribute -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<img
			id="menu-icon"
			src="/menu_FILL0_wght400_GRAD0_opsz48.png"
			on:click={() => {
				statutBouton = !statutBouton;
				// console.log(statutBouton);
			}}
		/>
		<img id="logo" src="/logo.png" alt="association logo" />
	{/if}
</div>

<style>
	.actualLocation {
		transition: 600ms;
		background-color: var(--secondary-color);
	}

	@media screen and (max-width: 480px) {
		/* mobile version */
		#unclickable {
			position: fixed;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			z-index: 0;

			backdrop-filter: brightness(50%);
			transition: 400ms;
		}

		#mobile-menu-wrapper {
			width: 75vw;
			height: 100vh;

			position: absolute;
			top: 0;
			left: 0;

			display: flex;
			flex-direction: column;
			align-items: start;
			justify-content: start;
			gap: 10px;

			background-color: var(--secondary-level);
			border-radius: 0 24px 24px 0;
			transition: 600ms;
		}

		h3 {
			margin-left: 16px;
		}

		.divider {
			height: 1px;
			width: calc(100% - (16px * 2));
			background-color: var(--main-text-color);
			margin-left: 16px;
			/*padding-right: 12px;*/
		}

		.dropdown-container {
			margin-left: 12px;
			border-radius: 24px;
		}

		.dropdown-title-container {
			width: 70vw;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: start;
		}

		.dropdown-icon {
			padding-left: 16px;
		}

		.text-title {
			height: 56px;
			margin-left: 16px;

			display: flex;
			justify-content: center;
			align-items: center;

			color: var(--main-text-color);
			font-weight: bold;
			font-size: 125%;
		}

		.text-container {
			color: var(--secondary-text-color);
		}

		.dropdown-content-container {
			display: flex;
			flex-direction: column;
			align-items: start;
			justify-content: start;
			gap: 10px;

			padding-bottom: 10px;
		}

		.option-menu {
			/*border-top: 3px solid var(--third-color);*/
			margin-left: 70px;
		}

		#wrapper {
			border-bottom: 5px solid var(--secondary-color);

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}

		#menu-icon {
			padding-left: 10px;
		}

		#logo {
			width: 90px;
			height: 90px;

			padding-right: 10px;
		}

		a {
			all: unset;
		}
	}

	@media screen and (min-width: 480px) {
		span {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
		}

		a {
			text-decoration: none;
			color: unset;
		}

		#wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 1em;
			margin: 1em 0 1em 0;
			padding-bottom: 1em;

			grid-column: 3;
		}

		.text {
			font-size: 30px;
		}

		.dropdown {
			position: relative;
			display: inline-block;

			padding: 0.75em 1em 0.75em 1em;
			border-radius: 30px;

			min-width: 164px;
		}

		.dropdown:hover {
			backdrop-filter: brightness(90%);
		}

		.dropdown-content {
			display: none;
			position: absolute;
			background-color: var(--secondary-level);
			box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
			z-index: 1;
			left: 0px;

			border-radius: 24px 24px 24px 24px;
			width: 100%;
		}

		.dropdown-content a {
			color: black;

			padding: 12px;

			text-decoration: none;
			display: block;

			border-radius: 24px;
		}

		.dropdown-content a:hover {
			backdrop-filter: brightness(90%);
		}

		.dropdown:hover .dropdown-content {
			display: block;
		}

		.option-menu {
			padding-right: 30em;
			font-size: 20px;
		}

		.option-menu:hover {
			transition: 200ms;
			font-weight: bold;
		}

		.first-element {
			border-radius: 24px 24px 0 0;
		}

		.last-element {
			border-radius: 0 0 24px 24px;
		}

		#dropdown-accueil a {
			max-width: 204px;
		}

		#dropdown-help a {
			max-width: 170px;
		}

		#dropdown-adopter a {
			max-width: 300px;
		}

		#selected a {
			color: var(--secondary-text-color);
			font-weight: bold;
		}
	}
</style>
