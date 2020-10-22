import * as S from '../../styles/components/Banner';
import * as T from '../../styles/Typography';
import * as B from '../../styles/Button';

function Banner() {
	return (
		<S.Container>
			<div id="esq-banner">
				<T.H2>
					Simple. Safe. <br />
					Exchange messages <br />
					with confidence.
				</T.H2>

				<T.SH3>
					With WhatsApp, your messages and calls <br />
					are fast, simple, secure and free *. <br />
					Available for mobile phones worldwide.
				</T.SH3>

				<nav>
					<B.Primary>Download</B.Primary>
					<B.Secondary>Learn more</B.Secondary>
				</nav>
			</div>
			<div id="dir-banner">
				<img src="/Vetor Chat Messages.svg" alt="Vetor Messages" />
			</div>
		</S.Container>
	)
}

export default Banner;