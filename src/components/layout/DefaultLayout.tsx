"use client";
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function DefaultLayout({ children }: any) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
