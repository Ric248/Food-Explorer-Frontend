import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30rem;
  height: 46rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.65);
  
  background: rgba(0, 0, 0, 0.32);

  .editButton {
    position: absolute;
    top: 1.6rem;
    right: 1.8rem;
    background: transparent;
    border: none;
    font-size: 3rem;

    > svg {
      fill: ${({ theme }) => theme.COLORS.WHITE_100};
    }
  }

  .favButton {
    position: absolute;
    top: 1.6rem;
    right: 1.8rem;
    background: transparent;
    border: none;
    font-size: 3rem;

    > svg {
      fill: ${({ theme }) => theme.COLORS.WHITE_100};
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    > img {
      width: 17.6rem;
      height: 17.6rem;
      margin: 3rem auto 1.6rem;
      border-radius: 50%;
      object-fit: cover
    }
  }

  .product-title {
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    margin-bottom: 1.5rem;
    white-space: nowrap;
  }
  
  .description {
    width: 25.6rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-bottom: 1.5rem;
  }

  .price {
    font-family: 'Roboto', sans-serif;
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.BLUE_100};

    margin-bottom: 1.5rem;
  }
`;

export const PurchaseCard = styled.div`
  display: flex;

  button {
    height: 5.6rem;
    max-width: 24.6rem;
    white-space: nowrap;
  }
  
  .counter {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    margin: 0 2.4rem 0 0;
  }

  .counter span {
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }

  p {
    font-weight: 700;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.BLUE};
    text-align: center;
  }
`;