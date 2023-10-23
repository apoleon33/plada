<script>
	import { fly, fade } from 'svelte/transition';
	import { page } from '$app/stores';

	import Home from '$lib/icons/Home.svelte';
	import Pets from '$lib/icons/Pets.svelte';
	import Help from '$lib/icons/Help.svelte';

	import logo from '$lib/logo.svg';

	const mobileSize = 480;
	let size;
	export let statutBouton = false;
	$: {
		checkUrl();
		console.log($page.url.pathname);
	}

	const checkUrl = () => {
		let url = $page.url.pathname;
		let urlArgs = url.split('/');
		let subDomain = urlArgs[1];
		console.log(`subDomain: ${subDomain}`);
		//console.log(url);
		switch (subDomain) {
			case '':
				return 0;

			case 'association':
				return 0;

			case 'adopter':
				return 1;

			case 'comment-ca-marche':
				return 1;

			case 'animaux':
				return 1;

			case 'aider':
				return 2;

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
	<a href="/"> <img id="logo" src={logo} alt="association logo" /></a>

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
</div>

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

			<div class="dropdown" class:actualLocation={checkUrl() == 0}>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span>
					<div class="dropdown-icon"><Home width="24" height="24" /></div>
					<a href="/" class="text-title" id="selected">L'association </a>
				</span>

				<div class="dropdown-content">
					<a href="/" class="text-container option-menu"> Accueil </a>
					<a href="/association/contact" class="text-container option-menu"> Contact</a>
					<a href="/association/archives" class="text-container option-menu last-element">
						Archives
					</a>
				</div>
			</div>

			<div class="divider" />

			<div class="dropdown" class:actualLocation={checkUrl() == 1}>
				<span>
					<div class="dropdown-icon"><Pets width="24" height="24" /></div>
					<a href="/adopter" class="text-title">Adopter </a>
				</span>
				<div class="dropdown-content">
					<a href="/comment-ca-marche" class="text-container option-menu"> Comment ça marche ? </a>
					<a href="/animaux/chats" class="text-container option-menu"> Chats </a>
					<a href="/animaux/chiens" class="text-container option-menu"> Chiens</a>
					<a href="/animaux/autres" class="text-container option-menu last-element"> Autres </a>
				</div>
			</div>

			<div class="divider" />

			<div class="dropdown" class:actualLocation={checkUrl() == 2}>
				<span class="dropdown-title-container">
					<div class="dropdown-icon"><Help width="24" height="24" /></div>
					<a href="/aider" class="text-title">Nous aider </a>
				</span>

				<div class="dropdown-content">
					<a href="/aider/don" class="text-container option-menu"> Faire un don </a>
					<a href="/aider/famille-accueil" class="text-container option-menu last-element">
						Devenir famille d'accueil
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	:root {
		color-scheme: light;
	}

	.actualLocation {
		transition: 600ms;
		background-color: var(--md-sys-color-secondary-container);
		transition: 600ms;
	}

	span {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
	}

	#wrapper {
		position: sticky;
		top: 0;
		left: 0;
		z-index: 1;

		display: flex;
		flex-direction: row;
		align-items: center;

		justify-content: space-between;

		background-color: #fff8f880;
		backdrop-filter: blur(30px);
	}

	#unclickable {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 1;

		backdrop-filter: brightness(50%);
		transition: 400ms;
	}

	#mobile-menu-wrapper {
		color-scheme: light;
		height: 100vh;

		position: absolute;
		top: 0;
		left: 0;

		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		gap: 10px;

		background-color: var(--md-sys-color-surface);
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

	.dropdown {
		margin-left: 12px;
		border-radius: 24px;
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

	.dropdown-content {
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

	#menu-icon {
		padding-left: 10px;
	}

	#menu-icon:hover {
		cursor: pointer;
	}

	#logo {
		max-width: 70vw;

		padding: 10px 10px 10px 0px;
	}

	a {
		all: unset;

		border-radius: 24px;
	}

	@media screen and (max-width: 480px) {
		/* mobile version */
		#mobile-menu-wrapper {
			width: 75vw;
		}

		span {
			width: 70vw;
		}
	}

	@media screen and (min-width: 480px) {
		/* desktop version */
		#mobile-menu-wrapper {
			width: 25vw;
		}

		span {
			width: 23vw;
		}

		#menu-icon {
			padding-right: 10px;
		}

		a:hover {
			cursor: pointer;
			text-decoration: underline;
		}
	}
</style>
