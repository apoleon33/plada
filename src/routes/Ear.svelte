<script>
	import { fly } from 'svelte/transition';
	export let xIntro = -300;
	// export let width = 90;
	export let color = '--secondary-color';
</script>

<!--	style="		
	border-left: {width}px solid transparent;
	border-right: {width}px solid transparent;

	border-bottom: {width}px solid var({color});"-->

<svg viewBox="0 0 100 90" width="90" height="90" in:fly={{ x: xIntro, duration: 500 }} id="ear">
	<path
		d="M 20 120
			 L 60 40
			 Q 70 20 80 40
			 L 120 120    
			 Z"
		transform="translate(-20,-20)"
		stroke-width="0"
	/>
</svg>

<style>
	#ear {
		fill: var(--secondary-color);
	}
</style>
