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

	console.log(sexe);

	const today = new Date();
	const year = today.getFullYear();
	let age = year - dateDeNaissance;

	let sentence = age + ' ans,';
	let hoverStatus = false;

	const handleOnMouseOver = () => {
		hoverStatus = true;
	};
	const handleOnMouseOut = () => {
		hoverStatus = false;
	};
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
	id="wrapper"
	in:fly={{ y: 300, duration: 500 }}
	out:fly={{ y: 300, duration: 200 }}
	on:mouseover={handleOnMouseOver}
	on:mouseout={handleOnMouseOut}
>
	<a href={onclic}><img alt="un chat" src={lien} /></a>
	<div class="container" id="informationWrapper">
		<div class="content"><h1 id="name" class="text">{name}</h1></div>

		<div class="dummy" class:hovered={hoverStatus}>
			{#if hoverStatus}
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
			{/if}
		</div>
	</div>
</div>

<style>
	img {
		object-fit: cover;
		width: 500px;
		height: 333px;
		border-radius: 15px 15px 0 0;
	}

	a {
		margin: 0;
	}

	.container {
		display: flex;
		justify-content: center;
	}

	.content {
		flex: 1;
		max-width: fit-content;
	}

	.dummy {
		flex: 0;
		transition: flex 600ms;

		display: flex;
		flex-direction: row;
		justify-content: end;
	}

	.hovered {
		flex: auto;
	}

	.text {
		/*margin: 0%;*/
		margin: 0px 15px 0px 15px;
		text-align: center;
		white-space: nowrap;
	}

	#name {
		display: flex;
		justify-content: center;
		text-rendering: geometricPrecision;
	}

	#informationWrapper {
		border-radius: 0 0 15px 15px;
		background-color: var(--secondary-color);
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
</style>
