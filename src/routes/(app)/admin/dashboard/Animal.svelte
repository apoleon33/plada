<script>
	import Edit from '$lib/icons/Edit.svelte';
	import Editor from './Editor.svelte';

	export let datas;
	export let lien;
	export let specie = 'chats';

	const name = datas.name;
	let link = lien;
	const naissance = datas.naissance;
	const sexe = datas.sexe;
	const statut = datas.statut;
	const type = datas.type;

	let deleteStatut = false;

	let editStatus = false;
	const showEditStatus = () => {
		editStatus = true;
	};

	const showName = (name) => {
		if (name.length < 18) {
			return name;
		} else {
			return name.slice(0, 15) + '...';
		}
	};

	const changeDeleteStatut = () => {
		deleteStatut = !deleteStatut;
	};
</script>

<div id="wrapper">
	<img id="mainImage" src={link} alt={name} />
	<h2>{showName(name)}</h2>
	<div id="statusEdit">
		<div id="status" class:notAdopted={statut === 'non adopté'} class:adopted={statut === 'adopté'}>
			<div
				id="bubble"
				class:notAdoptedBubble={statut === 'non adopté'}
				class:adoptedBubble={statut === 'adopté'}
			/>
			<h3 id="statut">{statut}</h3>
		</div>
		<button id="editWrapper" on:click={showEditStatus}><Edit /></button>
		<button on:click={changeDeleteStatut}>
			{#if deleteStatut} annuler {:else} supprimer {/if}
		</button>

		{#if deleteStatut}
			<form
				id="form"
				action="/api/remove"
				method="POST"
				target="_blank"
				enctype="multipart/form-data"
			>
				<input type="hidden" name="animalId" value={datas.id} />
				<input type="hidden" name="specie" value={specie} />
				<input type="submit" value="delete" id="submit" />
			</form>
		{/if}
	</div>
</div>

{#if editStatus}
	<Editor animalDatas={datas} bind:editStatus bind:lien={link} bind:specie />
{/if}

<style>
	h2 {
		margin: 0;
	}
	h3 {
		margin: 0;
	}
	.notAdopted {
		background-color: #6e6c7f;
		color: #e2e2e6;
	}

	.notAdoptedBubble {
		background-color: #9b9b9b;
	}

	.adopted {
		background-color: #7bb592;
	}

	.adoptedBubble {
		background-color: #2c976d;
	}

	#wrapper {
		all: unset;
		background-color: var(--secondary-color);
		padding: 0.25em;
		border-radius: 10px;
	}

	#mainImage {
		width: 10vw;
		height: 10vw;
		object-fit: cover;

		border-radius: 10px;
	}

	#status {
		border-radius: 25px;
		padding: 5px 10px 5px 10px;
		margin: 0 6px 6px 0;
		max-width: fit-content;

		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
	}

	#bubble {
		width: 10px;
		height: 10px;
		border-radius: 100%;
	}

	#statut {
		margin: 0;
	}

	#statusEdit {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		/*padding: 10px 0px 10px 0px;*/
	}

	#editWrapper:hover {
		cursor: pointer;
	}
</style>
