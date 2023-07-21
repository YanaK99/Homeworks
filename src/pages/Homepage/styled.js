import styled from "styled-components";

import LogoImage from "../../images/Logo.png";

export const HomepageContainer = styled.div`
    width: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
`;

export const LogoContainer = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
  top: -70px;
   >span {
     font-family: "Modern No. 20";
     font-size: 36px;
     color: #f2f2f2;
     margin-left: 20px;
   }
  `;

export const Logo = styled.div`
  background-image: url(${LogoImage});
  background-size: contain;
  width: 60px;
  height: 70px;
  background-position: center;
  background-repeat: no-repeat;
`;
