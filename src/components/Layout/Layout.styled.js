import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 0;
  margin-bottom: 16px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);

  > nav {
    display: flex;
    gap: 5px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: red;
  }
`;
