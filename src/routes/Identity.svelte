<script>
	import information from '$lib/icons/information.svg';
	import localisation from '$lib/icons/localisation.svg';
	import facebook from '$lib/icons/faceboook.svg';
	import instagram from '$lib/icons/instagram.svg';
	import paypall from '$lib/icons/paypall.svg';
	import phone from '$lib/icons/phone.svg';

	let screenSize;
	let screenY;

	$: console.log(screenY);
</script>

<svelte:window bind:innerWidth={screenSize} bind:scrollY={screenY} />

<div id="wrapper">
	<div id="card" class:shadowed={screenY > 2850}>
		<div id="content">
			<h2 class:display-large={screenSize > 480} class:headline-small={screenSize < 480}>
				Pour l'amour des animaux
			</h2>

			<div class="information-container" class:body-medium={screenSize < 480}>
				<img src={information} alt="icone d'information" />
				<h3 class:display-small={screenSize > 480}>Organisation à but non lucrative</h3>
			</div>
			<div class="information-container" class:body-medium={screenSize < 480}>
				<img src={localisation} alt="icone de localisation" />
				<h3 class:display-small={screenSize > 480}>Bordeaux</h3>
			</div>
			<a
				href="https://www.facebook.com/AssociationPourLAmourDesAnimaux"
				target="_blank"
				rel="noreferrer"
			>
				<div class="information-container" class:body-medium={screenSize < 480}>
					<img src={facebook} alt="logo de Facebook" />
					<h3 class:display-small={screenSize > 480}>Association Pour l'Amour des Animaux</h3>
				</div>
			</a>
			<a href="https://www.instagram.com/pourlamourdesanimaux33/" target="_blank" rel="noreferrer">
				<div class="information-container" class:body-medium={screenSize < 480}>
					<img src={instagram} alt="logo d'Instagram" />
					<h3 class:display-small={screenSize > 480}>pourlamourdesanimaux33</h3>
				</div>
			</a>
			<a
				href="https://www.paypal.com/paypalme/assoplada33?locale.x=fr_FR&fbclid=IwAR2ld6EEMJtFVhFNV5-WUd6FaQBAy7UNJSMh2GyoSeuLn_cj0vnIg1aiQEI"
				target="_blank"
				rel="noreferrer"
			>
				<div class="information-container" class:body-medium={screenSize < 480}>
					<img src={paypall} alt="logo de Paypall" />
					<h3 class:display-small={screenSize > 480}>Faire un don</h3>
				</div>
			</a>
			<div class="information-container last-element" class:body-medium={screenSize < 480}>
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
	}

	#card {
		background-color: var(--md-sys-color-surface-container-low);
		border-radius: 24px;

		display: flex;

		transition: 1000ms;
	}

	.shadowed {
		filter: drop-shadow(-10px -10px 41px rgb(0 0 0 / 0.25));
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

		gap: 20px;
	}

	.information-container h3 {
		margin: 0;
	}

	#img-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media screen and (min-width: 480px) {
		/* desktop version */

		#wrapper {
			justify-content: start;
		}

		#card {
			width: 65vw;
			height: 65vh;

			flex-direction: row;
			align-items: start;
			justify-content: space-between;
		}

		#content a {
			all: unset;
		}

		#content a:hover {
			cursor: pointer;
			transition: 600ms;
			text-decoration: underline;
		}

		#img-container {
			margin: 40px 40px 0 0;
			height: 100%;

			justify-content: start;
		}

		#img-container img {
			height: 50%;
			border-radius: 24px;
		}

		.information-container {
			justify-content: start;
		}

		.information-container img {
			width: 50px;
			height: 50px;
		}
	}

	@media screen and (max-width: 480px) {
		/* mobile version */
		#wrapper {
			justify-content: center;
		}

		#card {
			max-width: 90vw;

			flex-direction: column-reverse;
			align-items: center;
			justify-content: center;

			filter: drop-shadow(-10px -10px 41px rgb(0 0 0 / 0.25));
		}

		#img-container {
			width: 100vw;
			height: 50vw;
			justify-content: center;

			margin-top: 1em;
		}

		#img-container img {
			height: 100%;
			border-radius: 24px;
			width: 50vw;
			height: 50vw;
		}

		.information-container {
			font-family: 'Lato';
			justify-content: space-between;
			text-align: end;

			width: 80%;
		}

		.information-container img {
			width: 25px;
			height: 25px;
		}
	}
</style>
