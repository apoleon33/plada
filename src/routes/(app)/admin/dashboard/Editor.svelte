<script>
	import Close from './Close.svelte';

	export let animalDatas;
	export let editStatus;
	export let lien;
	export let specie = 'chats';

	const closeEdit = () => {
		editStatus = false;
	};
</script>

<div id="wrapper">
	<div id="content">
		<div id="closeWrapper"><button on:click={closeEdit}> <Close /></button></div>

		<form id="form" action="/api/modify" method="POST" target="_blank">
			<input type="hidden" name="originalName" value={animalDatas.name} />
			<input type="hidden" name="animalSpecie" value={specie} />
			<div id="imageWrapper">
				<img src={lien} alt={animalDatas.name} />
			</div>
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
