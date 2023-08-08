import * as S from './style';
import { Containers } from '../../../../components';


function Footer() {
  return (
    <Containers>
      <S.FooterBody>
        <S.Description>All Rights Reserved. &reg; 2022 Hxxtae</S.Description>
        <a href="https://github.com/hxxtae/we-laundry-collection-client" target="blank">
          <img src="./assets/svg/github.svg" alt='github icon'/>
          <span>GitHub</span>
        </a>
      </S.FooterBody>
    </Containers>
  )
}

export default Footer;
