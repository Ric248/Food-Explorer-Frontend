import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  min-width: 320px;
  height: 100vh;   
  min-height: 100%;
  
  overflow: auto;
  overflow: overlay;  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  max-width: 121.2rem;
  height: 100%;
  margin: auto;
  padding: 3.5rem 4rem;

  overflow: auto;
  overflow: overlay;  
  
  .button {
    display: flex;
    justify-content: center;
    margin-top: 3.2rem;
  }

  .disabledButton {
    background: ${({ theme }) => theme.COLORS.PINK_BUTTON};
  }

  @media only screen and (min-width: 768px) {
    .button {
      align-self: flex-end;
      justify-content: end;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 3.2rem;
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 4.5rem;
    text-align: center;
    
    margin: 2.4rem 0 0;
  }

  button:first-child {
    font-size: 2.4rem;
  }

  .header {
    justify-content: center;
    text-align: center;
  }

  > div p {
    margin-bottom: 0.8rem;
  }

  .details {
    display: flex;
    width: auto;
    gap: 3.2rem;
  }

  .dish {
    width: 50%;
  }

  .dishCategory {
    width: 100%;
  }

  .dishCategory select {
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border-radius: 0.8rem;
  border: none;

  height: 4.8rem;
  width: 100%;
  padding: 12px;

  font-size: 16px;
  line-height: 26px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .dishImage {
    display: flex;
    flex-direction: column;
    
    width: 50%;

    input[type='file'] {
    display: none;
    }
    
    > label {
      display: flex;
      justify-content: center;

      padding: 1.1rem 0.5rem;
      gap: 0.5rem;
      border-radius: 0.8rem;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

      font-family: 'Poppins', sans-serif;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;

      cursor: pointer;
    }

    > label:hover {
      background-color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  .ingredients {
    display: flex;
    flex-wrap: wrap;
    align-content: center;

    height: auto;
    gap: 2.4rem;
    padding: 0.8rem;
    
    border-radius: 0.8rem;
    margin-bottom: 3.2rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  .ingredients_line {
    width: 100%;
    border-radius: 0.8rem;
  }

  .details_plus { 
    justify-content: space-between;
  }

  .price {
    max-width: 15rem;
  }

  @media only screen and (min-width: 768px) {

    h1 {
      text-align: left;
    }

    .dishImage {
      max-width: 22.9rem;
    }

    .dish {
      max-width: 85.9rem;
      width: 100%;
    }

    > .details {
      display: flex;
      justify-content: space-between;
    }

    .ingredients {
      display: flex;
      flex-wrap: wrap;
      align-content: center;

      max-width: 83.7rem;
      height: auto;
      padding: 0.8rem;
      margin-bottom: 0;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      border: none;
      border-radius: 0.8rem;
    }

    .details_plus {
      display: flex;
      justify-content: space-between;

      width: 100%;
      gap: 3.2rem;
    }

    .price {
      max-width: 25.1rem;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .details {
      display: flex;
      flex-direction: column;

      .dishImage {
        width: 100%;
      }

      .dish {
        width: 100%;
      }

      .dishCategory {
        width: 100%;
      }
    }
  
    .details_plus { 
      .price {
        max-width: 100%;
      }
    }
  }
`;