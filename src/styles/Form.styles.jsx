import styled from 'styled-components';

export const FormFieldContainer = styled.div`
  background: #cecececc;
  padding: 1.5rem 1rem;
  border-radius: 1rem;
  width: 70%;
  margin: 0 auto;
  text-align: left;
`;

export const SingleFieldConatiner = styled.div`
  margin: 1rem 0;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.75);
  margin: 0 0.5rem;
  display: inline-block;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  border-radius: 10px;
  padding: 8px;

  &[type='radio'] {
    padding: 5px;
  }
`;

export const FormErrorText = styled.p`
  color: red;
  margin-left: 5px;
  font-size: 13px;
`;

export const ButtonSubmit = styled.button`
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.5);
  background-color: aliceblue;
  color: rgba(0, 0, 0, 0.8);
  padding: 7px 25px;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.5s;

  &:disabled {
    color: rgba(0, 0, 0, 0.2);
    cursor: not-allowed;
  }

  &:hover {
    box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.9);
  }
`;

export const FormTitle = styled.h3`
  color: rgba(0, 0, 0, 0.7);
  font-size: 2.2rem;
  text-align: center;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;
