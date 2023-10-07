<script>
	import { fly } from 'svelte/transition';
	import Female from '$lib/icons/Female.svelte';
	import Male from '$lib/icons/Male.svelte';

	export let name = '';
	export let lien =
		'https://www.zooplus.fr/magazine/wp-content/uploads/2019/06/comprendre-le-langage-des-chats.jpg';
	export let onclic = '/';
	export let sexe = 'Male';
	export let dateDeNaissance = 2016;

	const today = new Date();
	const year = today.getFullYear();
	let age = year - dateDeNaissance;

	let sentence = age + ' an';
	sentence += age === 1 ? '' : 's';
	sentence += ',';
</script>

<div id="wrapper" in:fly={{ y: 300, duration: 500 }} out:fly={{ y: 300, duration: 200 }}>
	<div class="for-the-color">
		<a href={onclic}>
			<div id="imgWrapper">
				<img alt={name} src={lien} />
			</div>
		</a>
		<a href={onclic}>
			<div class="container" id="informationWrapper">
				<div class="content"><h1 id="name" class="text">{name}</h1></div>

				<div class="dummy">
					<h2
						id="sexe"
						class="text"
						in:fly={{ x: -100, duration: 200 }}
						out:fly={{ x: -100, duration: 200 }}
					>
						{sentence}
						{#if sexe === 'Femelle'}
							<Female />
						{:else}
							<Male />
						{/if}
					</h2>
				</div>
			</div>
		</a>
	</div>
</div>

<style>
	:root {
		--card-size-mobile: 95vw;
	}

	img {
		width: 500px;
		height: 333px;
		border-radius: 24px;
		object-fit: cover;
		overflow: hidden;
		transform-origin: center center;
	}

	img:hover {
		transition: 0.2s ease;
		width: 525px;
		height: 350px;
	}

	a {
		margin: 0;
		all: unset;
	}

	a:hover {
		cursor: pointer;
		/* drop-shadow(offset-x offset-y blur-radius color) */
		filter: drop-shadow(0px -5px 3px rgba(0, 0, 0, 0.128));
		transition: filter 0.15s ease;
	}

	.text {
		/*margin: 0%;*/
		margin: 0px 15px 0px 15px;
		text-align: center;
		white-space: nowrap;
	}

	#imgWrapper {
		width: 500px;
		height: 333px;
		object-fit: cover;
		overflow: hidden;
		border-radius: 15px 15px 0 0;
	}

	#name {
		display: flex;
		justify-content: center;
		text-rendering: geometricPrecision;
	}

	#informationWrapper {
		width: 500px;
		transition: 600ms;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	#wrapper {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
	}

	.for-the-color {
		background-color: var(--secondary-color);
		border-radius: 24px;
	}

	@media screen and (max-width: 480px) {
		/* mobile version */
		#imgWrapper {
			width: var(--card-size-mobile);
		}
		img {
			width: var(--card-size-mobile);
		}

		#informationWrapper {
			width: var(--card-size-mobile);
		}
	}
</style>
