import styled from "styled-components";

export const MainInputField = styled.div`
  display: flex;
  justify-content: center;
  padding: 35px 20px;
  outline: none;
  background: #bde5be;
`;

export const FormContent = styled.div`
  position: relative;
`;

export const NameLabel = styled.label`
  flex-direction: column;
  top: 0;
  color: #9e9d9b;
  font-size: 12px;
`;

export const FormField = styled.input`
  flex-direction: column;
  width: 100%;
  outline: none;
  border-bottom: 2px solid #388e3c;
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 20px 0;
  
  &:hover {
    border-bottom: 2px solid #1e1803;
  }
`;

export const PassLabel = styled.label`
  flex-direction: column;
  bottom: 0;
  color: #9e9d9b;
  font-size: 12px;
`;

export const PassField = styled.input`
  width: 100%;
  outline: none;
  border-bottom: 2px solid #388e3c;
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 20px 0;
  &:hover {
    border-bottom: 2px solid #1e1803;
  }
`;
export const Button = styled.button`
  position:relative;
  top: 30px;
  left: 140px;
  padding: 10px 15px;
  background: #1E1803;
  border-radius: 10%;
  color: #FDFAEF;
  font-family: "Modern No. 20";
  letter-spacing: 1.5px;
  font-size: 20px;
  cursor: pointer;
  margin: 27px 0;
  &:hover {
    background:  #0d5124;
    color: #FDFAEF;
  }
`;
