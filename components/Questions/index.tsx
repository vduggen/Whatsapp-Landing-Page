import * as S from "../../styles/components/Questions";
import * as T from "../../styles/Typography";

const Questions: React.FC = () => {
  return (
    <S.Container>
      <T.TitleHeader>FAQ</T.TitleHeader>

      <article className="container-cards">
        <S.Card>
          <T.H4>All</T.H4>

          <div className="container-text-questions">
            <ul>
              <li>
                <a href="# ">- Conversation forwarding limits</a>
              </li>
              <li>
                <a href="# ">- How to update WhatsApp</a>
              </li>
              <li>
                <a href="# ">- Stolen accounts</a>
              </li>
            </ul>

            <a href="#">
              View All Questions <img src="/arrow-right.svg" alt="arrow" />
            </a>
          </div>
        </S.Card>

        <S.Card>
          <T.H4>Android</T.H4>

          <div className="container-text-questions">
            <ul>
              <li>
                <a href="# ">- Conversation forwarding limits</a>
              </li>
              <li>
                <a href="# ">- How to update WhatsApp</a>
              </li>
              <li>
                <a href="# ">- Stolen accounts</a>
              </li>
            </ul>

            <a href="#">
              View All Questions <img src="/arrow-right.svg" alt="arrow" />
            </a>
          </div>
        </S.Card>

        <S.Card>
          <T.H4>Web</T.H4>

          <div className="container-text-questions">
            <ul>
              <li>
                <a href="# ">- Conversation forwarding limits</a>
              </li>
              <li>
                <a href="# ">- How to update WhatsApp</a>
              </li>
              <li>
                <a href="# ">- Stolen accounts</a>
              </li>
            </ul>

            <a href="#">
              View All Questions <img src="/arrow-right.svg" alt="arrow" />
            </a>
          </div>
        </S.Card>
      </article>
    </S.Container>
  );
};

export default Questions;
