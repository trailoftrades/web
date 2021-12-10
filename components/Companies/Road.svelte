<div />

<style lang="scss">
	@use 'shared/colors';

	$distance: 50vw;

	div {
		position: relative;
		height: 10rem;
		margin: 0 20px 50px;
		background: colors.$dark-gray;
		box-shadow: 0 2rem 2rem 1rem transparentize(colors.$black, 0.5);
		transform: perspective($distance) rotateX(40deg);
		transform-origin: bottom;
	}

	::before {
		$line-width: 7.5rem;

		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		width: 100%;
		height: 0.63rem;
		background: linear-gradient(
			90deg,
			white 0%,
			white 70%,
			transparent 70%,
			transparent 100%
		);
		background-size: $line-width;
		transform: translateY(-50%);
		animation: move 0.5s linear infinite;

		@keyframes move {
			from {
				background-position: 0;
			}

			to {
				background-position: -$line-width;
			}
		}
	}

	::after {
		$height: 1.88rem;

		content: '';
		position: absolute;
		bottom: -$height;
		left: 0;
		right: 0;
		width: 100%;
		height: $height;
		background: colors.$darker-gray;
		transform: perspective($distance) rotateX(-30deg);
		transform-origin: top;
	}
</style>
