import * as S from "../../styles/components/Footer";
import * as T from "../../styles/Typography";

const Footer: React.FC = () => {
  return (
    <>
      <S.Container>
        <section className="column-footer">
          <T.H5>Whatsapp</T.H5>

          <nav>
            <a href=" #">Resources</a>
            <a href=" #">Security</a>
            <a href=" #">Download</a>
            <a href=" #">Whatsapp Web</a>
            <a href=" #">Business</a>
            <a href=" #">Privacity</a>
            <a href=" #">Payments</a>
          </nav>
        </section>

        <section className="column-footer">
          <T.H5>Company</T.H5>

          <nav>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </nav>
        </section>

        <section className="column-footer">
          <T.H5>Download</T.H5>

          <nav>
            <a href="//#endregion">Mac/PC</a>
            <a href="//#endregion">Android</a>
            <a href="//#endregion">Iphone</a>
          </nav>
        </section>

        <section className="column-footer">
          <T.H5>Support</T.H5>

          <nav>
            <a href="//#endregion">FAQ</a>
            <a href="//#endregion">Twitter</a>
            <a href="//#endregion">Facebook</a>
          </nav>
        </section>
      </S.Container>

      <S.Copyright>
        <T.H6>2020 © WhatsApp Inc.</T.H6>
      </S.Copyright>
    </>
  );
};

export default Footer;
