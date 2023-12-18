/* eslint-disable react-hooks/rules-of-hooks */
import Header from "@/components/Layout/Header";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = ({product}) => {
  const [bookImg,setBookImg]=useState()
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getBookImg(product?.cover);
  }, [id]);
  const getBookImg = async (cover) => {
    try {
      const response = await axios.post(
        "https://assign-api.piton.com.tr/api/rest/cover_image",
        { fileName: cover }
      );
      setBookImg(response.data.action_product_image.url);
    } catch (error) {
      console.log("Error=>", error);
    }
  };
  
  
  
  return (
    <div>
      <Header />
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-14 mx-auto">
          <div className="lg:w-3/5 mx-auto flex flex-wrap">
            <img
              alt=""
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={bookImg}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.name}
              </h1>
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product?.author}
              </h2>

              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export async function getServerSideProps({ req, params }) {
  
    try {
      const product = await axios.get(
        `https://assign-api.piton.com.tr/api/rest/product/${params.id}`
      );
      if(product.data.product_by_pk){
        return {
            props: {
              product: product ? product.data.product_by_pk : null,
            },
          };
      }
    
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    } catch (err) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
}

export default index;
