import * as S from "./styles";

import Icon from "../../assets/icon-light.svg";
import Bus from "../../assets/bus.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import Arrows from "../../assets/arrows-down.svg";

export default function Home() {
  return (
    <S.Wrapper>
      <div>
        <img src={Icon} alt="Icon" />
        <div>
          <h1>Olá, sou Lucas Lima! :D</h1>
          <span />
        </div>
      </div>
      <img src={Bus} alt="Bus" />
      <ul>
        <li>
          <img src={Linkedin} alt="Linkedin" />
        </li>
        <li>
          <img src={Github} alt="Github" />
        </li>
        <li>
          <img src={Whatsapp} alt="Whatsapp" />
        </li>
      </ul>
      <span>
        <img src={Arrows} alt="Role para baixo" />
      </span>
    </S.Wrapper>
  );
}
