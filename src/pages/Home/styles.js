import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  min-width: 35rem;
  height: 100vh;
  
  overflow: auto;
  overflow: overlay; 
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  max-width: 121.2rem;
  margin: auto;
  padding: 3.5rem 4rem;

  font-family: 'Poppins', sans-serif;

  .swiper {
    margin-bottom: 6rem;
  }

  p {
    font-size: 3.2rem;
    margin-bottom: 3rem;
  }
  
  .swiper-slide {
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    width: 9rem;
    height: 51.2rem;
    margin: -25.6rem -1rem;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: bolder;
    mask-image: none;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
	  animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  .swiper-button-prev {
    background: linear-gradient(to left, transparent 0%, ${({ theme }) => theme.COLORS.BACKGROUND_900} 100% 0%, transparent 100%);
  }

  .swiper-button-next {
    background: linear-gradient(to right, transparent 0%, ${({ theme }) => theme.COLORS.BACKGROUND_900} 100% 0%, transparent 100%);
  }

  @keyframes scale-up-center {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`;

export const Banner = styled.div`
  position: relative;
  text-align: center;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;

  margin-bottom: 6.2rem;
  margin-top: 16.4rem;

  .banner {
    display: flex;
    justify-content: end;

    height: clamp(4rem, 21.4vw, 26rem);

    background: linear-gradient(180deg, ${({ theme }) => theme.COLORS.BLUE_400} 0%, ${({ theme }) => theme.COLORS.BLUE_500} 100%);
    border-radius: 0.8rem;
    position: relative;
  }

  .title {
    //padding: 8.7rem 4.6rem 0 0;
    margin-top: clamp(1rem, 6.4vw, 8.8rem);
    padding-left: clamp(1rem, 9vw, 8.7rem);
    margin-right: 3vw;
    gap: clamp(0, 0.1vw, 0.8rem);

    width: clamp(1rem, 56vw, 54rem);
    height: 26rem;

    text-align: left;
  }

  img {
    margin-bottom: -2.7rem;

    width: 58%;
    position: absolute;
    bottom: 1.3rem;
    z-index: 1;
    left: -5rem;
  }

  h1 {
    font-size: clamp(1rem, 3.5vw, 4rem);
    font-weight: 500;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: clamp(1rem, 2.5vw, 1.6rem);
    font-weight: 400;
  }
`;
