import { addToBook } from "@/store/productsSlice";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const MiniCard = ({ product,categoryId }) => {
  const router = useRouter();
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
    <div
      onClick={()=>router.push(`/book/${product.id}`)}
      className="flex flex-col h-96 md:h-72 cursor-pointer bg-[#f4f4ff] border border-[#f4f4ff]-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-purple-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-36 mx-auto md:mx-0 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={bookImg}
        alt=""
      />
      <div className="flex flex-col py-8 px-3 leading-normal">
        <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.author}
        </p>
        <span className="mt-auto mb-3 font-normal text-2xl md:text-3xl text-[#6251dd] dark:text-gray-400">
          {`${product.price} $`}
        </span>
      </div>
    </div>
  );
};

export default MiniCard;
