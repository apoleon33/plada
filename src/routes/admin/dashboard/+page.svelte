<script>
	export let data;
	export let form;
</script>

{#if form?.success}
	<p>Successfully logged in!</p>
{:else}
	<p>wrong password!</p>
{/if}
