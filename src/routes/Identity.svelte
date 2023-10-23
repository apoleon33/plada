<script>
	import information from '$lib/icons/information.svg';
	import localisation from '$lib/icons/localisation.svg';
	import facebook from '$lib/icons/faceboook.svg';
	import instagram from '$lib/icons/instagram.svg';
	import paypall from '$lib/icons/paypall.svg';
	import phone from '$lib/icons/phone.svg';

	let screenSize;
</script>

<svelte:window bind:innerWidth={screenSize} />

<div id="wrapper">
	<div id="card">
		<div id="content">
			<h2 class:display-large={screenSize > 480}>Pour l'amour des animaux</h2>
			<div class="information-container">
				<img src={information} alt="icone d'information" />
				<h3 class:display-small={screenSize > 480}>Organisation à but non lucrative</h3>
			</div>
			<div class="information-container">
				<img src={localisation} alt="icone de localisation" />
				<h3 class:display-small={screenSize > 480}>Bordeaux</h3>
			</div>
			<div class="information-container">
				<img src={facebook} alt="logo de Facebook" />
				<h3 class:display-small={screenSize > 480}>Association Pour l'Amour des Animaux</h3>
			</div>
			<div class="information-container">
				<img src={instagram} alt="logo d'Instagram" />
				<h3 class:display-small={screenSize > 480}>pourlamourdesanimaux33</h3>
			</div>
			<div class="information-container">
				<img src={paypall} alt="logo de Paypall" />
				<h3 class:display-small={screenSize > 480}>Faire un don</h3>
			</div>
			<div class="information-container last-element">
				<img src={phone} alt="un symbole de téléphone" />
				<h3 class:display-small={screenSize > 480}>06 76 63 15 81</h3>
			</div>
		</div>
		<div id="img-container"><img src="/logo.jpg" alt="logo de l'association" id="logo" /></div>
	</div>
</div>

<style>
	#wrapper {
		width: 100vw;
		margin-bottom: 3vh;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}

	#card {
		width: 65vw;
		height: 65vh;

		background-color: var(--md-sys-color-surface-container-low);
		border-radius: 24px;

		filter: drop-shadow(-10px -10px 41px rgb(0 0 0 / 0.25));

		display: flex;
		flex-direction: row;
		align-items: start;
		justify-content: space-between;
	}

	#content {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: start;
		gap: 30px;

		margin-bottom: 40px;
	}

	#content h2 {
		margin: 40px 0 0 40px;
	}

	.information-container {
		margin-left: 40px;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		gap: 20px;
	}

	.information-container h3 {
		margin: 0;
	}

	.information-container img {
		width: 50px;
		height: 50px;
	}

	#img-container {
		height: 100%;
		margin: 40px 40px 0 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}

	@media screen and (min-width: 480px) {
		/* desktop version */
		#img-container img {
			height: 50%;
			border-radius: 24px;
		}
	}

	@media screen and (max-width: 480px) {
		/* mobile version */

		#img-container img {
			height: 50%;
			border-radius: 24px;
		}
	}
</style>
