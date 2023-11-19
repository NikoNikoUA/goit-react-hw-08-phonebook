import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 30px;
  border: 1px solid ${props => props.theme.colors.form};
  border-radius: 10px;
  width: 960px;
  padding: 20px;
  gap: 15px;
`;
