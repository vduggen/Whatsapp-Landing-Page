import * as S from "../../styles/components/Security";
import * as T from "../../styles/Typography";

function Security() {
  return (
    <S.Container>
      <T.H2>Security</T.H2>

      <article className="container-cards">
        <S.Card>
          <div className="effect-background-image">
            <img src="/icon-security-1.svg" alt="icon" />
          </div>

          <T.H5B>Speak Freely</T.H5B>
          <T.SH4>
            WhatsApp's call feature allows you to talk to your friends and
            family, even if they are in another country. Like your messages.
          </T.SH4>
        </S.Card>

        <S.Card>
          <div className="effect-background-image">
            <img src="/icon-security-2.svg" alt="icon" />
          </div>

          <T.H5B>Be yourself</T.H5B>
          <T.SH4>
            WhatsApp allows you to verify that the calls you make and the
            messages you send are protected with end-to-end encryption.
          </T.SH4>
        </S.Card>

        <S.Card>
          <div className="effect-background-image">
            <img src="/icon-security-3.svg" alt="icon" />
          </div>

          <T.H5B>Messages that stay with you</T.H5B>
          <T.SH4>
            We believe that your messages should be in your hands only.
            Therefore.
          </T.SH4>
        </S.Card>
      </article>
    </S.Container>
  );
}

export default Security;
