import styled from 'styled-components';

export const H2 = styled.h2`
  font-size: 2rem;
  color: #161616cc;
`;

export const H3 = styled.h3`
  font-size: 1rem;
  display: inline-block;
  color: #161616cc;
  margin-right: 0.5rem;
`;

export const P = styled.p`
  font-size: ${(props) => props.fontSize || '1.6rem'};
  margin: 0.5rem 0;
  color: #161616cc;
`;
