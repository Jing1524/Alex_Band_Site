import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="overflow-x-hidden">
    <Head>
      <title>I Live Dreaming</title>
      <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </Head>
    <header>
      <Header />
    </header>
    {children}
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Layout;
