<script>
	import Checkbox from '$lib/Checkbox.svelte';
	import Slider from '$lib/Slider.svelte';

	export let criteria = {
		sexe: [true, true],
		naissance: [0, 0],
		type: ''
	};

	const map = (x, in_min, in_max, out_min, out_max) => {
		/* stolent from arduino*/
		let result = ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
		return Math.round(result);
	};

	const startDate = 2010;
	const endDate = 2023;

	let start = 0;
	let end = 1;
	let convertedStart, convertedEnd;

	$: {
		convertedStart = map(start, 0, 1, startDate, endDate);
		convertedEnd = map(end, 0, 1, startDate, endDate);
		criteria.naissance = [convertedStart, convertedEnd];
	}
</script>

<div id="wrapper">
	<h3>Filtrer par:</h3>
	<div>
		<h4 id="sexeLabel">Sexe</h4>
		<Checkbox bind:checked={criteria.sexe[0]} label="Male" />

		<Checkbox bind:checked={criteria.sexe[1]} label="Femelle" />
	</div>

	<div>
		<h4>Date de naissance</h4>
		<div id="sliderLabelWrapper">
			<h5>{convertedStart}</h5>
			<div id="sliderWrapper"><Slider bind:start bind:end /></div>
			<h5>{convertedEnd}</h5>
		</div>
	</div>
</div>

<style>
	h3 {
		margin-bottom: 10px;
		margin-top: 10px;
	}

	h4 {
		margin-bottom: 0px;
		margin-top: 20px;
	}

	h5 {
		margin-bottom: 10px;
		margin-top: 10px;
	}

	#wrapper {
		padding: 1em;
		height: fit-content;
		max-width: 12vw;
		border: 2.5px solid var(--secondary-color);
		border-radius: 10px;
	}

	#sliderLabelWrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 15px;
		max-width: 25vh;
	}

	#sliderWrapper {
		width: 150px;
	}

	#sexeLabel {
		margin: 0;
	}
</style>
