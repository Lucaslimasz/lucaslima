import * as S from "./styles";

import Css from "../../assets/css.svg";
import Html from "../../assets/html.svg";
import Javascript from "../../assets/js.svg";
import Next from "../../assets/next.svg";
import Reactjs from "../../assets/react.svg";
import Sass from "../../assets/sass.svg";
import Typescript from "../../assets/typescript.svg";
import Github from "../../assets/github.svg";
import Programmer from '../../assets/developer.svg'

export default function Skills() {
  return (
    <S.Wrapper>
      <h2>Habilidades em...</h2>
      <div>
        <ul>
          <li>
            <img src={Html} alt="Html" />
            <p>HTML 5</p>
          </li>
          <li>
            <img src={Css} alt="Css" />
            <p>CSS3</p>
          </li>
          <li>
            <img src={Javascript} alt="Javascript" />
            <p>Javascript</p>
          </li>
          <li>
            <img src={Typescript} alt="Typescript" />
            <p>Typescript</p>
          </li>
          <li>
            <img src={Reactjs} alt="Reactjs" />
            <p>React</p>
          </li>
          <li>
            <img src={Next} alt="Nextjs" />
            <p>Next</p>
          </li>
          <li>
            <img src={Reactjs} alt="React Native" />
            <p>React Native</p>
          </li>
          <li>
            <img src={Sass} alt="Sass" />
            <p>Sass</p>
          </li>
          <li>
            <img src={Github} alt="Github" />
            <p>Git e Github</p>
          </li>
        </ul>
        <img src={Programmer} alt="Developer" />
      </div>
    </S.Wrapper>
  );
}
