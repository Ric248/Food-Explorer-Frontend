import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 110.6rem;
  height: 100vh;
  
  margin: auto;
  padding: 14.2rem 4rem;
  
  align-items: center;

  animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;

  @keyframes puff-in-center {
    0% {
      transform: scale(2);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      filter: blur(0px);
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    padding: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  
  max-width: 47.6rem;
  width: 100%;
  
  padding: 6.4rem;
  border-radius: 1.6rem;

  background-color: transparent;

  > h2 {
    display: none;
  }

  > a {
    margin-top: 3.2rem;
    
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  > .inputs {
    margin-bottom: 3.2rem;
  }

  > .inputs p {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  @media (min-width: 768px) {
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};

    height: 54rem;

    > h2 {
      display: flex;

      font-family: 'Poppins', sans-serif;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 6.8rem;
      text-align: center;

      margin-bottom: 3.2rem;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.BLUE};

  h1 {
    font-size: clamp(3rem, 3rem + 1.5vw, 4.248rem);
    white-space: nowrap;
  }
  
  .logo {
    display: flex;
    gap: 1.9rem;
  }

  img {
    height: 5rem;
    width: 5rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;