import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import AuthContext from "@/utils/AuthContext";
import React from "react";
import {ApolloProvider} from "@apollo/client";
import client from "@/utils/ApolloClient";
import Layout from "@/layouts/layout";
import localFont from "@next/font/local";
import {SnackbarProvider} from "notistack";


const poppins = localFont({
    src: [
        {
            path: './../fonts/Poppins-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './../fonts/Poppins-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './../fonts/Poppins-ExtraBold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: './../fonts/Poppins-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './../fonts/Poppins-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
    ],
})

export default function App({Component, pageProps}: AppProps) {
    return (
        <AuthContext>
            <SnackbarProvider>
                <ApolloProvider client={client}>
                    <Layout>
                        <Component {...pageProps} className={poppins.className}/>
                    </Layout>
                </ApolloProvider>
            </SnackbarProvider>
        </AuthContext>
    )
}
