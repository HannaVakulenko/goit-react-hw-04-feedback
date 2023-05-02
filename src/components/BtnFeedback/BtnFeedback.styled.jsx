import styled from 'styled-components';

export const BtnStyled = styled.button`
  width: 120px;
  height: 36px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.btnPrimary};
  color: ${props => props.theme.colors.btnSecondary};
  font-weight: ${props => props.theme.fontWeights.bold};
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus-visible {
    background-color: ${props => props.theme.colors.btnSecondary};
    color: ${props => props.theme.colors.btnPrimary};
  }
`;
