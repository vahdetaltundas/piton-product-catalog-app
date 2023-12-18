/* eslint-disable react-hooks/rules-of-hooks */
import Header from "@/components/Layout/Header";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = ({ product }) => {
  const [bookImg, setBookImg] = useState();
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
      <div className="container mt-10 mx-auto">
      <h1 onClick={()=>router.push("/")} className='my-10 text-2xl cursor-pointer'>{"< Book Details"}</h1>
        <div className="flex flex-row">
          <div class="basis-1/3 bg-[#f4f4ff]">
            <img
              alt=""
              className="w-full h-auto object-cover object-center"
              src={bookImg}
            />
          </div>
          <div class="basis-2/3 pl-14 relative ">
            <h1 className="text-gray-900 text-6xl mb-3">
              {product?.name}
            </h1>
            <h2 className=" title-font text-2xl text-gray-500 tracking-widest mb-7">
              {product?.author}
            </h2>

            <p className="text-xl">
              {product.description}
            </p>
            <div class="absolute bottom-10 right-0 p-3 rounded-lg cursor-pointer flex items-center bg-[#ef6b4a] justify-between">
              <span className="text-white text-2xl mr-32">
                $ {product.price}
              </span>
              <p className="text-white text-2xl">Buy Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps({ req, params }) {
  try {
    const product = await axios.get(
      `https://assign-api.piton.com.tr/api/rest/product/${params.id}`
    );
    if (product.data.product_by_pk) {
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
