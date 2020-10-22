import * as S from '../../styles/components/About';
import * as T from '../../styles/Typography';

function About() {
	return (
		<S.Container>
			<section className="part1 part-about">
				<img src="/undraw_messages1_9ah2 1.svg" alt="Text Messages Vetor" />

				<div className="container-text-about">
					<T.SH2>Text Messages</T.SH2>
					<T.H2>Simple and Safe</T.H2>
					<T.SH3>Send messages to your friends and family for free *. WhatsApp uses your phone's internet connection to send messages, so you avoid extra text messaging fees.</T.SH3>
				</div>
			</section>

			<section className="part2 part-about">
				<div className="container-text-about">
					<T.SH2>Group Conversation</T.SH2>
					<T.H2>Groups to keep in touch</T.H2>
					<T.SH3>Keep in touch with groups of people who are special to you, such as your family or friends. With group conversations, you can share messages, photos and videos with up to 256 people at the same time. You can also name groups, mute them, configure notifications and more.</T.SH3>
				</div>

				<img src="/Group.svg" alt="Text Messages Vetor" />
			</section>

			<section className="part3 part-about">
				<img src="/undraw_selfie1_kpqf 1.svg" alt="Text Messages Vetor" />

				<div className="container-text-about">
					<T.SH2>Photo and Videos</T.SH2>
					<T.H2>Share important moments</T.H2>
					<T.SH3>Send photos and videos instantly via WhatsApp. Capture the moments that matter most to you using the built-in camera. With WhatsApp, your photos and videos are sent much faster, even if you're using a slow connection.</T.SH3>
				</div>
			</section>
		</S.Container>
	)
}

export default About;