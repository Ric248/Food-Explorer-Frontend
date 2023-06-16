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
  gap: 3.2rem;

  .signout-text {
    display: none;
  }

  .nav-menu {
    display: flex;
    justify-content: space-between;
    
    width: 100%;
    gap: 3.2rem;
  }

  .hamburger {
    display: none;
  }

  .mini-cart {
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

    .signout-icon {
      display: none;
    }

    .signout-text {
      display: inline;

      margin-top: 2.4rem;

      font-family: 'Poppins';
      font-weight: 300;
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    .nav-menu {
      flex-direction: column;
      justify-content: start;
      align-items: start;

      position: fixed;
      left: -100%;
      top: 9.6rem;
      z-index: 9999;
      
      width: 100%;
      height: 100%;
      gap: 2rem;
      padding: 3.6rem 5rem;

      transition: 0.3s;
      
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      box-shadow:0 10px 27px rgba(0, 0, 0, 0.05);
    }

    .mini-cart {
      position: relative;
      display: block;

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

      > .header-button {
        display: none;
      }

      .logo {
        display: none;
      }
    }

    .nav-item {
      margin: 2.5rem 0;
    }

    .hamburger {
      display: block;
      cursor: pointer;
    }

    .hamburger.active .bar:nth-child(2) { // XXXX excluir XXX
      opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) { // XXXX excluir XXX
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) { // XXXX excluir XXX
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.BLUE};
  
  h1 {
    font-size: 2.51109rem;
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
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
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
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
      color: ${({ theme }) => theme.COLORS.BLUE};
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