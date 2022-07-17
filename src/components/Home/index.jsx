import * as S from "./styles";

import Icon from "../../assets/icon-light.svg";
import Bus from "../../assets/bus.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Github from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import Arrows from "../../assets/arrows-down.svg";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  AOS.init({
    duration: 1200
  });

  return (
    <S.Wrapper>
      <div data-aos="fade-down">
        <img src={Icon} alt="Icon" />
        <div>
          <h1>Olá, sou Lucas Lima! :D</h1>
          <span />
        </div>
      </div>
      <img src={Bus} alt="Bus" />
      <ul data-aos="fade-right">
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
