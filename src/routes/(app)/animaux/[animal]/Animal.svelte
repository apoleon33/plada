<script>
	import { fly } from 'svelte/transition';
	export let name = '';
	export let lien =
		'https://www.zooplus.fr/magazine/wp-content/uploads/2019/06/comprendre-le-langage-des-chats.jpg';
	export let onclic = '/';
</script>

<div id="wrapper" in:fly={{ y: 300, duration: 500 }} out:fly={{ y: 300, duration: 200 }}>
	<a href={onclic}><img alt="un chat" src={lien} /></a>
	<h1>{name}</h1>
</div>

<style>
	img {
		object-fit: cover;
		width: 500px;
		height: 333px;
		border-radius: 10px 10px 0 0;
	}

	a {
		margin: 0;
	}

	h1 {
		background-color: var(--secondary-color);
		width: 500px;
		margin: 0%;
		text-align: center;

		border-radius: 0 0 10px 10px;
	}

	#wrapper {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
	}
</style>
