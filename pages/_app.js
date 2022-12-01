import "../styles/global.css";
import { Layout } from "../components";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import NProgress from "nprogress";
import { Router } from "next/router";

function MyApp({ Component, pageProps }) {


  NProgress.configure({showSpinner:false})
  Router.events.on('routeChangeStart', ()=>{
    NProgress.start()
  })

  Router.events.on('routeChangeComplete', ()=>{
    NProgress.done()
  })
  return (
    <>
    <Head>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Estater</title>

    </Head>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    </>
  );
}

export default MyApp;

