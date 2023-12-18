import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CardComp = ({product}) => {
    const [bookImg, setBookImg] = useState("");
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
  useEffect(() => {
    getBookImg(product.cover);
  }, []);
  return (
    <div className="max-w-sm bg-[#f4f4ff] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/book/${product.id}`}>
        <img
          className="rounded-t-lg w-full h-96 p-5"
          src={bookImg}
          alt=""
        />
      </Link>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </a>
        <div className="flex justify-between items-center">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {product.author}
        </p>
        <span className="text-2xl text-[#6251dd]">
            {product.price} $
        </span>
        </div>
      </div>
    </div>
  );
};

export default CardComp;
