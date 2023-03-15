<script>
	export let criteria = {
		sexe: [true, true],
		naissance: [0, 0],
		type: ''
	};
</script>

<div id="wrapper">
	<h3>Filtrer par:</h3>
	<div>
		<h4>Sexe</h4>
		<label for="male">Male</label>
		<input type="checkbox" id="male" bind:checked={criteria.sexe[0]} />

		<label for="female"> Femelle</label>
		<input type="checkbox" id="female" bind:checked={criteria.sexe[1]} />
	</div>

	<div>
		<h4>Date de naissance</h4>
		<label for="naissance">Année</label>
		<div>
			<input
				type="range"
				id="naissance"
				name="vol"
				min="2010"
				max="2022"
				oninput="range.min=value"
			/>
			<input type="range" value="50" min="2010" max="2022" id="range" oninput="vol.max=value" />
			<input type="number" id="rangevalue" value="50" oninput="range.value=value" />
		</div>
	</div>
</div>

<style>
</style>
