<div>
	<hr />
</div>

<style lang="scss">
	@use 'shared/colors';

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 4rem;
		background: colors.$dark-gray;
	}

	hr {
		height: 20%;
		background: linear-gradient(
			0.25turn,
			transparent 0%,
			transparent 40%,
			white 40%,
			white 100%
		);
		background-size: 12rem 0.5rem;
		background-position: 5rem 0;
	}
</style>
