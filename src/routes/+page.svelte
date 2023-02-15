<div id="wrapper">
	<div id="content-left">
		<div id="notre-association">
			<h1>Notre association</h1>
			<p class="text">
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			</p>
		</div>
	</div>

	<div id="content-right">
		<div id="portfolio">
			<img alt="première du portfolio" id="first-image" src="https://picsum.photos/300/" />
			<img alt="seconde du portfolio" id="second-image" src="https://picsum.photos/400/300" />
			<img alt="troisième du portfolio" id="third-image" src="https://picsum.photos/300/" />
		</div>
	</div>

	<div id="equipe">
		<h1>L'équipe</h1>
		<li>A</li>
		<li>B</li>
		<li>C</li>
	</div>
</div>

<style>
	.text {
		font-size: 150%;
	}

	#wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5%;
	}

	#content-left {
		width: 50%;
	}

	#content-right {
		width: 40%;
	}

	#portfolio {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 5%;
		padding: 1em 0 1em 0;
	}

	#first-image {
		grid-column: 1;
		grid-row: 1;
	}

	#second-image {
		grid-column: 2;
		grid-row: 2;
	}

	#third-image {
		grid-column: 1;
		grid-row: 3;
	}
</style>
