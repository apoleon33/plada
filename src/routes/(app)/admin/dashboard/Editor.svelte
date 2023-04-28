<script>
	import Close from './Close.svelte';

	export let animalDatas = {
		name: '',
		naissance: 2023,
		sexe: 'Male',
		type: 'sans type',
		statut: 'non adopté',
		description: '',
		additionnalPhoto: []
	};
	export let editStatus;
	export let lien = 'https://pfps.gg/assets/pfps/9479-cat.png';
	export let specie = 'chats';
	export let redirectionLink = '/api/modify';

	let modifiedlist = animalDatas.additionnalPhoto;
	let needToReloadImages = false;
	let newlyAddedImages = [];
	let imageToRemove = [];

	const closeEdit = () => {
		editStatus = false;
	};

	const removeImage = (image) => {
		imageToRemove.push(image);
		const index = modifiedlist.indexOf(image);

		if (index > -1) {
			modifiedlist.splice(index, 1);
		}
	};
</script>

<div id="wrapper">
	<div id="content">
		<div id="closeWrapper"><button on:click={closeEdit}> <Close /></button></div>

		<form
			id="form"
			action={redirectionLink}
			method="POST"
			target="_blank"
			enctype="multipart/form-data"
		>
			<input type="hidden" name="originalName" value={animalDatas.name} />
			<input type="hidden" name="animalSpecie" value={specie} />
			<input type="hidden" name="animalId" value={animalDatas.id} />

			{#key needToReloadImages}
				{#each imageToRemove as image, i}
					<input type="hidden" name="imageToRemove{i}" value={image} />
				{/each}
				<input type="hidden" name="imageToRemoveLength" value={imageToRemove.length} />
			{/key}

			<div id="imageAndAdditionnalPhotoWrapper">
				<div id="imageWrapper">
					<img src={lien} alt={animalDatas.name} />
				</div>
				{#key needToReloadImages}
					<div id="additionnalPhotoWrapper">
						<h4>Additionnals photos:</h4>

						{#each modifiedlist as photo}
							<div id="photoWrapper">
								<p>{photo}</p>
								<button
									on:click={() => {
										needToReloadImages = !needToReloadImages;
										removeImage(photo);
									}}
								>
									supprimer
								</button>
							</div>
						{/each}
						{#each newlyAddedImages as image}
							<div id="photoWrapper">
								<p>{image}</p>
								<button
									on:click={() => {
										needToReloadImages = !needToReloadImages;
									}}
								>
									supprimer
								</button>
							</div>
						{/each}
					</div>
				{/key}
			</div>

			<label for="icon">changer l'image principale de l'animal</label>
			<input type="file" id="icon" name="icon" accept="image/png, image/jpeg" />

			<label for="additionnalPhotos">Ajouter des images auxiliaires</label>
			<input
				type="file"
				id="additionnalPhotos"
				name="additionnalPhotos"
				accept="image/png, image/jpeg"
				multiple
			/>

			<div id="nomWrapper" class="propertyWrapper">
				<label for="nom">Nom</label>
				<input type="text" value={animalDatas.name} id="nom" name="nom" />
			</div>

			<div id="otherPropertiesGrid">
				<div id="naissanceWrapper" class="propertyWrapper">
					<label for="naissance">Naissance</label>
					<input
						type="number"
						min="2000"
						max="2023"
						step="1"
						value={animalDatas.naissance}
						name="naissance"
					/>
				</div>

				<div id="sexeWrapper" class="propertyWrapper">
					<label for="sexe">Sexe</label>
					<select name="sexe" id="sexe">
						<option value="Male" selected={animalDatas.sexe === 'Male'}>Male</option>
						<option value="Femelle" selected={animalDatas.sexe === 'Femelle'}>Femelle</option>
					</select>
				</div>

				<div id="typeWrapper" class="propertyWrapper">
					<label for="type">Type</label>
					<input type="text" id="type" value={animalDatas.type} name="type" />
				</div>

				<div id="statutWrapper" class="propertyWrapper">
					<label for="statut">Statut</label>
					<select name="statut" id="statut">
						<option value="non adopté" selected={animalDatas.statut === 'non adopté'}
							>Non Adopté(e)</option
						>
						<option value="adopté" selected={animalDatas.statut === 'adopté'}>Adopté(e)</option>
					</select>
				</div>
			</div>

			<div id="descriptionWrapper" class="propertyWrapper">
				<label for="description">Description</label>
				<textarea
					type="text"
					id="description"
					value={animalDatas.description}
					name="description"
					rows="6"
					cols="50"
				/>
			</div>
			<div id="passwordWrapper" class="propertyWrapper">
				<label for="password">Mot de passe</label>
				<input type="password" name="password" id="password" />
			</div>
			<div id="submitWrapper">
				<input type="submit" value="Submit" id="submit" />
			</div>
		</form>
	</div>
</div>

<style>
	button {
		all: unset;
		padding: 5px;
		border-radius: 5px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		appearance: textfield;
	}

	input,
	select {
		all: unset;
		border-bottom: 1px solid var(--secondary-text-color);
		padding: 5px;
	}

	input:focus,
	select:focus {
		border: 1px solid var(--secondary-text-color);
		border-radius: 5px;
		transition: 600ms;
	}

	select {
		appearance: button;
	}

	select::marker {
		display: block;
	}

	img {
		max-width: 15vw;
		max-height: 15vw;
		object-fit: cover;
		border-radius: 10px;
	}

	textarea {
		border-radius: 5px;
		background-color: var(--secondary-color);
		border: 1px solid var(--main-text-color);
	}

	.propertyWrapper {
		display: flex;
		flex-direction: column;
	}

	#imageAndAdditionnalPhotoWrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
	}

	#photoWrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		gap: 1em;
	}

	#wrapper {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 0;

		backdrop-filter: blur(10px);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	#content {
		background-color: var(--secondary-color);
		color: var(--main-text-color);
		padding: 1em;
		border-radius: 10px;
	}

	#closeWrapper {
		display: flex;
		flex-direction: row;
		justify-content: end;
		align-items: center;
	}

	#otherPropertiesGrid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
	}

	#submitWrapper {
		padding: 10px;
	}

	#submit {
		border: 1px solid var(--secondary-text-color);
		border-radius: 5px;
	}

	#submit:hover,
	button:hover {
		cursor: pointer;
		color: var(--bg-color);
		background-color: var(--secondary-text-color);
		transition: 200ms;
	}
</style>
