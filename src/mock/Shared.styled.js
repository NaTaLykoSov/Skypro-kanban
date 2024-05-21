import styled, {css} from "styled-components";
import { breakpoints } from "./breakpoints";


export const hover01 = css`
&:hover{
  background-color: #33399b;
}
`;
export const hover02 = css`
&:hover{
  color: #33399b;
}
&:hover::after {
  border-left-color: #33399b;
  border-bottom-color: #33399b;
}
`;
export const hover03 = css`
&:hover {
  background-color: #33399b;
  color: #FFFFFF;
}

&:hover a {
    color: #ffffff;
  }
`;
export const Button = styled.button`
  width: 153px;
  height: 30px;
  background-color: ${(props) => (props.$primary ? "#565eef":"transparent")};
  border-radius: 4px;
  border: ${(props) => props.$primary ? "none":"0.7px solid var(--palette-navy-60, #565EEF)"};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    padding: 0 16px;}
`;