import styled from 'styled-components';

export const LoginPageStyles = styled.div`
   height: 100vh;
   min-height: 50rem;
   margin: 0 auto;
   overflow-y: hidden;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   position: relative;

   &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url('/assets/wallpapers/login.jpg');
      background-repeat: no-repeat;
      background-position: left;
      background-size: cover;
      opacity: 55%;
   }
   &::after {
      backdrop-filter: blur(0.6rem);
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
   }
`;

export const LoginBox = styled.div`
   z-index: 1;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 45rem;
   width: 40rem;
   min-width: 35rem;
   padding: 2rem;
   border: 1px solid rgba(var(--purple-1));
   background-color: rgba(var(--dark));
   border-radius: 1.1rem;

   .logo {
      margin: 0 auto;
   }
   .input-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 0.5rem;
      position: relative;
      padding-bottom: 2rem;

      .keep {
         display: flex;
         align-items: center;
         font-size: 1.3rem;
         justify-content: center;
         width: 12rem;
         position: absolute;
         bottom: 0;
         left: 1rem;
      }
   }
`;

export const Access = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   .forgot-passaword {
      font-size: 1.2rem;
      color: rgba(var(--purple-1), 0.7);
      cursor: pointer;

      &:hover {
         color: rgba(var(--purple-1));
      }
   }
   .or {
      font-size: 1.5rem;
      margin: 0;
      position: relative;
      &::before,
      &::after {
         content: '';
         height: 1px;
         width: 8rem;
         background-color: rgba(var(--light));
         position: absolute;
         top: 55%;
      }
      &::before {
         left: 150%;
      }
      &::after {
         right: 150%;
      }
   }
   .register {
      padding: 0.5rem;
      color: rgba(var(--purple-1));
      text-decoration: underline;
      font-size: 1.6rem;
      letter-spacing: 1px;

      &:hover {
         color: rgba(var(--cyan), 0.9);
      }
   }
`;
