import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const ErrorMsg = styled(ErrorMessage)`
  color: ${props => props.theme.colors.error};
  font-size: 14px;
  text-shadow: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.form};
  border-radius: 10px;
  width: 300px;
  padding: 20px;
  gap: 15px;
`;

export const Input = styled(Field)`
  padding: 8px 12px;
  font-size: 18px;

  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.form};
  border-radius: 5px;
  outline: none;
  background-color: transparent;

  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors.containerColor};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;

  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  color: ${props => props.theme.colors.form};
`;

export const Button = styled.button`
  padding: 8px;
  min-width: 70px;
  height: 35px;
  border: none;
  border-radius: 15px;
  font-weight: bold;
  background-color: ${props => props.theme.colors.backgroundColor};

  box-shadow: 0px 0px 4px white;

  &:hover {
    background-color: ${props => props.theme.colors.containerColor};
  }
`;

export const AddTextContainer = styled.div`
  display: flex;
  gap: 2px;
`;
