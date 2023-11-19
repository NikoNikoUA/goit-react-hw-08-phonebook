import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 8px;
  min-width: 70px;
  height: 35px;
  border: none;
  border-radius: 15px;
  font-weight: bold;
  background-color: ${props => props.theme.colors.btnColor};

  box-shadow: 0px 0px 4px white;

  &:hover {
    background-color: ${props => props.theme.colors.btnHover};
  }
`;
