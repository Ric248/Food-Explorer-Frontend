import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  min-height: 100vh;  

  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  max-width: 113.2rem;
  margin: 0 auto auto auto;
  max-width: 138rem;
  
  display: flex;
  flex-direction: column;

  padding: 0 4rem;
  
  @media (max-width: 768px){
    max-width: 38.2rem;
    padding: 0.5rem 0;
  }
`;

export const ButtonBack = styled.div`
  margin: 2.4rem 0;
  max-width: 136.8rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > a {
    background-color: transparent;
    color: ${({theme})=> theme.COLORS.GRAY};

    display: flex;
    align-items: center;

    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3.6rem;
  }

  @media (max-width: 768px){
    > a {
      font-size: 1.8rem;
      line-height: 2.8rem;

      > svg {
        width: 2.2rem;
        height: 2.2rem;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 39rem;

  display: flex;
  align-items: center;
  gap: 6rem;

  position: relative;

  color: ${({theme}) => theme.COLORS.WHITE_100};

  img {
    width: clamp(4rem, 40vw, 39rem);
    height: clamp(4rem, 40vw, 39rem);
    border-radius: 50%;
  }

  .ingredientsTags {
    display: flex;
    gap: 1.2rem;

    > .tag {
      border-radius: 5px;
      padding: 0.4rem 0.8rem;

      font-size: 1.4rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      color: ${({theme}) => theme.COLORS.WHITE};

      background-color: ${({theme})=> theme.COLORS.BLUE_300};
    }
  }

  .details{
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 2.4rem;
    width: clamp(4rem, 50vw, 68.7rem);
    height: 35.6rem;
  }

  .details-wrapper{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > h2 {
      font-size: clamp(1rem, 4vw, 4rem);
      font-family: 'Poppins', sans-serif;
      font-weight: 500;

      margin-bottom: 1.2rem;
    }

    > p {
      font-size: clamp(1rem, 2.4vw, 2.4rem);
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      line-height: 3.4rem;
    }
  }
  
  .Amount {
    display: flex;
    align-items: center;
    margin-top: 2.4rem;
    gap: 1.4rem;

    font-size: 2rem;

    .PlusItem, .MinusItem {
      display: flex;
      margin: 0;

      background: transparent;
      color: ${({theme})=> theme.COLORS.WHITE};

      > svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
    
    > button {
      border: none;
    }
  }

  .AmountItemsAndBuy-wrapper {
    display: flex;
    align-items: center;
    gap: 5.4rem;

    span {
      font-weight: 700;
      font-size: 2rem;
      line-height: 3.2rem;
      color: ${({theme})=> theme.COLORS.GRAY};
    }
  }

  @media (max-width: 768px){
    min-height: 38.8rem;
    flex-direction: column;

    img {
      width: 26.4rem;
      height: 26.4rem;
      border-radius: 50%;
    }

    .details{
      gap: 1rem;
      width: 29rem;
      height: 25rem;
      justify-content: start;
      align-items: center;
    }

    .details-wrapper{
      gap: 0.4rem;

      > h2 {
        text-align: center;
        font-size: 2.2rem;
        line-height: 2.8rem;
      }

      > p {
        text-align: center;
        font-size: 1.4rem;
        line-height: 2rem;
      }
    }

    .AmountItemsAndBuy-wrapper {
    gap: 0rem;
    justify-content: space-between;

    span {
      font-size: 1.4rem;
      line-height: 1rem;
      }
    }

    .Amount{
      gap: 1.4rem;
    }
  }
`;

export const AllIngredientCards = styled.section`
  display: flex;
  gap: 4rem;

  @media (max-width: 768px){
    gap: 0rem;
    justify-content: space-between;
  }
`;