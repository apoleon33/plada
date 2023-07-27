<div id="wrapper">
	<form method="POST" action="/admin/dashboard">
		<h1><label for="password">Please enter the security code</label></h1>
		<input type="password" name="password" id="password" />
		<input type="submit" value="Submit" id="submit" />
	</form>
</div>

<style>
	input {
		all: unset;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		gap: 1em;
	}

	#password {
		border-bottom: 1px solid var(--secondary-text-color);
		padding-bottom: 5px;
		text-align: center;
	}

	#submit {
		border: 1px solid var(--secondary-text-color);
		padding: 0.5em;
		border-radius: 10px;
	}

	#submit:hover {
		cursor: pointer;
		color: var(--bg-color);
		border: 1px solid var(--bg-color);
		background-color: var(--secondary-text-color);
		transition: 200ms;
	}
</style>
