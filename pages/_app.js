import React from 'react';
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function myApp({Component, pageProps}){
    return <Component {...pageProps}/>
}

export default myApp;