<script>
	export let source;
	export let titre;
	export let screenSize;

	let hoveredStatus = false;
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
	on:mouseover|preventDefault={() => {
		hoveredStatus = true;
	}}
	on:mouseleave|preventDefault={() => {
		hoveredStatus = false;
	}}
	class:rotate={hoveredStatus}
>
	<img src={source} alt="icone illustrative pour {titre}" />
	<h2 class:display-small={screenSize > 480}>{titre}</h2>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		background-color: var(--md-sys-color-on-surface-variant);

		border-radius: 24px;

		filter: drop-shadow(0px 4px 10px #00000025);
	}

	.rotate {
		animation: treeDspin 1s;
	}

	h2 {
		color: white;
		text-align: center;
		margin-top: 0;

		max-width: 50%;
	}

	@media screen and (max-width: 480px) {
		/* mobile version */
		div {
			width: auto;
			min-height: 30px;
		}

		img {
			width: 50%;
			height: 50%;
		}

		h2 {
			max-width: 75%;
			text-align: center;
		}
	}

	@media screen and (min-width: 480px) {
		/* desktop version */
		div {
			width: 300px;
			height: 300px;
		}
	}

	@keyframes treeDspin {
		0% {
			transform: rotate3d(0, 0, 0, 0deg);
		}

		100% {
			transform: rotate3d(0, 1, 0, 360deg);
		}
	}
</style>
