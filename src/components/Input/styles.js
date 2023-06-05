import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  border-radius: 5px;

  color: ${({ theme }) => theme.COLORS.GRAY_200};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  input {
    width: 100%;
    height: 4.8rem;

    padding: 1.6rem 1.4rem;
    border: none;
    border-radius: 0.5rem;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: transparent;
  }

  input:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
  }
  
  input::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > svg {
    margin-left: 1.4rem;
  }
`;
