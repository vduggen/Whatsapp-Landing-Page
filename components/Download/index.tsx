import * as S from "../../styles/components/Download";
import * as T from "../../styles/Typography";

function Download() {
  return (
    <S.Container>
      <T.H2>Download</T.H2>

      <article>
        <section className="column-download">
          <T.H4>Mobile</T.H4>

          <img src="/Mobile.svg" alt="Mobile Vector" />
          <img src="/Download.svg" alt="Download Vector" />

          <div className="container-text-download">
            <T.H5>
              Go to <span>whatsapp.com/dl</span> on your phone to install
              WhatsApp.
            </T.H5>

            <T.H5>
              By installing WhatsApp, you agree to our{" "}
              <span>Terms and Privacy Policy.</span>
            </T.H5>
          </div>
        </section>

        <section className="column-download">
          <T.H4>Desktop</T.H4>

          <img src="/Notebook.svg" alt="Notebook Vector" />

          <div className="container-text-download">
            <T.SH3 className="first-text-mobile">
              WhatsApp must be installed on your phone.
            </T.SH3>

            <T.H5>
              By clicking the button below to download WhatsApp on your
              computer, you agree to our Terms and Privacy Policy.
            </T.H5>

            <div className="container-versions-supported">
              <T.H5>Supported Versions</T.H5>
              <ul>
                <li>
                  <T.SH3>Mac OS X 10.10</T.SH3>
                </li>
                <li>
                  <T.SH3>Windows 8 (64-bit)</T.SH3>
                </li>
                <li>
                  <T.SH3>Windows 8 (32-bit)</T.SH3>
                </li>
              </ul>
            </div>

            <T.H5>
              Have you tried using <span>WhatsApp Web</span> to send and receive
              messages in your browser?
            </T.H5>
          </div>
        </section>
      </article>
    </S.Container>
  );
}

export default Download;
