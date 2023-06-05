import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  text-align: end;
  
  font-size: 2.4rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  
  border: none;
  gap: 0.8rem;

  background: none;
  color: ${({ theme }) => theme.COLORS.WHITE_100};
`;