import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: white;
  &:first-child {
    margin-right: 15px;
  }

  &:hover {
    color: ${props => props.theme.colors.containerColor};
  }
`;

export const AuthContainer = styled.div`
  /* padding: 20px;
  border: 1px solid white;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 900px; */
`;
