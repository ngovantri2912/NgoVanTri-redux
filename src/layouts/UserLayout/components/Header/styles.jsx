import styled, { css } from "styled-components";

export const HeaderLogo = styled.h2`
  font-size: 28px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.bgHeader};

  &:hover {
    background-color: green;

    & ${HeaderLogo} {
      color: red;
    }
  }
`;

export const HeaderContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  color: white;

  ${(props) =>
    props.active &&
    css`
      color: black;
      border: 3px solid blue;
    `}
`;
