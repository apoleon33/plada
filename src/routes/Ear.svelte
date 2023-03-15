<script>
	import { fly } from 'svelte/transition';
	export let xIntro = -300;
	export let width = 10;
	export let color = '--secondary-color';
</script>

<div
	id="ear"
	in:fly={{ x: xIntro, duration: 500 }}
	style="		
	border-left: {width}vh solid transparent;
	border-right: {width}vh solid transparent;

	border-bottom: {width}vh solid var({color});"
/>

<style>
	#ear {
		width: 0;
		height: 0;
	}
</style>
