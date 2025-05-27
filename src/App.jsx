import React from "react";
import { Navbar6 } from "./components/Navbar6";
import { Header26 } from "./components/Header26";
import { Layout90 } from "./components/Layout90";
import { Layout238 } from "./components/Layout238";
import { Layout4 } from "./components/Layout4";
import { Cta19 } from "./components/Cta19";
import { Footer10 } from "./components/Footer10";
import { Timeline10 } from "./components/Timeline";

export default function Page() {
  return (
    <div className="relative z-0">
      <div>
        <meta name="google-site-verification" content="zO1u8NQYgHAPUrmDrGJG30pS_IsAPPAhA17LxzGt2l4" />
        <link 
          rel="preload"
          href="../fonts/Cera Pro Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <div className="relative z-10"><Navbar6 /></div>
        <div className="relative z-10"><Header26 /></div>
        <Layout90 />
        <div className="relative z-10"><Timeline10 /></div>
        <div className="relative z-10"><Layout238 /></div>
        <div className="relative z-10"><Layout4 /></div>
        <div className="relative z-10"><Cta19 /></div>
        <div className="relative z-10"><Footer10 /></div>
      </div>
    </div>
  );
}
