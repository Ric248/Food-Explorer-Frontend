import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  
  width: 100%;
  
  position: sticky;

  top: 0;
  z-index: 999;
  
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  @keyframes scale-up-center {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }

  @keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }}
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  
  width: 121.2rem;
  height: 9.6rem;
  
  padding: 0 4rem;
  gap: clamp(0.4rem, 1vw, 3.2rem);

  .signout-text {
    display: none;
  }

  .nav-menu {
    display: flex;
    justify-content: space-between;
    
    width: 100%;
    gap: clamp(0.4rem, 1vw, 3.2rem);
  }

  .hamburger {
    display: none;
  }

  .close-nav{
    display: none;
  }

  .mini-cart {
    display: none;
  }

  .text-add {
    display: none;
  }

  .bar {
    display: block;

    width: 25px;
    height: 3px;
    margin: 5px auto;

    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (max-width: 768px) {
    max-width: 768px;
    height: 11.4rem;
    padding-top: 1.8rem;

    .signout-icon {
      display: none;
    }

    .signout-text {
      display: inline;

      margin: 0 4.6rem;
      padding-bottom: 0.9rem;

      font-family: 'Poppins';
      font-weight: 300;
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE_100};

      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLUE_300};
    }

    .close-nav{
      display: block;

      height: 11.4rem;
      width: 100%;
      padding-top: 5.9rem;
      padding-left: 3.6rem;
      gap: 1.6rem;

      font-family: 'Roboto', sans-serif;
      font-size: 2.1rem;
      font-weight: 400;

      background-color: ${({ theme }) => theme.COLORS.BLUE_200};

      > img {
        margin-right: 1.6rem;
        cursor: pointer;
      }
    }

    .nav-menu {
      flex-direction: column;
      justify-content: start;
      align-items: start;

      position: fixed;
      left: 100%;
      top: 0;
      z-index: 9999;
      
      width: 100vw;
      height: 100%;
      gap: 2rem;

      transition: 0.3s;
      
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      .main-button {
        display: none;
      }
    }

    .mini-cart {
      position: relative;
      display: block;

      cursor: pointer;

      > span {
        position: absolute;
        align-self: start;
        right: -5px;
        top: -4px;

        width: 2rem;
        height: 2rem;
        border-radius: 50%;

        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;

        background-color: ${({ theme }) => theme.COLORS.RED_BUTTON};
      }
    }

    .nav-menu.active {
      left: 0;
    }

    .nav-item {
      margin: 2.5rem 0;
    }

    .text-add {
      display: inline;

      margin: 0 4.6rem;
      padding-bottom: 0.9rem;

      font-family: 'Poppins';
      font-weight: 300;
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE_100};

      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLUE_300};
    }

    .hamburger {
      display: block;
      cursor: pointer;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  h1 {
    font-size: 2.5rem;
  }

  .logo p {
    font-size: 1.2rem;
    margin-top: -0.6rem;
    text-align: right;
    color: ${({ theme }) => theme.COLORS.BLUE_100};
  }

  .logo img:hover {
    -webkit-animation: rotate-center 0.6s ease-in-out both;
    animation: rotate-center 0.6s ease-in-out both;
  }
  
  a {
    display: flex;
    gap: 1.123rem;

    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 768px) {
    .logo p {
      font-size: 1.2rem;
      margin-top: -2.8rem;
      margin-right: -5rem;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 0 3.6rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  input {
    width: 100%;
    height: 4.8rem;

    padding: 1.6rem;
    border: 0;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: transparent;
  }

  input::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  label {
    min-width: 34rem;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 1.6rem;
  } 

  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  @media (max-width: 1000px) {
    margin: 0;
    width: 75%;
  }

  @media (max-width: 768px) {
    margin: 0 3.6rem;
    width: 85%;

    input {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  min-width: 216px;
  height: 4.8rem;
  
  border: none;
  border-radius: 0.5rem;
  
  gap: 1.1rem;

  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.RED_BUTTON};
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 0 3rem;

  @media (min-width: 768px) {
    max-width: 21.6rem;
  }
`;

export const Logout = styled(Link)`
  display: flex;
  align-self: start;
  
  border: none;
  background: none;
  
  > .signout-icon{
    svg {
      margin-top: 0.5rem;

      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 3.2rem;
    }

    svg:hover {
      animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
  }
`;

export const ButtonMenu = styled.button`
  display: flex;
  align-items: center;

  width: 100%;
  height: 4rem;
  padding: 0 1.6rem;
  gap: 1rem;
  
  border: none;
  border-radius: 0.5rem;
  
  font-size: 1.4rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BLUE_200};
`;