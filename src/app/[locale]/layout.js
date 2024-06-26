import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import StyledComponentsRegistry from '@/lib/registry';
import React from 'react';
import GlobalStyle from '@/Styles/globals';

export default async function LocaleLayout({ children, params: { locale } }) {
   const messages = await getMessages();

   return (
      <html lang={locale}>
         <head>
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link
               rel='preconnect'
               href='https://fonts.gstatic.com'
               crossOrigin='true'
            />
            <link
               href='https://fonts.googleapis.com/css2?family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap'
               rel='stylesheet'
            />
         </head>
         <body>
            <NextIntlClientProvider messages={messages}>
               <StyledComponentsRegistry>
                  <GlobalStyle />
                  {children}
               </StyledComponentsRegistry>
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
