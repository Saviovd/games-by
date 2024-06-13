'use client';
import { useTranslations, useLocale } from 'next-intl';
import Header from '@/components/Header/Header';
import GlobalStyle from '@/Styles/globals';
import { useEffect, useState } from 'react';
import { useRouter } from '../../../navigation';
require('dotenv').config();

// export const metadata = {
//    title: "Games By | Home",
//    description: "Generated by create next app",
// };

export default function Index() {
   const locale = useLocale();
   console.log(locale)
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
         setIsLoggedIn(true);
      }
   }, []);

   return (
      <>
         <GlobalStyle />
         <Header isLoggedIn={isLoggedIn} />
         {isLoggedIn ? (
            <div>
               <p>Usuário logado!</p>
            </div>
         ) : (
            <div>
               <p>Você precisa estar logado para acessar esta página.</p>
            </div>
         )}
      </>
   );
}
