<script>
	import Animal from './Animal.svelte';
	import Editor from './Editor.svelte';

	export let data;
	export let form;

	const chats = data.db.chats;
	const chiens = data.db.chiens;
	const autres = data.db.autres;

	const listImageChats = data.imageChats;
	const listImageChiens = data.imageChiens;
	const listeImageAutres = data.imageAutres;

	let editStatus = false;
	let specie = 'chats';
	const showEditStatus = () => {
		editStatus = true;
	};

	$: {
		specie;
	}
</script>

{#if form?.success}
	<div id="wrapper">
		<div class="animalAndTitleWrapper">
			<h1>Chats:</h1>
			<div class="animalWrapper">
				{#each chats as chat, i}
					<Animal datas={chat} lien={listImageChats[i]} specie="chats" />
				{/each}
				<button
					on:click={() => {
						showEditStatus('chats');
					}}>Ajouter un nouveau chat</button
				>
			</div>
		</div>
		<div class="animalAndTitleWrapper">
			<h1>chiens:</h1>
			<div class="animalWrapper">
				{#each chiens as chien, y}
					<Animal datas={chien} lien={listImageChiens[y]} specie="chiens" />
				{/each}
				<button
					on:click={() => {
						showEditStatus();
						specie = 'chiens';
					}}>Ajouter un nouveau chien</button
				>
			</div>
		</div>
		<div class="animalAndTitleWrapper">
			<h1>Autres animaux:</h1>
			<div class="animalWrapper">
				{#each autres as autre, z}
					<Animal datas={autre} lien={listeImageAutres[z]} specie="autres" } />
				{/each}
				<button
					on:click={() => {
						showEditStatus();
						specie = 'autres';
					}}>Ajouter un nouvel animal</button
				>
			</div>
		</div>
	</div>
	{#if editStatus}
		<Editor bind:editStatus bind:specie redirectionLink="/api/add" />
	{/if}
{:else}
	<p>wrong password!, <a href="/admin">retry</a></p>
{/if}

<style>
	.animalAndTitleWrapper {
		display: flex;
		flex-direction: column;
		gap: 1em;
		border-bottom: 3px var(--secondary-color) solid;
		padding-bottom: 1em;
	}

	.animalWrapper {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 1em;
	}

	#wrapper {
		margin: 1em;
	}
</style>
