import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.form};
`;
