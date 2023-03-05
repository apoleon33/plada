<script>
	export let animal = 'chats';
	export let idAnimal = 0;
	export let listOtherAnimals;
	export let bigImage = 0;
	export let listImages = [];

	const isStillToAdopt = (element) => {
		return element.statut === 'non adopté';
	};

	const randomInt = (min, max) => {
		let rand = Math.floor(Math.random() * (max - min)) + min;
		//
		return notInList(alreadyUsedNumber, rand) &&
			rand !== idAnimal &&
			isStillToAdopt(listAnimals[rand])
			? rand
			: randomInt(min, max);
	};

	const notInList = (list, number) => {
		for (let i = 0; i < list.length; i++) {
			if (number === list[i]) {
				return false;
			}
		}
		return true;
	};

	let listAnimals, randomNumber;
	let alreadyUsedNumber = [];
	let listRandomNumbers = [];

	listAnimals = listOtherAnimals;

	for (let i = 0; i < 4 && i < listAnimals.length - 1; i++) {
		randomNumber = randomInt(0, listAnimals.length);

		listRandomNumbers.push(randomNumber);
		alreadyUsedNumber.push(randomNumber);
	}
</script>

<div id="wrapper">
	<div id="imgWrapper">
		{#each listRandomNumbers as id}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="centering"
				on:click={() => {
					bigImage = 0;
				}}
			>
				<a href="/animaux/{animal}/{listAnimals[id].id}">
					<img alt="une recommendation d'autre chat" src={listAnimals[id].link} class="image" />
				</a>
				<a href="/animaux/{animal}/{listAnimals[id].id}">
					<h3>{listAnimals[id].name}</h3>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	a {
		text-decoration: none;
		color: unset;
	}

	.image {
		object-fit: cover;
		height: 30vh;
		width: 30vh;
		border-radius: 100%;
	}

	.centering {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	#wrapper {
		justify-content: left;
		padding-top: 3em;
		margin: 0;
		left: 0px;
	}

	#imgWrapper {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		padding: 0.5em;

		width: 99vw;
		background-color: var(--secondary-color);
	}
</style>
