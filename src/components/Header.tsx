"use client";
import React from "react";
import Link from "next/link";

import { useEffect, useState } from "react";

const Header = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    setClientWindowHeight(window.scrollY);
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (clientWindowHeight != 0 && backgroundTransparacyVar >= 1) {
      setBackgroundTransparacy(0.99);
      setPadding(0);
      setBoxShadow(0.1);
    }

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 0 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <nav
      className="m-auto w-full fixed top-0 z-40"
      style={{
        background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        padding: `${padding}px 10px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <div className="flex items-center gap-8 justify-between py-4">
        <Link href={"/"} className="hover:opacity-60">
          <img
            src="/images/logo/logo-ink-transparent-backgroundv5.png"
            alt=""
            className="w-1/2"
          />
        </Link>
        <div className="flex items-center gap-10">
          <Link
            href="/about"
            className="font-medium text-lg text-black hover:opacity-90"
          >
            About
          </Link>
          <Link
            href="/blog-and-announcements"
            className="font-medium text-lg text-black hover:opacity-90"
          >
            Announcements
          </Link>
          <Link
            href="/knowledge-center"
            className="font-medium text-lg text-black hover:opacity-90"
          >
            Knowledge Center
          </Link>
          <Link
            href="/"
            className="font-medium text-lg text-white bg-black px-5 py-2 rounded-lg hover:opacity-90"
          >
            Sign Up Here!
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
