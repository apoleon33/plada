<script>
	import Checkbox from '$lib/Checkbox.svelte';
	import Slider from '$lib/Slider.svelte';
	import { bind } from 'svelte/internal';

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
		<h4>Sexe</h4>
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
	#wrapper {
		padding: 1em;
	}

	#sliderLabelWrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		max-width: 25vh;
	}

	#sliderWrapper {
		width: 150px;
	}
</style>
