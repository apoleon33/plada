<script>
	export let checked = false;
	export let label;
</script>

<label for="checkbox">{label}</label>
<input type="checkbox" id="checkbox" bind:checked />

<style>
	label {
		margin-bottom: 10px;
		margin-top: 10px;
	}
	#checkbox {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		vertical-align: middle;
		border: 1px solid black;
		appearance: none;
		-webkit-appearance: none;
		outline: none;
		cursor: pointer;
	}

	#checkbox:checked {
		appearance: auto;
		clip-path: circle(50% at 50% 50%);
	}
</style>
