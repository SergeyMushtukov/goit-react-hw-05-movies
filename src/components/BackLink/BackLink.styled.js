import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

export const Box = styled.div`
  display: inline-block;
  margin-bottom: 5px;
  background-color: #00000016;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  overflow: hidden;

  :activ {
    background-color: blue;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 5px;
  color: black;
  text-decoration: none;
  font-weight: 500;
`;

export const Icon = styled(HiArrowLeft)`
  width: 20px;
  height: 20px;
`;
