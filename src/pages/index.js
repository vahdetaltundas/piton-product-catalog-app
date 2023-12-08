import Carousel from "@/components/UI/ImageSlider";
import Header from "../components/Layout/Header";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  
  return (
    <>
    <Header/>
    <Carousel/>
    </>
  )
}
