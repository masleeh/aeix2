"use client"

import Footer from "@/components/Common/Footer/Footer";
import Navbar from "@/components/Common/Navbar/Navbar";
import Description from "@/components/IndexPage/Description/Description";
import FAQ from "@/components/IndexPage/FAQ/FAQ";
import Features from "@/components/IndexPage/Features/Features";
import Header from "@/components/IndexPage/Header/Header";
import CTAModal from "@/components/IndexPage/Modals/CTAModal/CTAModal";
import Pictures from "@/components/IndexPage/Pictures/Pictures";
import Plan from "@/components/IndexPage/Plan/Plan";
import Roles from "@/components/IndexPage/Roles/Roles";
import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";

export default function Home() {
  const {
    isAuthFormShow,
    isCTAFormShow,
    setIsAuthFormShow,
    setIsCTAFormShow
  } = useContext(GlobalContext)

  return (
    <>
      <Navbar />
      <Header />
      <Description />
      <Pictures />
      <Features />
      <Roles />
      <FAQ />
      <Plan />
      <Footer />
      {isCTAFormShow && <CTAModal setIsCTAFormShow={setIsCTAFormShow} isCTAFormShow={isCTAFormShow}/>}
    </>
  )
}
