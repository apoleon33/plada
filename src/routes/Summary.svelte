<div id="wrapper">
	<div class="dropdown">
		<span> <a href="/" class="text">L'association </a></span>
		<div class="dropdown-content">
			<a href="/" class="text option-menu"> Accueil </a>
			<a href="/association/contact" class="text option-menu"> Contact</a>
			<a href="/association/archives" class="text option-menu last-element"> Archives </a>
		</div>
	</div>
	<div class="dropdown">
		<span> <a href="/" class="text">Adopter </a></span>
		<div class="dropdown-content" id="dropdown-adopter">
			<a href="/comment-ca-marche" class="text option-menu"> Comment ça marche ? </a>
			<a href="/animaux/chats" class="text option-menu"> Chats </a>
			<a href="/animaux/chiens" class="text option-menu"> Chiens</a>
			<a href="/animaux/autres" class="text option-menu last-element"> Autres </a>
		</div>
	</div>

	<div class="dropdown">
		<span> <a href="/aider" class="text">Nous aider </a></span>
		<div class="dropdown-content" id="dropdown-help">
			<a href="/aider/don" class="text option-menu"> Faire un don </a>
			<a href="/aider/famille-accueil" class="text option-menu last-element">
				Devenir famille d'accueil</a
			>
		</div>
	</div>
</div>

<style>
	a {
		text-decoration: none;
		color: unset;
	}

	span:hover {
		color: #fe0094;
		transition: 200ms;
	}

	#wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 1em;
		margin: 0;
		padding-bottom: 1em;

		grid-column: 3;
	}

	.text {
		font-size: 30px;
	}

	.text:hover {
		color: #fe0094;
		transition: 200ms;
	}

	/* The container <div> - needed to position the dropdown content */
	.dropdown {
		position: relative;
		display: inline-block;
	}

	/* Dropdown Content (Hidden by Default) */
	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #f9f9f9;
		min-width: 100%;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;

		border-radius: 0 0 10px 10px;
	}
	/* Links inside the dropdown */
	.dropdown-content a {
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	/* Change color of dropdown links on hover */
	.dropdown-content a:hover {
		background-color: #f1f1f1;
	}

	/* Show the dropdown menu on hover */
	.dropdown:hover .dropdown-content {
		display: block;
	}

	.option-menu {
		padding-right: 30em;
		font-size: 20px;
	}

	.last-element {
		border-radius: 0 0 10px 10px;
	}

	#dropdown-help {
		width: 175%;
	}

	#dropdown-adopter {
		width: 215%;
	}
</style>
