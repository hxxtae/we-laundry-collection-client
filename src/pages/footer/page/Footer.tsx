import styled from 'styled-components';
import { Containers } from '../../../components';
import { colors } from '../../../utils';

function Footer() {
  return (
    <Containers>
      <FooterBody>
        <Description>All Rights Reserved. &reg; 2022 Hxxtae</Description>
        <a href="https://github.com/hxxtae/we-laundry-collection-client" target="blank">
          <img src="./assets/svg/github.svg" alt='github icon'/>
          <span>GitHub</span>
        </a>
      </FooterBody>
    </Containers>
  )
}

export default Footer;

const FooterBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 40px;
  color: ${colors.secondary};

  a {
    margin-top: 10px;

    img {
      width: 20px;
      height: 20px;
      margin-right: 3px;
      vertical-align: middle;
    }

    span {
      vertical-align: middle;
    }
    
    &:hover {
      opacity: .5;
    }
  }
`;

const Description = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
