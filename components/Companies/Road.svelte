<div>
	<span class="border" />
	<span class="divider" />
	<span class="border" />
</div>

<style lang="scss">
	@use 'shared/colors';

	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 5rem;
		padding: 0.5rem 0;
		background: colors.$dark-gray;
	}

	.border {
		height: 0.2rem;
		background: colors.$yellow;
	}

	.divider {
		height: 0.4rem;
		background-image: linear-gradient(
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
