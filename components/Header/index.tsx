import * as S from "../../styles/components/Header";
import * as T from "../../styles/Typography";

function Header() {
  return (
    <S.Container>
      <img src="/Logo.png" alt="Logo Whatsapp" />

      <nav>
        <ul>
          <li>
            <T.Link>Home</T.Link>
          </li>
          <li>
            <T.Link>Download</T.Link>
          </li>
          <li>
            <T.Link>Security</T.Link>
          </li>
          <li>
            <T.Link>FAQ</T.Link>
          </li>
        </ul>
      </nav>
    </S.Container>
  );
}

export default Header;
