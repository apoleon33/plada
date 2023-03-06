<script>
	export let form;
</script>

{#if form?.success}
	<h1>the animal name is {form.animalName} d'espèce {form.specie}</h1>
{:else}
	:(
{/if}
